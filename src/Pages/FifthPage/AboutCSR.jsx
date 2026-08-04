import React from "react";

const AboutCSR = () => {
  const csrItems = [
    "Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,",
    "Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,",
    "Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,",
    "Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:",
  ];

  return (
 <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 bg-[#F8F9FA]">
      
      {/* Գլխավոր Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-6 tracking-tight">
        Կորպորատիվ սոցիալական պատասխանատվություն
      </h2>

      {/* Նկարագրություն */}
      <p className="text-[#3A3A3C] text-[16px] md:text-[18px] max-w-4xl mb-12 leading-relaxed">
        Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
      </p>

      {/* Ցանկ (Grid 2 սյունակով) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
        {csrItems.map((text, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Մանուշակագույն հորիզոնական գծիկ */}
            <div className="w-8 h-[3px] bg-[#5E1EEB] mt-3.5 flex-shrink-0"></div>
            {/* Տեքստ */}
            <p className="text-[#3A3A3C] text-[16px] md:text-[17px] leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutCSR;