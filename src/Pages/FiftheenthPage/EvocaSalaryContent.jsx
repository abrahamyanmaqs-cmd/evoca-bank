import React from 'react';

const EvocaSalaryContent = () => {
  return (
    <div className="w-full font-['MontserratARM',sans-serif] bg-white py-16 px-6 md:px-16 text-[#1C1C1E]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* Ներածական տեքստ */}
        <p className="text-[17px] md:text-[20px] text-[#374151] leading-relaxed max-w-[1000px]">
          Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ{' '}
          <span className="text-[#5E1EEB] font-bold">նոր հնարավորություններ ու առավելություններ</span>։
        </p>

        {/* Բաժին 1: Mastercard Gold */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[20px] md:text-[24px] font-black text-[#5E1EEB]">
            Բեր աշխատավարձդ Evoca, տար անվճար <span className="underline cursor-pointer">Mastercard Gold</span>
          </h2>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Պրեմիում դասի քարտ
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Հասանելի ամբողջ աշխարհում
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Գումարի անվտանգության բարձր մակարդակ
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Դրական մնացորդի նկատմամբ <span className="text-[#5E1EEB] font-bold">2% տարեկան տոկոսադրույք</span>
            </li>
          </ul>
        </div>

        {/* Բաժին 2: Evoca Travel Card */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[20px] md:text-[24px] font-black text-[#5E1EEB]">
            Բեր աշխատավարձդ Evoca, տար 50% զեղչով <span className="underline cursor-pointer">Evoca Travel Card</span>
          </h2>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Մինչև <span className="text-[#5E1EEB] font-bold">1.5% cashback</span> արտասահմանում իրականացրած վճարումների համար
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Անվճար <span className="text-[#5E1EEB] font-bold">6 մուտք</span> Lounge Key սրահներ քեզ և հյուրերիդ համար
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Անվճար <span className="text-[#5E1EEB] font-bold">6 անգամ</span> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Այլ ճամփորդական առավելություններ
            </li>
          </ul>
        </div>

        {/* Բաժին 3: Evoca Benefits */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[20px] md:text-[24px] font-black text-[#5E1EEB]">
            Բեր աշխատավարձդ Evoca տար մի շարք <span className="underline cursor-pointer">բենեֆիթներ</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#374151] leading-relaxed">
            Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <span className="text-[#5E1EEB] font-bold">Evoca Benefits</span> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
          </p>
          <ul className="flex flex-col gap-3 pl-2">
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Մինչև <span className="text-[#5E1EEB] font-bold">25% զեղչ</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Մինչև <span className="text-[#5E1EEB] font-bold">25% cashback</span>
            </li>
            <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
              Նվեր քարտեր
            </li>
          </ul>
        </div>

        {/* Բաժին 4: Ավելի ցածր տոկոսադրույքով վարկեր */}
        <div className="flex flex-col gap-10">
          <h2 className="text-[20px] md:text-[24px] font-black text-[#5E1EEB]">
            Բեր աշխատավարձդ Evoca, տար ավելի ցածր տոկոսադրույքով վարկեր
          </h2>

          {/* Ենթաբաժին: Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#5E1EEB] underline cursor-pointer">
              Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ
            </h3>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև աշխատավարձի <span className="text-[#5E1EEB] font-bold">15-ապատիկի չափով</span>
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև <span className="text-[#5E1EEB] font-bold">10 մլն դրամ</span> գումար
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև <span className="text-[#5E1EEB] font-bold">60 ամիս</span> մարման ժամկետ
              </li>
            </ul>
          </div>

          {/* Ենթաբաժին: Ավտովարկ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#5E1EEB] underline cursor-pointer">
              Ավտովարկ
            </h3>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                <span className="text-[#5E1EEB] font-bold">0.5</span>-ով ցածր տոկոսադրույք
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև <span className="text-[#5E1EEB] font-bold">50 մլն դրամ</span> գումար
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև <span className="text-[#5E1EEB] font-bold">84 ամիս</span> մարման ժամկետ
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից
              </li>
            </ul>
          </div>

          {/* Ենթաբաժին: Անշարժ գույքի գրավով սպառողական վարկ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#5E1EEB] underline cursor-pointer">
              Անշարժ գույքի գրավով սպառողական վարկ
            </h3>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                <span className="text-[#5E1EEB] font-bold">0.5</span>-ով ցածր տոկոսադրույք
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև <span className="text-[#5E1EEB] font-bold">100 մլն դրամ</span> գումար
              </li>
              <li className="flex items-center gap-3 text-[16px] md:text-[18px] text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#5E1EEB] flex-shrink-0"></span>
                Մինչև <span className="text-[#5E1EEB] font-bold">120 ամիս</span> մարման ժամկետ
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EvocaSalaryContent;