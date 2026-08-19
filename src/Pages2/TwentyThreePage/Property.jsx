import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; 
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

export default function Property() {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultProperties = [
    { id: "1", address: "Կոտայքի մարզ, հ. Սոլակ 1-ին փող., 4-րդ նրբ., թիվ 2 հողամաս", description: "հողատարածք", area: "1340 քմ", imageSrc: "https://www.evoca.am/file_manager/Alienated-Property/solak.png" },
    { id: "2", address: "ք. Երևան, Արաբկիր, Բաղրամյան պողոտա 53շ. 69", description: "ոչ բնակելի տարածք", area: "180 քմ", imageSrc: "https://www.evoca.am/file_manager/Alienated-Property/baghramyan-53.jpg" },
    { id: "3", address: "Պռոշյան գյուղ, Մայիսյան 4-րդ նրբանցք, 21 տուն", description: "բնակելի տուն", area: "1400 քմ", imageSrc: "https://www.evoca.am/file_manager/Alienated-Property/proshyan.jpg" },
    { id: "4", address: "Կոտայքի մարզ, գ. Մարմարիկ", description: "հողամաս", area: "7600 քմ", imageSrc: "https://www.evoca.am/file_manager/Alienated-Property/marmarik.jpg" },
    { id: "5", address: "Կոտայքի մարզ, Արտավազ համ., Կարմիր հովիտ", description: "հողամաս (նպատակային նշ.` արոտավայր)", area: "10000 քմ", imageSrc: "https://www.evoca.am/file_manager/Alienated-Property/karmir-hovit_0.jpg" },
    { id: "6", address: "ք. Գյումրի, Ղուկասյան փողոց 8 շարք, թիվ 33 բն.", description: "տուն", area: "115 քմ", imageSrc: "https://www.evoca.am/file_manager/Alienated-Property/Gyumri.jpg" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "properties");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          for (const item of defaultProperties) {
            await setDoc(doc(colRef, item.id), item);
          }
          setPropertiesData(defaultProperties);
        } else {
          setPropertiesData(snapshot.docs.map(doc => doc.data()));
        }
      } catch (error) {
        console.error("Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;

  return (
    <section 
      style={{ fontFamily: '"Montserratarm-Medium", Helvetica, Arial, sans-serif' }}
      className="w-full py-10 px-4 md:px-16 bg-white select-none text-[#333333]"
    >
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[34px] font-medium mb-[24px]">Օտարվող գույք</h1>
        
        <div className="w-full bg-white rounded-xl overflow-hidden border border-[#F4EEFF] shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#F4EEFF]">
                <th className="p-4 md:p-5 text-[#5C5C5E] uppercase text-sm font-medium border-r border-[#F4EEFF] w-[30%]">Հասցե</th>
                <th className="p-4 md:p-5 text-[#5C5C5E] uppercase text-sm font-medium border-r border-[#F4EEFF] w-[25%]">Նկարագրություն</th>
                <th className="p-4 md:p-5 text-[#5C5C5E] uppercase text-sm font-medium border-r border-[#F4EEFF] w-[15%]">Մակերես</th>
                <th className="p-4 md:p-5 text-[#5C5C5E] uppercase text-sm font-medium w-[30%]">Նկար</th>
              </tr>
            </thead>
            <tbody>
              {propertiesData.map((item) => (
                <tr key={item.id} className="border-b border-[#F4EEFF] hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 md:p-5 align-middle border-r border-[#F4EEFF] text-[15px] leading-relaxed">{item.address}</td>
                  <td className="p-4 md:p-5 align-middle border-r border-[#F4EEFF] text-[15px] whitespace-pre-wrap">{item.description}</td>
                  <td className="p-4 md:p-5 align-middle border-r border-[#F4EEFF] text-[15px]">{item.area}</td>
                  <td className="p-4 md:p-5 align-middle">
                    <img src={item.imageSrc} alt={item.description} className="w-full max-w-[280px] h-auto object-cover rounded-md border border-gray-100" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}