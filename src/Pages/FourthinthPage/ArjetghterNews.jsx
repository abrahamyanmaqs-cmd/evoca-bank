import React from 'react';

const ArjetghterNews = () => {
  const newsList = [
    {
      id: 1,
      image: "https://www.evoca.am/images-cache/news/1/17864472573391/439x320.png",
      tag: "Բանկային",
      title: "Հայաստանում գործարկվեց Firebird AI-ի «ԱԲ գործարանը»",
      date: "11.08.2026"
    },
    {
      id: 2,
      image: "https://www.evoca.am/images-cache/news/1/17854167235525/439x320.png",
      tag: "Բանկային",
      title: "Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր...",
      date: "30.07.2026"
    },
    {
      id: 3,
      image: "https://www.evoca.am/images-cache/news/1/17852444643548/439x320.png",
      tag: "Բանկային",
      title: "Գործարքների արգելափակում 1 կոճակով",
      date: "01.06.2026"
    }
  ];

  return (
    <div className="w-full font-['MontserratARM',sans-serif] py-16 px-4 md:px-10 bg-[#f0f7fe]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Վերնագրի հատված և կոճակ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E] tracking-tight">
            Վերջին նորությունները
          </h2>
          <button className="bg-[#E5EEF9] text-[#5E1EEB] font-semibold px-6 py-3 rounded-full hover:bg-[#5E1EEB] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer w-fit">
            Բոլոր նորությունները
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Նորությունների քարտեր */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-[#E5E7EB]/60"
            >
              {/* Նկար */}
              <div className="w-full h-[240px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Բովանդակություն */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="flex flex-col gap-3">
                  {/* Թեգ (Մանուշակագույն ուղղանկյունով ձախից) */}
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-[#5E1EEB] rounded-full"></span>
                    <span className="text-[14px] font-semibold text-[#5E1EEB]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Վերնագիր */}
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1C1C1E] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Ամսաթիվ */}
                <div className="text-[14px] text-[#9CA3AF] font-medium pt-2">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ArjetghterNews;