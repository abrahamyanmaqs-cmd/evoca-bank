 import React from "react";

const AboutHero = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 md:py-20">
      
      {/* Էջի Վերնագիր */}
      <h1 className="text-[36px] md:text-[48px] font-extrabold text-[#1C1C1E] mb-14 tracking-tight">
        Ընդհանուր տեղեկատվություն
      </h1>

      {/* Բովանդակություն (Ձախ տեքստ, Աջ նկար) */}
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between">
        
        {/* Ձախ մաս (Տեքստեր) */}
        <div className="w-full lg:w-[52%] flex flex-col gap-6 text-[#3A3A3C] text-[16px] md:text-[17px] leading-relaxed">
          <p className="bg-[#F8F9FA] p-6 rounded-2xl border-l-4 border-[#5E1EEB]">
            <strong className="text-[#5E1EEB] font-bold text-[18px]">Evocabank</strong>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
          </p>
          <p className="px-2">
            Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
          </p>
          <p className="px-2">
            Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս՝ նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման հարմարավետությունը:
          </p>
          <p className="px-2 font-medium text-[#1C1C1E]">
            Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
          </p>
        </div>

        {/* Աջ մաս (Նկար) */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="rounded-[32px] overflow-hidden shadow-xl border border-gray-100 w-full transform hover:scale-[1.01] transition-transform duration-500">
            <img
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png"
              alt="Evocabank General Information"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutHero;