import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function OnlineArgument() {
  // Կառավարում ենք բացված/փակված վիճակները (0-րդը՝ Անվտանգությունը, 1-ինը՝ Ակտիվացման կարգը)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:px-0 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Հիմնական վերնագիր */}
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#222222] mb-8">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="space-y-4">
          
          {/* 1. Անվտանգությունը */}
          <div className="border border-[#E5E2EC] rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex items-center justify-between p-5 text-left text-[18px] md:text-[20px] font-bold text-[#222222] hover:bg-[#F9F8FC] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#5E1EEB] text-[22px]">
                  {openIndex === 0 ? <FiChevronUp /> : <FiChevronDown />}
                </span>
                <span>Անվտանգությունը</span>
              </div>
            </button>

            {openIndex === 0 && (
              <div className="px-6 pb-6 pt-2 text-[#222222] text-[16px] md:text-[18px] leading-[1.7] border-t border-[#F0EEF5] bg-white">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Համակարգն առավել անվտանգ դարձնելու նպատակով մեր EvocaOnline համակարգի օգտատերերին առաջարկում ենք Vasco Token Digipass GO-6 սարք:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Vasco Token Digipass GO-6 անվտանգության սարքը մեր սեփականությունն է, որը տրամադրում ենք ձեզ EvocaOnline համակարգ մուտք գործելու անվտանգության համապատասխան գաղտնանիշերի գեներացման համար:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Տվյալների գաղտնագրման համար օգտագործվում է Secure Socket Layer (SSL) տեխնոլոգիան:</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* 2. Ակտիվացման կարգը */}
          <div className="border border-[#E5E2EC] rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex items-center justify-between p-5 text-left text-[18px] md:text-[20px] font-bold text-[#222222] hover:bg-[#F9F8FC] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#5E1EEB] text-[22px]">
                  {openIndex === 1 ? <FiChevronUp /> : <FiChevronDown />}
                </span>
                <span>Ակտիվացման կարգը</span>
              </div>
            </button>

            {openIndex === 1 && (
              <div className="px-6 pb-6 pt-2 text-[#222222] text-[16px] md:text-[18px] leading-[1.7] border-t border-[#F0EEF5] bg-white">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Հավելվածը մեր հաճախորդներին տրամադրում ենք «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Մեր և ձեր միջև բանկային ծառայությունների մատուցման որևէ պայմանագիր կնքելու դեպքում (հաշիվների բացում, վարկերի տրամադրում, ավանդների ներգրավում և այլն), հավելվածն ակտիվանում է ավտոմատ կերպով՝ «Միայն դիտելու» հնարավորությամբ: Համակարգեր մուտք գործելու տվյալները (Login, Password) առկա են ծառայությունների մատուցման պայմանագրերում: Պայմանագրերում առկա է նաև QR կոդի տեսքով հղում՝ հավելվածը App Store-ից կամ Play-Store-ից ներբեռնելու համար:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Ցանկության դեպքում կարող եք ակտիվացնել հավելվածը՝ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 inline-block shrink-0"></span>
                    <span>Եթե արդեն օգտվում եք մեր ծառայություններից, ապա կարող եք դիմել մեզ և ակտիվացնել հավելվածը՝ «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}