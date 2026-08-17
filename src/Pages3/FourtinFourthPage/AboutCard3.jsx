import React from 'react';

export default function AboutCard3() {
  return (
    <section className="bg-white min-h-[500px] py-16 px-6 md:px-16 w-full select-none flex items-center">
      <div className="max-w-[1300px]   mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս՝ Վերնագրեր և Տեքստ */}
        <div className="lg:w-7/12 flex flex-col items-start text-left space-y-6">
          <h1 className="text-3xl md:text-[42px] font-bold text-[#1C1C1E] tracking-tight">
  Visa Vision
          </h1>
          
          <div className="space-y-4 text-[#48484A] text-sm md:text-base leading-relaxed font-normal">
            
            <p>
           Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:
            </p>

          </div>
        </div>

        {/* Աջ մաս՝ Քարտի Նկարը */}
        <div className="lg:w-5/12 flex justify-center items-center">
          <div className="w-full max-w-[450px]">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png" 
              alt="Evoca Travel Card" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}