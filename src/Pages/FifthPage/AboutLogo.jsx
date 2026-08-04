import React from "react";

const AboutLogo = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 bg-white">
      {/* Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-6 tracking-tight">
        Բանկի լոգոտիպը
      </h2>

      {/* Տեքստ */}
      <p className="text-[#3A3A3C] text-[16px] md:text-[18px] max-w-4xl mb-12 leading-relaxed">
        Բանկի լոգոն կազմված է evolution` էվոլյուցիա բառի արմատից և նմանեցված է evoke` զարթնեցնել բառին: Բառի երկրորդ տառը` V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
      </p>

      {/* Նկար */}
      <div className="flex justify-center">
        <img
          src="https://www.evoca.am/file_manager/icons/logo.png"
          alt="Evocabank Logo"
          className="max-w-full h-auto object-contain py-4"
        />
      </div>
    </div>
  );
};

export default AboutLogo;