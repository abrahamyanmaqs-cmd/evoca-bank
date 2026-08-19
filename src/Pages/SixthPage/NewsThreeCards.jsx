import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրիր ուղին ըստ քո ֆայլի կառուցվածքի
import { collection, getDocs, addDoc } from "firebase/firestore";

const NewsThreeCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialCards = [
    {
      category: "Բանկային",
      title: "Գործարքների արգելափակում 1 կոճակով",
      date: "01.06.2026",
      image: "https://www.evoca.am/images-cache/news/1/17852444643548/438x328.png",
    },
    {
      category: "Բանկային",
      title: "ESG կառավարման համակարգը Evocabank-ում",
      date: "31.03.2026",
      image: "https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png",
    },
    {
      category: "Բանկային",
      title: "Evocabank-ը միացել է AmCham Armenia-ին",
      date: "10.02.2026",
      image: "https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png",
    },
  ];

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const colRef = collection(db, "news_three_cards");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          for (const card of initialCards) {
            await addDoc(colRef, card);
          }
          const newSnapshot = await getDocs(colRef);
          setCards(newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setCards(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return null;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
          >
            <div>
              {/* Նկար */}
              <div className="rounded-2xl overflow-hidden mb-5 bg-gray-100 h-[220px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Կատեգորիա */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3.5 h-2.5 bg-[#5E1EEB]"></div>
                <span className="text-[#5E1EEB] font-semibold text-[13px]">
                  {item.category}
                </span>
              </div>

              {/* Վերնագիր */}
              <h3 className="text-[#1C1C1E] font-bold text-[18px] leading-snug mb-4">
                {item.title}
              </h3>
            </div>

            {/* Ամսաթիվ */}
            <span className="text-[#8E8E93] text-[13px] font-medium block">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsThreeCards;