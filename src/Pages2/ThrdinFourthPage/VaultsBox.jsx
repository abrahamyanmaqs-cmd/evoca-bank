import React from 'react';

export default function VaultsBox() {
  return (
    <section className="py-12 px-4 md:px-0 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Հիմնական բլոկ (Քարտ) */}
        <div className="flex flex-col lg:flex-row items-center bg-[#F8F7FA] rounded-3xl overflow-hidden shadow-sm">
          
          {/* Ձախ կողմի տեքստային հատված */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#222222] mb-6 leading-tight">
              Անհատական պահատուփեր
            </h1>
            <p className="text-[#222222] text-[16px] md:text-[18px] leading-[1.7] font-normal">
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ հրդեհվող անհատական պահատուփեր:
            </p>
          </div>

          {/* Աջ կողմի նկարը */}
          <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[450px]">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg" 
              alt="Անհատական պահատուփեր" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}