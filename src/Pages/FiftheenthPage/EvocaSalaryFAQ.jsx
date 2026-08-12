import React, { useState } from 'react';

const EvocaSalaryFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:"
    },
    {
      question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:",
      answer: "Ո՛չ: Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին:"
    },
    {
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Իհարկե՛: Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարող էդ միանալ Evoca աշխատավարձային նախագծին:"
    },
    {
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: (
        <div className="flex flex-col gap-3">
          <p>Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին:</p>
          <p>Քարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող եես օգտվել աշխատավարձը Բանկի քարտին մեկ անգամ ստանալուց հետո:</p>
        </div>
      )
    },
    {
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով:"
    },
    {
      question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:",
      answer: (
        <div className="flex flex-col gap-3">
          <p>Միանալու համար կարող ես՝</p>
          <ul className="flex flex-col gap-2 pl-2">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Զանգահարել <span className="text-[#5E1EEB] font-bold">+37410605555 | 8444</span> հեռախոսահամարներով
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Այցելել <span className="text-[#5E1EEB] font-bold">Evocabank</span>-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն
            </li>
          </ul>
        </div>
      )
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-['MontserratARM',sans-serif] py-16 px-6 md:px-16 bg-white text-[#1C1C1E]">
      <div className="max-w-[1200px] mx-auto">
        
        <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E] mb-10 tracking-tight">
          Հաճախ տրվող հարցեր
        </h2>

        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#5E1EEB]/40 ring-2 ring-[#5E1EEB]/5' : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-[17px] md:text-[19px] font-bold transition-colors ${isOpen ? 'text-[#5E1EEB]' : 'text-[#1C1C1E]'}`}>
                    {item.question}
                  </span>
                  
                  {/* Կլոր կոճակով սլաք */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-[#5E1EEB] text-white rotate-180' : 'bg-[#F3F0FD] text-[#5E1EEB]'
                  }`}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#374151] text-[15px] md:text-[16px] leading-relaxed border-t border-[#F3F4F6] pt-5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default EvocaSalaryFAQ;