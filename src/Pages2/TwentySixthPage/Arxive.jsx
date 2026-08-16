 import React, { useState } from 'react';

export default function Arxive() {
  // Ակորդեոնի կետերի ցանկը (առանց ներքին փաստաթղթերի)
  const archiveSections = [
    { title: "Կանխիկ մուտքի համար Բանկի կողմից սահմանված դրույքաչափեր" },
    { title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ" },
    { title: "Վարկավորման պայմաններ և սակագներ" },
    { title: "Ավանդների ներգրավման պահմաններ և սակագներ" },
    { title: "Վճարային քարտերի տրամադրման և օգտագործման պայմաններ" },
    { title: "Սակագներ և դրույքներ" }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      style={{ fontFamily: '"Montserratarm-Medium", Helvetica, Arial, sans-serif' }}
      className="w-full py-10 px-4 md:px-16 bg-white select-none text-[#333333]"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Անհրաժեշտ տեղեկատվություն բաժին */}
        <h1 className="text-[26px] md:text-[32px] font-bold uppercase mb-8 tracking-wide">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h1>

        {/* Ակորդեոնների ցանկ */}
        <div className="flex flex-col gap-3 mb-12">
          {archiveSections.map((section, index) => (
            <div 
              key={index} 
              className="border border-[#EBDFFF] rounded-xl bg-white overflow-hidden transition-all duration-300"
            >
              <div 
                onClick={() => toggleAccordion(index)}
                className="flex items-center gap-4 p-4 md:p-5 cursor-pointer hover:bg-gray-50/50"
              >
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

                <span className="font-bold text-[#6B6B6C] text-[15px] md:text-[16px]">
                  {section.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Առանձին Փաստաթղթեր բաժինը տակը */}
        <div className="mt-8">
          <h2 className="text-[22px] md:text-[26px] font-bold uppercase mb-6 tracking-wide">
            Փաստաթղթեր
          </h2>

          <div className="flex items-center gap-4 p-4 bg-[#F9F7FC] rounded-xl border border-[#EBDFFF] hover:bg-[#F4EEFF] transition-colors cursor-pointer max-w-full">
            <div className="text-[#5E1EEB]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            
            <span className="text-[#333333] font-medium text-sm md:text-base">
              Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}