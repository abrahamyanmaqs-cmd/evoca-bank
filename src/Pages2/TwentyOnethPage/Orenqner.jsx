import React from 'react';

export default function Orenqner() {
  const lawsList = [
    { title: "Կենտրոնական բանկի մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "ՀՀ քաղաքացիական օրենսգիրք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "Բանկերի և բանկային գործունեության մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { 
      title: "Բանկերի, վարկային կազմակերպությունների, ներդրումային ընկերությունների, ներդրումային ֆոնդի կառավարիչների և ապահովագրական ընկերությունների սնանկության մասին ՀՀ օրենք", 
      href: "https://www.arlis.am/hy/acts/121585" 
    },
    { title: "Բանկային գաղտնիքի մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "Սպառողական կրեդիտավորման մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "Բանկային ավանդների ներգրավման մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "Բնակարանային հիփոթեքային կրեդիտավորման մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { title: "Անձնական տվյալների պաշտպանության մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" }
  ];

  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Հիմնական վերնագիր՝ Իրավական ակտեր */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1E] mb-8">
          Իրավական ակտեր
        </h1>

        {/* Ենթավերնագիր՝ Օրենքներ */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1E] mb-6">
          Օրենքներ
        </h2>

        {/* Օրենքների ցանկ */}
        <div className="flex flex-col gap-4">
          {lawsList.map((law, index) => (
            <a 
              key={index}
              href={law.href}
              className="group flex items-center justify-between p-4 md:p-5 bg-[#F8F8FA] hover:bg-[#F2EDFF] border border-transparent hover:border-[#5E1EEB]/20 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-4">
                {/* Փաստաթղթի SVG նշան */}
                 

                {/* Օրենքի անվանում */}
                <span className="text-base md:text-lg font-bold text-[#1C1C1E] group-hover:text-[#5E1EEB] transition-colors leading-relaxed">
                  {law.title}
                </span>
              </div>

              {/* Աջ կողմի սլաք */}
              <div className="text-gray-400 group-hover:text-[#5E1EEB] transition-colors pr-2 flex-shrink-0">
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