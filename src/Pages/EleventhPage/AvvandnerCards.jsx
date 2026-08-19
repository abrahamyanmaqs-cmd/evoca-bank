import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Avandnerr = () => {
  const [deposits, setDeposits] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialDeposits = [
    {
      title: "Դասական ավանդ",
      description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
      image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
      features: [
        { label: "Գումար", value: "100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "10.5% ֏", sub: "Մինչև" },
        { label: "Համալրման հնարավորություն", value: "100,000 ֏", sub: "սկսած" }
      ]
    },
    {
      title: "Մանկական ավանդ",
      description: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
      features: [
        { label: "Գումար", value: "100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "18 լրանալը", sub: "Մինչև" },
        { label: "Տոկոսադրույք", value: "9.5% ֏", sub: "" },
        { label: "Համալրման հնարավորություն", value: "40,000 ֏", sub: "սկսած" }
      ]
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Օգտագործում ենք "allDeposits" անունը
        const colRef = collection(db, "allDeposits");
        const querySnapshot = await getDocs(colRef);
        
        if (querySnapshot.empty) {
          console.log("Հավաքածուն դատարկ է, լցնում ենք...");
          for (const item of initialDeposits) {
            await addDoc(colRef, item);
          }
          // Վերջին անգամ կարդում ենք, որ տվյալները ցուցադրվեն
          const snapshot = await getDocs(colRef);
          setDeposits(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setDeposits(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Խնդիր Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Բեռնվում է...</div>;

  return (
    <div className="w-full bg-[#F8F9FA] py-12 px-4 md:px-10">
      <h1 className="text-[40px] font-black mb-12">Ավանդներ</h1>
      <div className="flex flex-col gap-12">
        {deposits.map((d) => (
          <div key={d.id} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col lg:flex-row gap-8">
            <img src={d.image} alt={d.title} className="w-[415px] rounded-2xl" />
            <div>
              <h3 className="text-[32px] font-black">{d.title}</h3>
              <p className="text-[#6B7280] mb-8">{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avandnerr;