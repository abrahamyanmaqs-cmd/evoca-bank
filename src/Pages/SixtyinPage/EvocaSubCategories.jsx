import React from 'react';
import { useNavigate } from 'react-router-dom';

const subCategories = [
  {
    id: 1,
    title: "Վարկի մարում",
    image: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",  
  },
  {
    id: 2,
    title: "Հաշվի համալրում",
    image: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png",
  },
  {
    id: 3,
    title: "Քարտի համալրում",
    image: "https://resource.evoca.am/images/webPayment/cardtocard.png",
  },
];

export default function EvocaSubCategories() {
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

        {/* Վերնագիր */}
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#5E1EEB] text-center mb-14 tracking-tight">
          EVOCABANK
        </h1>

        {/* Ենթակատեգորիաների Ցանց */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {subCategories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/payments/evoca/${item.id}`)} // Ցանկության դեպքում կարող ես ավելի խորանալ
              className="bg-white rounded-[28px] p-8 shadow-sm transition-all duration-300 flex flex-col items-center justify-between text-center h-[260px] cursor-pointer relative border border-transparent hover:border-[#5E1EEB]/30 hover:shadow-md"
            >
              <div className="flex-grow flex items-center justify-center pt-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>
              <h3 className="text-[#1C1C1E] font-semibold text-[16px] leading-snug mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}