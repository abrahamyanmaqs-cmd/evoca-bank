 import React from "react";

const NewsGrid = () => {
  const rightNews = [
    {
      id: 1,
      category: "Մրցանակներ",
      title: "Evocabank. Լավագույն ՖՄԶ բանկը Հայաստանում...",
      date: "08.05.2026",
      image: "https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png",
    },
    {
      id: 2,
      category: "Պրոդուկտներ",
      title: "Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում",
      date: "27.02.2026",
      image: "https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png",
    },
    {
      id: 3,
      category: "Հարցազրույցներ",
      title: "Կարեն Եղիազարյանի հարցազրույցը Los Angeles...",
      date: "25.02.2026",
      image: "https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png",
    },
    {
      id: 4,
      category: "Բանկային",
      title: "Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է",
      date: "12.01.2026",
      image: "https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Ձախ մեծ նորություն (Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between h-full">
          <div>
            {/* Նկարի կոնտեյներ */}
            <div className="relative p-3 mb-6">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[4px] border-l-[4px] border-yellow-400 z-10"></div>
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png"
                  alt="AMX Awards"
                  className="w-full h-[500px] sm:h-[340px] lg:h-[370px] object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-3 bg-yellow-400"></div>
              <span className="text-[#1C1C1E] font-semibold text-[15px]">
                Մրցանակներ
              </span>
            </div>

            <h2 className="text-[22px] md:text-[26px] font-bold text-[#1C1C1E] leading-snug mb-4">
              Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր
            </h2>

            <p className="text-[#4A4A4E] text-[15px] leading-relaxed mb-6">
              Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին:
            </p>
          </div>

          <span className="text-[#8E8E93] text-[14px] font-medium mt-auto">
            16.06.2026
          </span>
        </div>

        {/* Աջ կողմի փոքր նորություններ 2x2 (Span 5) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          {rightNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer h-full"
            >
              <div>
                <div className="rounded-xl overflow-hidden mb-3 bg-gray-100 h-[140px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-2.5 bg-[#5E1EEB]"></div>
                  <span className="text-[#5E1EEB] font-semibold text-[12px]">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-[#1C1C1E] font-bold text-[14px] leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h3>
              </div>

              <span className="text-[#8E8E93] text-[12px] font-medium block mt-auto">
                {item.date}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewsGrid;