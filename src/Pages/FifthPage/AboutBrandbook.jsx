import React from "react";

const AboutBrandbook = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 bg-[#F8F9FA]">
      {/* Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-6 tracking-tight">
        Բանկի բրենդբուքը
      </h2>

      {/* Տեքստ */}
      <p className="text-[#3A3A3C] text-[16px] md:text-[18px] max-w-4xl mb-12 leading-relaxed">
        Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրերը: Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար:
      </p>

      {/* Նկար (cursor-pointer-ով) */}
      <div className="flex justify-center">
        <img
          src="https://www.evoca.am/file_manager/other/52.png"
          alt="Evocabank Brandbook"
          className="w-full max-w-5xl h-auto object-cover rounded-2xl cursor-pointer hover:opacity-95 transition-opacity shadow-sm"
        />
      </div>
    </div>
  );
};

export default AboutBrandbook;