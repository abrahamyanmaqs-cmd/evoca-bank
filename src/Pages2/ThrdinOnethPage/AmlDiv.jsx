import React from 'react';

export default function AmlDiv() {
  return (
    <section className="py-12 px-4 md:px-0 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Հիմնական կոնտեյներ, որը կրկնում է ձևն ու կառուցվածքը */}
        <div className="mx-auto max-w-[1200px] bg-[#F8F7FA] rounded-[30px] overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-sm">
          
          {/* Ձախ մաս (Վերնագիր) */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h1 
              style={{ fontFamily: '"Montserratarm-Medium", Helvetica, Arial, sans-serif' }}
              className="text-[28px] md:text-[38px] font-bold text-[#222222] leading-[1.3]"
            >
              Ֆինանսական հանցագործությունների կանխարգելում
            </h1>
          </div>

          {/* աջ մաս (Նկար / Բաններ) */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden bg-[#5E1EEB]">
            {/* Այստեղ տեղադրիր նկարի ճիշտ ճանապարհը կամ հղումը */}
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17387447069114/780x585.png" 
              alt="Financial crime prevention" 
              className="w-full h-full object-cover mix-blend-overlay opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}