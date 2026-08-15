import React from 'react';

export default function Hashvetvutyunner() {
  // Աուդիտորական եզրակացությունների ցանկը ըստ տարեթվերի
  const auditReports = [
    { year: 2025, title: "2025 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2024, title: "2024 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2023, title: "2023 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2022, title: "2022 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2021, title: "2021 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2020, title: "2020 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2019, title: "2019 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2018, title: "2018 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2017, title: "2017 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2016, title: "2016 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2015, title: "2015 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2014, title: "2014 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2013, title: "2013 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2012, title: "2012 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2011, title: "2011 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2010, title: "2010 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2009, title: "2009 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2008, title: "2008 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2007, title: "2007 Աուդիտորական եզրակացություն", href: "#" },
    { year: 2006, title: "2006 Աուդիտորական եզրակացություն", href: "#" },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Հիմնական վերնագիր */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1C1C1E] mb-10">
          Աուդիտորական եզրակացություն
        </h1>

        {/* Ցանկի երկսյուն դասավորություն (Desktop-ում 2 սյուն, Mobile-ում՝ 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {auditReports.map((report) => (
            <div key={report.year} className="flex flex-col gap-3">
              {/* Տարեթվի վերնագիր */}
              <h2 className="text-xl md:text-2xl font-bold text-[#1C1C1E]">
                {report.year}
              </h2>

              {/* Փաստաթղթի կոճակ / հղում */}
              <a 
                href={report.href}
                className="group flex items-center gap-4 p-4 md:p-5 bg-[#F8F8FA] hover:bg-[#F2EDFF] border border-transparent hover:border-[#5E1EEB]/20 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm"
              >
                {/* Փաստաթղթի և ներբեռնման SVG նշան */}
                <div className="text-[#5E1EEB] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H13M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="15" r="4" fill="#5E1EEB" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 13V17M12 17L10.5 15.5M12 17L13.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Փաստաթղթի անվանում */}
                <span className="text-sm md:text-base font-bold text-[#1C1C1E] group-hover:text-[#5E1EEB] transition-colors">
                  {report.title}
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}