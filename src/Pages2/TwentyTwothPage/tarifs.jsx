 import React from 'react';
import TariffSidebar from './TariffSidebar'; // Ձեր ստեղծած մենյուի ֆայլը
import EvocaHomeTable from './EvocaHomeTable'; // Ձեր ստեղծած աղյուսակի ֆայլը

export default function Tariff() {
  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Գլխավոր վերնագիր (ամբողջ լայնքով) */}
        <h1 className="text-2xl md:text-[32px] leading-tight font-extrabold text-[#1C1C1E] mb-10">
          Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների / Պայմաններ և սակագներ /
        </h1>

        {/* Կողային մենյու և աղյուսակ (երկու սյունակով Flexbox դասավորություն) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Ձախ կողմ՝ Մենյու */}
          <div className="w-full lg:w-[320px] flex-shrink-0">
            <TariffSidebar />
          </div>

          {/* Աջ կողմ՝ Ենթավերնագիր և Աղյուսակ */}
          <div className="w-full lg:w-[calc(100%-368px)]">
            {/* Ենթավերնագիր՝ աղյուսակի վերևում */}
            <h2 className="text-xl md:text-2xl font-bold text-[#1C1C1E] mb-6">
              Վերանորոգման վարկ EvocaHOME
            </h2>
            
            {/* Աղյուսակ */}
            <EvocaHomeTable />
          </div>

        </div>
      </div>
    </section>
  );
}