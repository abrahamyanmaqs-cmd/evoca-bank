 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../../firebase"; // Ճշգրիր ուղին ըստ քո ֆայլի տեղադրության
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialNews = [
    {
      category: "Բանկային",
      title: "Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»",
      image: "https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png",
      link: "/news"
    },
    {
      category: "Բանկային",
      title: "Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր...",
      image: "https://www.evoca.am/images-cache/news/1/17854167235525/439x320.png",
      link: "/news"
    },
    {
      category: "Բանկային",
      title: "Գործարքների արգելափակում 1 կոճակով",
      image: "https://www.evoca.am/images-cache/news/1/17852444643548/439x320.png",
      link: "/news"
    }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const colRef = collection(db, "news");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե դատարկ է, ավելացնում ենք սկզբնական նորությունները Firebase-ում
          for (const item of initialNews) {
            await addDoc(colRef, item);
          }
          const newSnapshot = await getDocs(colRef);
          setNewsItems(newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setNewsItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Բեռնվում է նորությունները...</div>;
  }

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-16 w-full select-none">
      <div className="max-w-[1300px] mx-auto w-full">
        
        {/* Վերնագրի հատված և «Բոլոր նորությունները» կոճակ */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#1C1C1E] tracking-tight">
            Վերջին նորությունները
          </h2>
          
          <Link
            to="/news"
            className="bg-[#F0EDF9] hover:bg-[#E4DFF3] text-[#6400DC] font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Բոլոր նորությունները 
            <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
          </Link>
        </div>

        {/* Նորությունների քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100"
            >
              {/* Նկարի բլոկ */}
              <div className="w-full h-[220px] sm:h-[240px] bg-gray-100 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Բովանդակություն */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1 h-3.5 bg-[#6400DC] rounded-full inline-block"></span>
                    <span className="text-xs font-semibold text-[#636366] uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1C1C1E] group-hover:text-[#6400DC] transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}