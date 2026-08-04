 import React from "react";

const AboutVision = () => {
  return (
    <div className="w-full  bg-[#5E1EEB] py-16 md:py-24 px-4 md:px-10 text-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Վերնագիր */}
        <h2 className="text-[32px] ml-[78px] md:text-[48px] font-bold mb-10 tracking-tight">
          Մեր տեսլականը
        </h2>

        {/* Բովանդակություն՝ գծիկ և տեքստ */}
        <div className="flex ml-[80px] flex-col md:flex-row items-start md:items-center gap-6 max-w-4xl">
          {/* Սպիտակ հորիզոնական գիծ */}
          <div className="w-16 h-[3px] bg-white flex-shrink-0"></div>
          
          {/* Տեքստ */}
          <p className="text-[17px]  ml-[70px]  md:text-[20px] leading-relaxed font-normal opacity-95">
            Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար:
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutVision;