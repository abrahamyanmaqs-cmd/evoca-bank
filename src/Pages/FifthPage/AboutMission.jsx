import React from "react";

const AboutMission = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
      
      {/* Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-8 tracking-tight">
        Մեր առաքելությունը
      </h2>

      {/* Գլխավոր կոնտեյներ (Նկար + Վրայի բլոկ) */}
      <div className="relative w-full">
        
        {/* Հետևի Նկարը */}
        <div className="w-full rounded-[28px] overflow-hidden shadow-md">
          <img
            src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg"
            alt="Evocabank Mission"
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
        </div>

        {/* Վրան կախված սպիտակ բլոկը (Մանուշակագույն ձախ եզրով) */}
        <div className="relative md:absolute md:bottom-[-40px] md:left-12 w-full md:w-[700px] bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-[#5E1EEB] mt-[-60px] md:mt-0 z-10">
          <p className="text-[#3A3A3C] text-[16px] md:text-[18px] leading-relaxed">
            Որպես human-first և խելացի ֆինտեխ ընկերություն՝ մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին՝ բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա:
          </p>
        </div>

      </div>

      {/* Այս դատարկ div-ը անհրաժեշտ է, որպեսզի ներքևի բլոկը չկպնի հաջորդ սեկցիային (քանի որ ունի absolute դիրք) */}
      <div className="h-16 md:h-12"></div>

    </div>
  );
};

export default AboutMission;