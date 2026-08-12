import React, { useState } from 'react';

const ArjetghterAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      sections: [
        {
          subtitle: "Արժեթղթերի շուկայում բրոքերային ծառայությունների մատուցման կանոններ",
          text: "Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:"
        },
        {
          subtitle: "Արժեթղթերի Պահառության գործունեության կանոններ",
          text: "Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում՝ Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:"
        }
      ]
    },
    {
      title: "Ծառայությունների մատուցման սակագներ",
      links: [
        "Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ",
        "Միջազգային շուկաներում ծառայությունների մատուցման սակագներ"
      ]
    },
    {
      title: "Լրացուցիչ տեղեկատվություն",
      links: [
        "«Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ",
        "«Շահերի բախման սահմանափակման» ընթացակարգ",
        "Ֆոնդային բորսաներ",
        "Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ"
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-['MontserratARM',sans-serif] py-12 px-4 md:px-10 text-[#1C1C1E]">
      <div className="max-w-[1440px] mx-auto">
        
        <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E] mb-8 tracking-tight">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="flex flex-col gap-4">
          {accordionItems.map((item, index) => {
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
                    {item.title}
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
                    {item.sections && (
                      <div className="flex flex-col gap-6">
                        {item.sections.map((sec, idx) => (
                          <div key={idx} className="flex flex-col gap-2">
                            <h3 className="text-[17px] md:text-[18px] font-bold text-[#5E1EEB] underline cursor-pointer hover:text-[#4a15bc]">
                              {sec.subtitle}
                            </h3>
                            <p className="leading-relaxed">
                              {sec.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.links && (
                      <div className="flex flex-col gap-3">
                        {item.links.map((linkText, idx) => (
                          <a 
                            key={idx} 
                            href="#" 
                            className="text-[#5E1EEB] font-semibold underline hover:text-[#4a15bc] transition-colors"
                          >
                            {linkText}
                          </a>
                        ))}
                      </div>
                    )}
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

export default ArjetghterAccordion;