import React, { useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը
import { collection, addDoc } from "firebase/firestore";

const BlogThreeCards = () => {
  const cards = [
    {
      id: 1,
      category: "Կենսակերպ",
      title: "2021-ը դարձել է կինո պրեմիերաների մրցավազք",
      date: "01.02.2021",
      image: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg",
    },
    {
      id: 2,
      category: "Կենսակերպ",
      title: "2021-ի ամենասպասված 21 սերիալները",
      date: "18.01.2021",
      image: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png",
    },
    {
      id: 3,
      category: "Կենսակերպ",
      title: "Ապագայի ամենապահանջված մասնագիտությունները",
      date: "22.06.2020",
      image: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png",
    },
  ];

  useEffect(() => {
    const uploadData = async () => {
      try {
        for (const item of cards) {
          await addDoc(collection(db, "blogThreeCards"), item);
        }
        console.log("BlogThreeCards տվյալները Firebase-ում են!");
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };
    uploadData();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
          >
            <div>
              <div className="rounded-2xl overflow-hidden mb-5 bg-gray-100 h-[220px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3.5 h-2.5 bg-[#5E1EEB]"></div>
                <span className="text-[#5E1EEB] font-semibold text-[13px]">
                  {item.category}
                </span>
              </div>

              <h3 className="text-[#1C1C1E] font-bold text-[18px] leading-snug mb-4">
                {item.title}
              </h3>
            </div>

            <span className="text-[#8E8E93] text-[13px] font-medium block">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogThreeCards;