import React from 'react';
import { useNavigate } from 'react-router-dom';

const internationalCategories = [
  {
    id: 1,
    title: "Goodline",
    path: "goodline",
    image: "https://resource.evoca.am/images/WebPayment/goodline.png", // կարող ես փոխել հղումը ըստ քո ցանկության
  },
  {
    id: 2,
    title: "Yota",
    path: "yota",
    image: "https://resource.evoca.am/images/WebPayment/yota.png",
  },
  {
    id: 3,
    title: "Վրացական",
    path: "georgian",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg", // Վրաստանի դրոշի օրինակ
  },
  {
    id: 4,
    title: "Ռուսական",
    path: "russian",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg", // Ռուսաստանի դրոշի օրինակ
  },
];

export default function InternationalMobileSubCategories() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Վերադառնալու կոճակ */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-[#5E1EEB] font-semibold cursor-pointer hover:underline"
        >
          ← Վերադառնալ
        </button>

        {/* Գլխավոր Վերնագիր */}
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#1C1C1E] text-center mb-14 tracking-tight">
          Միջազգային բջջային օպերատորներ
        </h1>

        {/* Քարտերի Ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {internationalCategories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/payments/international/${item.path}`)}
              className="bg-white rounded-[28px] p-8 shadow-sm transition-all duration-300 flex flex-col items-center justify-between text-center h-[260px] cursor-pointer relative border border-transparent hover:border-[#5E1EEB]/30 hover:shadow-md"
            >
              {/* Նկար */}
              <div className="flex-grow flex items-center justify-center pt-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>

              {/* Վերնագիր */}
              <h3 className="text-[#1C1C1E] font-semibold text-[15px] md:text-[16px] leading-snug mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}