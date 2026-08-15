import React, { useState } from 'react';

export default function AnhrazheshtTeghekatvutyun() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Բացվող բաժիններ) */}
        <h2 className="text-xl md:text-2xl font-extrabold text-[#1C1C1E] mb-6">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="flex flex-col gap-4">
          
          {/* ԲԱԺԻՆ 1: Ուշադրություն */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button 
              onClick={() => toggleSection(0)}
              className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-left"
            >
              <span className={`text-base md:text-lg font-bold transition-colors ${openSection === 0 ? "text-[#5E1EEB]" : "text-[#1C1C1E]"}`}>
                Ուշադրություն.
              </span>
              <svg 
                className={`w-5 h-5 text-[#5E1EEB] transform transition-transform duration-300 ${openSection === 0 ? "rotate-180" : "rotate-0"}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openSection === 0 && (
              <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի յուրաքանչյուր բաժնետեր, համաձայն «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ մասի, իրավունք ունի ստանալու մեր վերջին տարեկան հաշվետվության և արտաքին աուդիտի եզրակացության պատճենները:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի տեղաբաշխված քվեարկող բաժնետոմսերի 2%-ին և ավելիին տիրապետող յուրաքանչյուր բաժնետեր իրավունք ունի ստանալու «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ և 5-րդ մասերով սահմանված տեղեկությունները:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    Վերոնշյալ տեղեկությունները տրամադրում ենք ԱՆՎՃԱՐ՝ բաժնետիրոջ գրավոր դիմումը ստանալու հետո 3 (երեք) աշխատանքային օրվա ընթացքում: Գրավոր դիմումը կարող է ներկայացվել առձեռն՝ մեր Գլխամասային գրասենյակում, ցանկացած մասնաճյուղում կամ ներկայացուցչությունում, էլեկտրոնային հասցեով՝ hello@evoca.am կամ փոստով՝ ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    Շահութաբաժինների բաշխումը կատարվում է ՀՀ օրենսդրական ակտերի համաձայն և Բանկի կանոնադրությամբ սահմանված կարգով:
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ԲԱԺԻՆ 2: Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button 
              onClick={() => toggleSection(1)}
              className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-left"
            >
              <span className={`text-base md:text-lg font-bold transition-colors ${openSection === 1 ? "text-[#5E1EEB]" : "text-[#1C1C1E]"}`}>
                Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ
              </span>
              <svg 
                className={`w-5 h-5 text-[#5E1EEB] transform transition-transform duration-300 ${openSection === 1 ? "rotate-180" : "rotate-0"}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openSection === 1 && (
              <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2011թ. Բանկի կանոնադրական կապիտալը համալրվել է 7.2 մլրդ. դրամով՝ կազմելով 14 մլրդ. 400 մլն. դրամ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    Մեր մասնակիցների 08.07.2016թ. արտահերթ ընդհանուր ժողովի որոշմամբ՝ Բանկը սահմանափակ պատասխանատվությամբ ընկերությունից վերակազմավորվել է փակ բաժնետիրական ընկերության և մեր փաստացի համալրված կանոնադրական կապիտալը (14 մլրդ. 400 մլն. դրամ) բաժանվել է 144,000 հատ հասարակ բաժնետոմսերի, յուրաքանչյուրը՝ 100,000 դրամ անվանական արժեքով:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2016թ. Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. 550 մլն. դրամով և կազմել 17 մլրդ. 950 մլն. դրամ: Մենք տեղաբաշխել ենք 100,000 դրամ անվանական արժեքով 35,500 հատ արտոնյալ բաժնետոմս:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2020թ. Բանկի կանոնադրական կապիտալը համալրվել է 2 մլրդ. 50 մլն. դրամով և կազմել 20 մլրդ. դրամ: Այդ թվում՝ մենք տեղաբաշխել ենք նաև 29.05.2020թ. թողարկման 100,000 դրամ անվանական արժեքով 14,500 հատ արտոնյալ բաժնետոմս:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2020թ. ՀՀ քաղաքացի Մարետա Գևորգյանը դարձել է Բանկի ուղղակի նշանակալից բաժնետեր:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2022թ. ՀՀ քաղաքացի Մարետա Գևորգյանի կողմից Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. դրամով և կազմել 23 մլրդ. դրամ: Այդ թվում՝ մենք տեղաբաշխել ենք 12.03.2022թ. թողարկման 100,000 ՀՀ դրամ անվանական արժեքով 7,500 հատ արտոնյալ բաժնետոմս:
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ԲԱԺԻՆ 3: Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
            <button 
              onClick={() => toggleSection(2)}
              className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-left"
            >
              <span className={`text-base md:text-lg font-bold transition-colors ${openSection === 2 ? "text-[#5E1EEB]" : "text-[#1C1C1E]"}`}>
                Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ
              </span>
              <svg 
                className={`w-5 h-5 text-[#5E1EEB] transform transition-transform duration-300 ${openSection === 2 ? "rotate-180" : "rotate-0"}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openSection === 2 && (
              <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2003-2006 թթ. մեր մասնակիցների միջև շահաբաժիններ չեն բաշխվել: Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթն ուղղվել է մեր կանոնադրական հիմնադրամի համալրմանը կամ որպես չբաշխված շահույթ թողնվել մեր տրամադրության տակ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2006թ. 9 ամսվա գործունեություն արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 80 մլն. դրամ շահաբաժին:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2007թ. 9 ամսվա գործունեություն արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 55 մլն. դրամ շահաբաժին:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2008թ. փաստացի ստացված զուտ շահույթն Ընդհանուր ժողովի որոշմամբ թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2009թ. Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթից 70 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2010-2012 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2013թ. փաստացի ստացված զուտ շահույթից 895 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2014թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2015թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2016թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2017թ. փաստացի ստացված զուտ շահույթից 78 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2018թ. փաստացի ստացված զուտ շահույթից 426 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2019թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2020թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2021թ. փաստացի ստացված զուտ շահույթից 482 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                  <p className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    2022թ. փաստացի ստացված զուտ շահույթից 571 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}