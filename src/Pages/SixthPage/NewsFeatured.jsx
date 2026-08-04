import React from "react";

const NewsFeatured = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-6">
      <div className="bg-[#F7F5FA] rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row items-stretch justify-between gap-10">
        
        {/* Ձախ մաս (Տեքստային բաժին) */}
        <div className="w-full lg:w-[50%] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-3 bg-[#5E1EEB]"></div>
              <span className="text-[#1C1C1E] font-semibold text-[16px]">
                Բանկային
              </span>
            </div>

            <h2 className="text-[28px] md:text-[38px] font-bold text-[#1C1C1E] leading-[1.2] mb-6 tracking-tight">
              Evocabank-ը և Green Rock-ը մեկնարկեցին Բանկի նոր գլխամասի նախագիծը
            </h2>

            <p className="text-[#4A4A4E] text-[15px] md:text-[16px] leading-relaxed mb-8">
              Evocabank-ը և Green Rock Management Group-ը ստորագրեցին համագործակցության հուշագիր' պաշտոնապես մեկնարկելով Բանկի նոր գլխամասի նախագիծը:
            </p>
          </div>

          <div className="text-[#8E8E93] text-[14px] font-medium">
            30.07.2026
          </div>
        </div>

        {/* Աջ մաս (Նկար մանուշակագույն անկյուններով) */}
        <div className="w-full lg:w-[48%] relative p-3 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-7 h-7 border-t-[5px] border-l-[5px] border-[#5E1EEB] z-10"></div>
          <div className="absolute bottom-0 left-0 w-7 h-7 border-b-[5px] border-l-[5px] border-[#5E1EEB] z-10"></div>

          <div className="rounded-2xl overflow-hidden shadow-sm w-full">
            <img
              src="https://www.evoca.am/images-cache/news/1/17854167235525/780x585.png"
              alt="Evocabank Green Rock"
              className="w-full h-auto object-cover rounded-2xl hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsFeatured;