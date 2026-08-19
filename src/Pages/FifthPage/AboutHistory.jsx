 import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, query, orderBy } from "firebase/firestore";

const AboutHistory = () => {
  const [historyData, setHistoryData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2026");
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե բազան դատարկ է)
  const initialHistory = [
    { year: "2026", text: "Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը...", image: "https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png" },
    { year: "2025", text: "Բանկը փոխեց իր կազմակերպաիրավական ձևը...", image: "https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png" },
    { year: "2024", text: "Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ...", image: "https://www.evoca.am/images-cache/histories/1/17240707281875/450x330.png" },
    { year: "2023", text: "Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2...", image: "https://www.evoca.am/images-cache/histories/1/17001230844576/450x330.jpg" },
    { year: "2022", text: "Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով...", image: "https://www.evoca.am/images-cache/histories/1/16542512333235/450x330.png" },
    { year: "2021", text: "Evoca-ի նոր, կրեատիվ լուծումներով կայքը Awwwards...", image: "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png" },
  ];

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const colRef = collection(db, "history");
        // Տվյալները ստանում ենք տարեթվի նվազման կարգով
        const q = query(colRef, orderBy("year", "desc"));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          // Եթե դատարկ է, լցնում ենք
          for (const item of initialHistory) {
            await addDoc(colRef, item);
          }
          const newSnapshot = await getDocs(query(colRef, orderBy("year", "desc")));
          setHistoryData(newSnapshot.docs.map(doc => doc.data()));
        } else {
          setHistoryData(snapshot.docs.map(doc => doc.data()));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <div className="text-center py-20">Բեռնվում է պատմությունը...</div>;

  const currentData = historyData.find((item) => item.year === selectedYear) || historyData[0];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-14 tracking-tight">
        Բանկի պատմությունը
      </h2>

      <div className="flex items-center justify-center relative mb-16 overflow-x-auto py-4">
        <div className="absolute w-[80%] h-[2px] bg-gray-200 z-0"></div>
        <div className="flex items-center justify-between w-full max-w-3xl relative z-10 px-6">
          {historyData.map((item) => {
            const isSelected = item.year === selectedYear;
            return (
              <div key={item.year} onClick={() => setSelectedYear(item.year)} className="flex flex-col items-center cursor-pointer group">
                <span className={`text-[16px] md:text-[18px] font-bold mb-2 ${isSelected ? "text-[#5E1EEB]" : "text-gray-400"}`}>
                  {item.year}
                </span>
                <div className={`w-4 h-4 rounded-full border-2 ${isSelected ? "bg-[#5E1EEB] border-[#5E1EEB] scale-110" : "bg-white border-gray-300"}`}></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between bg-[#F8F9FA] rounded-[32px] p-8 md:p-12">
        <div className="w-full lg:w-[50%]">
          <p className="text-[#3A3A3C] text-[16px] md:text-[18px] leading-relaxed">{currentData.text}</p>
        </div>
        <div className="w-full lg:w-[45%]">
          <img src={currentData.image} alt={currentData.year} className="w-full rounded-2xl shadow-sm" />
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;