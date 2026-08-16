import React, { useState } from 'react';

export default function BuildersAccordion() {
  // Այստեղ հավաքված են բոլոր նկարների կազմակերպությունների անունները
  const buildersList = [
    "Dilijan Eye",
    "«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ",
    "«ԱՍՏՐՈՅ» ՍՊԸ",
    "«White island» ՍՊԸ",
    "PARK VIEW",
    "«ՕՊՏԻՄԱ 25» ՍՊԸ",
    "«Midis Park»",
    "«Ավենյու Գրուպ» ՍՊԸ",
    "«ԴԻ ՋԻ ԷՅ ՔԸՆՍԹՐԱՔՇՆ» ՍՊԸ",
    "«ԷԼԻՏՅՈՒ-ԱՐԳՈ» ՍՊԸ",
    "«ԱՏԱՐԱԴ» ՍՊԸ",
    "«Majestic Residence»",
    "ԱՄՈՒՐ 21 ՍՊԸ",
    "«Փիրումյան Շին» ՍՊԸ",
    "In Town",
    "Շինարտ Գրուպ ՍՊԸ",
    "Ս.Կ. ԳՐՈՒՊ ՍՊԸ",
    "ԹՈՓ ԲԻԼԴԻՆԳՍ ՍՊԸ",
    "«Pullman Living and Residences»",
    "«Միթափարթ» ՍՊԸ",
    "«ԲՈՒԼԴՈԶԵՐ ԳՐՈՒՊ» ՍՊԸ",
    "«Նորթերն Գեյթս» ԲԲԸ",
    "«Կոնստրո» ՍՊԸ",
    "«ՌԻՎԵՐ ՍԱՅԴ» ՍՊԸ",
    "«Կամ Դեվելոփմենթս» ՍՊԸ",
    "ՄԵՏՏԱ ԳՐՈՒՊ ՍՊԸ",
    "Վի Էմ Բիլդինգ",
    "ՍՎ ԵՎ ԳԱ ՍՊԸ",
    "Վաղարշ և Որդիներ Կոնցեռն ՍՊԸ (ԷԱ 19/5)",
    "ՍԱՖ ԿԱՊԻՏԱԼ ՍՊԸ (ԷԱ)",
    "Հորիզոն Ինվեստ ՓԲԸ",
    "Իմպերիալ Քոնսթրաքշն ՍՊԸ",
    "«ՇԻՆ ՍԵՐՎԻՍ ԳՐՈՒՊ» ՍՊԸ",
    "Ջեթ Սեթ ՍՊԸ",
    "Մագաս ՍՊԸ (ԷԱ)",
    "ՏԵՍԱՐԱՆ ՓՐՈՋԵՔԹ ՍՊԸ"
  ];

  // Ստեյթ՝ բացված տողի ինդեքսը պահելու համար
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  ml-[120px] mt-12 select-none text-[#333333]">
      
      {/* Վերնագիր */}
      <h2 className="text-[22px] md:text-[26px] font-bold uppercase mb-6 tracking-wide">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      {/* Ցանկի Կոնտեյներ */}
      <div className="flex flex-col gap-3">
        {buildersList.map((builder, index) => (
          <div 
            key={index} 
            className="border border-[#EBDFFF] rounded-xl bg-white overflow-hidden transition-all duration-300"
          >
            {/* Գլխագիր (Header) որի վրա սեղմում են */}
            <div 
              onClick={() => toggleAccordion(index)}
              className="flex items-center gap-4 p-4 md:p-5 cursor-pointer hover:bg-gray-50/50"
            >
              {/* Սլաքի (Chevron) պատկերակ */}
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

              {/* Տեքստ */}
              <span className="font-bold text-[#6B6B6C] text-[15px] md:text-[16px]">
                {builder}
              </span>
            </div>

            {/* Բացվող բովանդակությունը (այժմ դատարկ է, կավելացնես ըստ կարիքի) */}
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[500px] opacity-100 p-5 pt-0" : "max-h-0 opacity-0 px-5 overflow-hidden"
              }`}
            >
              <div className="text-sm text-gray-500 border-t border-gray-100 pt-3">
                Այստեղ կարող է լինել տեղեկատվություն «{builder}»-ի վերաբերյալ:
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}