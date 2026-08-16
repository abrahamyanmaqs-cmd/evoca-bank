import React, { useState } from 'react';

export default function AutoAccordion() {
  const autoList = [
    "ECO MOTORS",
    "JCars",
    "City Auto",
    "Original Motors",
    "Tesla Service Yerevan",
    "E-auto",
    "TESLA ENERGY",
    "E-Mobile",
    "iMotors",
    "EV Centre",
    "Carmark",
    "V&V Trans",
    "Smart Motors",
    "Auto Gallery",
    "INTERCARS Armenia"
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Պահպանված է ml-[120px]-ը, որ համահունչ լինի վերևի տեքստին
    <div className="w-full ml-[120px] mt-12 select-none text-[#333333]">
      
      {/* Վերնագիր */}
      <h2 className="text-[22px] md:text-[26px] font-bold uppercase mb-6 tracking-wide">
        ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
      </h2>

      {/* Ցանկի Կոնտեյներ */}
      <div className="flex flex-col gap-3 max-w-[1100px]">
        {autoList.map((item, index) => (
          <div 
            key={index} 
            className="border border-[#EBDFFF] rounded-xl bg-white overflow-hidden transition-all duration-300"
          >
            {/* Գլխագիր */}
            <div 
              onClick={() => toggleAccordion(index)}
              className="flex items-center gap-4 p-4 md:p-5 cursor-pointer hover:bg-gray-50/50"
            >
              {/* Սլաք */}
              <div className="flex-shrink-0">
                <svg 
                  className={`w-5 h-5 text-[#5E1EEB] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Անուն */}
              <span className="font-bold text-[#6B6B6C] text-[15px] md:text-[16px]">
                {item}
              </span>
            </div>

            {/* Բացվող բովանդակություն */}
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100 p-5 pt-0" : "max-h-0 opacity-0 px-5 overflow-hidden"
              }`}
            >
              <div className="text-sm text-gray-500 border-t border-gray-100 pt-3">
                Այստեղ կարող է լինել տեղեկատվություն «{item}»-ի վերաբերյալ:
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}