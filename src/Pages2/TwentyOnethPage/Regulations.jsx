import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

export default function Kanonakarger() {
  const [regulationsList, setRegulationsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultRegulations = [
    { id: "1", title: "Կանոնակարգ 1 «Բանկերի և օտարերկրյա բանկերի մասնաճյուղերի գրանցումն ու լիցենզավորումը...»" },
    { id: "2", title: "Կանոնակարգ 2 «Բանկերի գործունեության կարգավորումը, բանկային գործունեության հիմնական տնտեսական նորմատիվները»" },
    { id: "3", title: "Կանոնակարգ 3 «Բանկերի հաշվետվությունները, դրանց ներկայացումը և հրապարակումը»" },
    { id: "4", title: "Կանոնակարգ 7 «Անվճարունակ բանկերի և վարկային կազմակերպությունների ժամանակավոր ադմինիստրացիայի ձևավորման կարգն ու ժամկետները...»" },
    { id: "5", title: "Կանոնակարգ 8/01 «Տարեկան փաստացի տոկոսադրույքի հաշվարկման բացատրություններ և օրինակներ»" },
    // ... և այլն (կարող ես ավելացնել բոլորը)
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "regulations");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե հավաքածուն դատարկ է, լրացնում ենք default տվյալներով
          for (const item of defaultRegulations) {
            await setDoc(doc(colRef, item.id), item);
          }
          setRegulationsList(defaultRegulations);
        } else {
          setRegulationsList(snapshot.docs.map(doc => doc.data()));
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
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#3d3d3d] mb-8">
          Կանոնակարգեր և այլ իրավական ակտեր
        </h2>

        <ol className="list-decimal list-outside ml-6 md:ml-8 space-y-4 md:space-y-5 marker:text-[#5E1EEB] marker:font-semibold">
          {regulationsList.map((item) => (
            <li key={item.id} className="pl-2">
              <a 
                href="https://www.cba.am/AM/laregulations/Regulation_1.zip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base md:text-[17px] font-semibold text-[#5E1EEB] underline decoration-[#5E1EEB] hover:text-[#4916c4] hover:decoration-[#4916c4] transition-colors leading-relaxed"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}