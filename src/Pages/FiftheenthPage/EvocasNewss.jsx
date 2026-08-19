import React, { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const EvocasNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialNews = [
    {
      image: "https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png",
      tag: "Բանկային",
      title: "Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»",
      date: "11.08.2026"
    },
    {
      image: "https://www.evoca.am/images-cache/news/1/17854167235525/439x320.png",
      tag: "Բանկային",
      title: "Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր...",
      date: "30.07.2026"
    },
    {
      image: "https://www.evoca.am/images-cache/news/1/17852444643548/439x320.png",
      tag: "Բանկային",
      title: "Գործարքների արգելափակում 1 կոճակով",
      date: "01.06.2026"
    }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const colRef = collection(db, "news");
        const snapshot = await getDocs(colRef);
        
        if (snapshot.empty) {
          // Եթե բազան դատարկ է, լցնում ենք
          for (const item of initialNews) {
            await addDoc(colRef, item);
          }
          const newSnapshot = await getDocs(colRef);
          setNews(newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setNews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-center py-20">Բեռնվում է...</div>;

  return (
    <div className="w-full font-sans py-16 px-4 md:px-10 bg-[#f0f7fe]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E]">Վերջին նորությունները</h2>
          <button className="bg-[#E5EEF9] text-[#5E1EEB] font-semibold px-6 py-3 rounded-full hover:bg-[#5E1EEB] hover:text-white transition-colors flex items-center gap-2">
            Բոլոր նորությունները
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <img src={item.image} alt={item.title} className="w-full h-[240px] object-cover" />
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1 h-4 bg-[#5E1EEB] rounded-full"></span>
                    <span className="text-[14px] font-semibold text-[#5E1EEB]">{item.tag}</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1C1C1E]">{item.title}</h3>
                </div>
                <div className="text-[14px] text-[#9CA3AF] font-medium pt-2">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvocasNews;