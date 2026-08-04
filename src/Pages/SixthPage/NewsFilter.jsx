 import React, { useState } from "react";

const NewsFilter = () => {
  const [activeTab, setActiveTab] = useState("Գլխավոր");

  const filters = [
    "Գլխավոր",
    "Բանկային",
    "Հարցազրույցներ",
    "Պրոդուկտներ",
    "Նորարարություններ",
    "Կենսակերպ",
    "Մրցանակներ",
    "CSR",
    "Այլ",
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
      {/* Վերնագիր */}
      <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-8 tracking-tight">
        Նորություններ
      </h1>

      {/* Ֆիլտրերի բլոկ */}
      <div className="bg-[#EDF1F5] p-6 rounded-3xl shadow-sm">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-6 py-3 rounded-full text-[15px] font-medium whitespace-nowrap transition-colors duration-200 outline-none cursor-pointer flex-shrink-0 ${
                  isActive
                    ? "bg-[#5E1EEB] text-white font-semibold shadow-sm"
                    : "bg-white text-[#3A3A3C] hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            );
          })}

          {/* «Բոլորը» կոճակը սլաքով */}
          <button className="px-6 py-3 rounded-full text-[15px] font-semibold whitespace-nowrap transition-colors duration-200 outline-none cursor-pointer flex-shrink-0 bg-white text-[#5E1EEB] hover:bg-gray-50 flex items-center gap-2 shadow-sm">
            <span>Բոլորը</span>
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;