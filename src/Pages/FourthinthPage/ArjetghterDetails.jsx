import React from 'react';

const ArjetghterDetails = () => {
  return (
    <div className="w-full font-['MontserratARM',sans-serif] py-12 px-4 md:px-10 text-[#1C1C1E]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        
        {/* Առաջին տեքստային պարբերություն */}
        <p className="text-[16px] md:text-[18px] leading-relaxed text-[#374151] max-w-5xl">
          Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
        </p>

        {/* Ինչպես դառնալ հաճախորդ */}
        <div className="flex flex-col gap-4 max-w-5xl">
          <h2 className="text-[20px] md:text-[22px] font-bold text-[#5E1EEB]">
            Ինչպե՞ս դառնալ հաճախորդ։
          </h2>
          <p className="text-[16px] md:text-[17px] leading-relaxed text-[#374151]">
            Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ{" "}
            <a href="#" className="text-[#5E1EEB] font-semibold underline hover:text-[#4a15bc]">
              այստեղ
            </a>
            :
          </p>
          <p className="text-[16px] md:text-[17px] leading-relaxed text-[#374151]">
            Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
          </p>
        </div>

        {/* Հասցե */}
        <div className="flex flex-col gap-2 max-w-5xl">
          <h3 className="text-[18px] md:text-[20px] font-bold text-[#5E1EEB]">
            Հասցե՝
          </h3>
          <p className="text-[16px] md:text-[17px] text-[#374151]">
            Երևան, Հանրապետության 44/2
          </p>
        </div>

        {/* Հետադարձ կապ */}
        <div className="flex flex-col gap-3 max-w-5xl">
          <h3 className="text-[18px] md:text-[20px] font-bold text-[#5E1EEB]">
            Հետադարձ կապ՝
          </h3>
          <div className="text-[16px] md:text-[17px] text-[#374151] flex flex-col gap-1">
            <p><span className="font-semibold">Հեռ.՝</span> 374 33 777 453</p>
            <p className="font-semibold">374 33 603 055</p>
          </div>

          {/* Մեսենջերների նկարներ */}
          <div className="flex items-center gap-3 mt-1">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://www.evoca.am/file_manager/icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://www.evoca.am/file_manager/icons/telegram.png" alt="Telegram" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://www.evoca.am/file_manager/icons/viber.png" alt="Viber" className="w-6 h-6 object-contain" />
            </a>
          </div>

          <p className="text-[16px] md:text-[17px] text-[#374151] mt-2">
            Էլ. հասցե՝{" "}
            <a href="mailto:investsecurities@evoca.am" className="text-[#5E1EEB] font-semibold underline hover:text-[#4a15bc]">
              investsecurities@evoca.am
            </a>
          </p>
        </div>

        {/* ՈՒՇԱԴՐՈՒԹՅՈՒՆ բլոկ */}
        <div className="mt-6 pt-6 border-t border-[#E5E7EB] max-w-5xl">
          <p className="text-[15px] md:text-[16px] leading-relaxed text-[#374151]">
            <span className="font-bold text-[#5E1EEB]">ՈՒՇԱԴՐՈՒԹՅՈՒՆ.</span> Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
          </p>
        </div>

      </div>
    </div>
  );
};

export default ArjetghterDetails;