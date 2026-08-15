import React from 'react';

export default function Phastatpghter() {
  const documents = [
    { title: "Կանոնադրություն", href: "#" },
    { title: "Բանկային գործունեության լիցենզիա", href: "#" },
    { title: "Բանկի Գրանցման վկայականը", href: "#" }
  ];

  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Վերնագիր */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C1C1E] mb-6">
          Փաստաթղթեր
        </h2>

        {/* Փաստաթղթերի ցանկ */}
        <div className="flex flex-col gap-4">
          {documents.map((doc, index) => (
            <a 
              key={index}
              href={doc.href}
              className="group flex items-center justify-between p-4 md:p-5 bg-[#F8F8FA] hover:bg-[#F2EDFF] border border-transparent hover:border-[#5E1EEB]/20 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-4">
                {/* Փաստաթղթի և ներբեռնման նշան (SVG) */}
                <div className="text-[#5E1EEB] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H13M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="15" r="4" fill="#5E1EEB" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 13V17M12 17L10.5 15.5M12 17L13.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Անվանում */}
                <span className="text-base md:text-lg font-bold text-[#1C1C1E] group-hover:text-[#5E1EEB] transition-colors">
                  {doc.title}
                </span>
              </div>

              {/* Աջ կողմի սլաք կամ հավելյալ ինդիկատոր (ըստ ցանկության կարող եք հեռացնել) */}
              <div className="text-gray-400 group-hover:text-[#5E1EEB] transition-colors pr-2">
                <svg className="w-5 h-5 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}