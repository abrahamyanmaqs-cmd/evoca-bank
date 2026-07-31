import React, { useState, useEffect } from 'react';
 import { db } from "../../../firebase" // Ներմուծիր քո Firebase կարգավորումների ֆայլից
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';

const initialNews = [
  {
    image: "https://www.evoca.am/images-cache/news/1/17854167235525/439x320.png",
    category: "Բանկային",
    categoryColor: "bg-[#5E1EEB]",
    title: "Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր...",
    date: "30.07.2026",
    createdAt: Date.now() - 3000
  },
  {
    image: "https://www.evoca.am/images-cache/news/1/17852444643548/439x320.png",
    category: "Բանկային",
    categoryColor: "bg-[#5E1EEB]",
    title: "Գործարքների արգելափակում 1 կոճակով",
    date: "01.06.2026",
    createdAt: Date.now() - 2000
  },
  {
    image: "https://www.evoca.am/images-cache/news/1/17847187625556/439x320.png",
    category: "Մրցանակներ",
    categoryColor: "bg-[#FFD700]",
    title: "Evocabank՝ Լավագույն Բանկը Հայաստանում 2026",
    date: "30.06.2026",
    createdAt: Date.now() - 1000
  }
];

export default function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSeedNews = async () => {
      try {
        const newsCollectionRef = collection(db, "news");
        const q = query(newsCollectionRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        // Եթե բազան դատարկ է, ավտոմատ գրում ենք նախնական տվյալները
        if (querySnapshot.empty) {
          for (const item of initialNews) {
            await addDoc(newsCollectionRef, item);
          }
          // Նորից ենք կարդում արդեն լցված տվյալները
          const updatedSnapshot = await getDocs(q);
          const items = updatedSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setNewsData(items);
        } else {
          const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setNewsData(items);
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ աշխատելիս:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSeedNews();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <section className="w-full bg-[#F4F5F9] py-20 px-4 md:px-16 font-montserrat select-none">
        <div className="max-w-[1440px] w-full mx-auto">
          
          {/* Վերնագրի հատված և «Բոլոր նորությունները» կոճակ */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C1C1E] tracking-tight">
              Վերջին նորությունները
            </h2>
            
            <a 
              href="#all-news" 
              className="bg-[#EAE6FF] text-[#5E1EEB] hover:bg-[#5E1EEB] hover:text-white font-bold text-sm py-3.5 px-7 rounded-full transition-all duration-300 flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Բոլոր նորությունները</span>
              <span className="text-lg">›</span>
            </a>
          </div>

          {/* Բեռնման վիճակ (Loading) */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-500 font-medium text-lg">Բեռնվում է...</p>
            </div>
          ) : (
            /* Նորությունների քարտերի ցանց (Grid) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 group cursor-pointer"
                >
                  {/* Նկար */}
                  <div className="w-full h-[260px] overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Բովանդակություն */}
                  <div className="p-7 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Կատեգորիա */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-1 h-4 rounded-full ${item.categoryColor || 'bg-[#5E1EEB]'}`}></span>
                        <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                          {item.category}
                        </span>
                      </div>

                      {/* Վերնագիր */}
                      <h3 className="text-lg md:text-xl font-bold text-[#1C1C1E] mb-6 leading-snug group-hover:text-[#5E1EEB] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Ամսաթիվ */}
                    <div className="text-xs font-medium text-gray-400 pt-4 border-t border-gray-100">
                      {item.date}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}