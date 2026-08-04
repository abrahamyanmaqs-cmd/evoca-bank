import React, { useState } from "react";

const AboutHistory = () => {
  // Տվյալներ տարիների պատմությունների համար
  const historyData = [
    {
      year: "2026",
      text: "Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը:",
      image: "https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png",
    },
    {
      year: "2025",
      text: "Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր։ Ներկայացվեց Evoca Travel Card-ը։ Մեկնարկեցին Evoca Partners Club-ն և Evoca Benefits նախագիծը։",
      image: "https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png", // Կարողես փոխել ըստ ցանկության
    },
    {
      year: "2024",
      text: "Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հովանավորել մի շարք նախագծեր, ներկայացրել իր նոր EvocaHOME օվերդրաֆտը, ինչպես նաև արժանացել միջազգային մրցանակների։",
      image: "https://www.evoca.am/images-cache/histories/1/17240707281875/450x330.png",
    },
    {
      year: "2023",
      text: "Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները։ Գործընկերներին է ներկայացրել Evoca Digital քարտը, Action օնլայն վարկը, Էլեկտրոնային ստորագրության e-Sign համակարգը։",
      image: "https://www.evoca.am/images-cache/histories/1/17001230844576/450x330.jpg",
    },
    {
      year: "2022",
      text: "Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով: Թողարկել է պարտատոմսեր։ Ներկայացրել է Visa Vision քարտը։ ՀայՓոստի հետ սկսել է համագործակցություն՝ հարմարավետ և հասանելի ֆինտեխ ծառայությունների գծով։ Գործարկել է Evoca mobile POS-ը։",
      image: "https://www.evoca.am/images-cache/histories/1/16542512333235/450x330.png",
    },
    {
      year: "2021",
      text: "Evoca-ի նոր, կրեատիվ լուծումներով կայքը Awwwards թիմի կողմից արժանացել է 2 մրցանակի: Բանկը ներկայացրել է իր Evoca Gift Card-ը: Բանկը 2 փուլով թողարկել է պարտատոմսեր, այդ թվում՝ online տարբերակով:",
      image: "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png",
    },
  ];

  // Սթեյթ, որը պահում է ընտրված տարին (սկզբում ընտրված է 2026)
  const [selectedYear, setSelectedYear] = useState("2026");

  // Գտնում ենք ընթացիկ տարվա տվյալները
  const currentData = historyData.find((item) => item.year === selectedYear) || historyData[0];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
      
      {/* Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-14 tracking-tight">
        Բանկի պատմությունը
      </h2>

      {/* Ժամանակագրական գիծ (Timeline) */}
      <div className="flex items-center justify-center relative mb-16 overflow-x-auto py-4">
        {/* Հորիզոնական գիծ հետևում */}
        <div className="absolute w-[80%] h-[2px] bg-gray-200 z-0"></div>

        <div className="flex items-center justify-between w-full max-w-3xl relative z-10 px-6">
          {/* Ձախ սլաք */}
          <button className="text-gray-400 hover:text-[#5E1EEB] transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Տարիների կոճակներ */}
          {historyData.map((item) => {
            const isSelected = item.year === selectedYear;
            return (
              <div
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <span
                  className={`text-[16px] md:text-[18px] font-bold mb-2 transition-colors ${
                    isSelected ? "text-[#5E1EEB]" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                >
                  {item.year}
                </span>
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? "bg-[#5E1EEB] border-[#5E1EEB] ring-4 ring-[#5E1EEB]/20 scale-110"
                      : "bg-white border-gray-300 group-hover:border-gray-400"
                  }`}
                ></div>
              </div>
            );
          })}

          {/* Աջ սլաք */}
          <button className="text-gray-400 hover:text-[#5E1EEB] transition-colors cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Բովանդակություն (Տեքստ + Նկար) */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-between bg-[#F8F9FA] rounded-[32px] p-8 md:p-12">
        
        {/* Ձախ մաս (Տեքստ) */}
        <div className="w-full lg:w-[50%]">
          <p className="text-[#3A3A3C] text-[16px] md:text-[18px] leading-relaxed">
            {currentData.text}
          </p>
        </div>

        {/* Աջ մաս (Նկար) */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-sm bg-white p-4 w-full">
            <img
              src={currentData.image}
              alt={`History ${currentData.year}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutHistory;