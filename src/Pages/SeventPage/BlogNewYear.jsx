import React from "react";

const BlogNewYear = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-6">
      <div className="bg-[#F7F5FA] rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row items-stretch justify-between gap-10">
        
        {/* Ձախ մաս (Նկար՝ սև անկյունային դետալներով) */}
        <div className="w-full lg:w-[48%] relative p-3 flex items-center justify-center">
          {/* Վերևի աջ անկյունային սև գիծ */}
          <div className="absolute top-0 right-0 w-7 h-7 border-t-[5px] border-r-[5px] border-[#1C1C1E] z-10"></div>
          {/* Ներքևի ձախ անկյունային սև գիծ */}
          <div className="absolute bottom-0 left-0 w-7 h-7 border-b-[5px] border-l-[5px] border-[#1C1C1E] z-10"></div>

          {/* Նկարի կոնտեյներ */}
          <div className="rounded-2xl overflow-hidden shadow-sm w-full">
            <img
              src="https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png"
              alt="Ամանորի երազանքը"
              className="w-full h-auto object-cover rounded-2xl hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Աջ մաս (Տեքստային բաժին) */}
        <div className="w-full lg:w-[50%] flex flex-col justify-between">
          <div>
            {/* Կատեգորիայի նշան */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-3 bg-[#5E1EEB]"></div>
              <span className="text-[#1C1C1E] font-semibold text-[16px]">
                Կենսակերպ
              </span>
            </div>

            {/* Վերնագիր */}
            <h2 className="text-[28px] md:text-[38px] font-bold text-[#1C1C1E] leading-[1.2] mb-6 tracking-tight">
              Ամանորի քո Evocaգույն երազանքը
            </h2>

            {/* Նկարագրություն */}
            <p className="text-[#4A4A4E] text-[15px] md:text-[16px] leading-relaxed mb-8">
              Ավելի հաճելի՞ է նվեր նվիրել, թե՞ ստանալ: Ինչպե՞ս երազանք պահել Ամանորի գիշերը: Ո՞րն է ամենաթրենդային նվերի տարբերակը: Բոլոր պատասխանները կգտնես բլոգում:
            </p>
          </div>

          {/* Ամսաթիվ */}
          <div className="text-[#8E8E93] text-[14px] font-medium">
            21.12.2023
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogNewYear;