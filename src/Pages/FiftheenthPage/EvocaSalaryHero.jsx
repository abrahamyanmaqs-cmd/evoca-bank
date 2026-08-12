import React from 'react';

const EvocaSalaryHero = () => {
  return (
    <div className="w-full font-['MontserratARM',sans-serif]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        
        {/* Ձախ հատված (Սպիտակ ֆոն և տեքստեր) */}
        <div className="bg-white flex flex-col justify-center px-6 md:px-16 py-12 lg:py-20">
          <div className="max-w-xl flex flex-col gap-6">
            <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-black text-[#1C1C1E] leading-tight tracking-tight uppercase">
              EVOCA <br />
              <span className="text-[#1C1C1E]">ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ</span> <br />
              ՆԱԽԱԳԻԾ
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-[#374151] leading-relaxed">
              Քո աշխատավարձը կարող է քեզ տալ շատ ավելին: <br />
              Պարզապես պետք է ընտրել Evocabank-ը:
            </p>
          </div>
        </div>

        {/* Աջ հատված (Մանուշակագույն ֆոն և նկար) */}
        <div className="bg-[#5E1EEB] flex items-center justify-center p-8 lg:p-12 overflow-hidden">
          <div className="w-full max-w-[500px] h-full flex items-center justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
              alt="Evoca Աշխատավարձային Նախագիծ" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EvocaSalaryHero;