 import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#dadada] pt-12 pb-24 px-6 md:px-16 rounded-b-[40px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* Ձախ մաս (Վերնագիր, նկարագրություն և կոճակ) */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 space-y-6 pl-4 lg:pl-10">
          <h1 className="text-3xl md:text-[36px] font-medium text-[#333333] font-['Montserratarm-Medium',Helvetica,Arial,sans-serif] tracking-tight">
            Evoca Travel Card
          </h1>
          <p className="text-[#333333] text-base md:text-[18px] font-['Montserratarm-Medium',Helvetica,Arial,sans-serif] max-w-lg leading-relaxed">
            Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը
          </p>
          <div>
            <a
              href="#"
              className="bg-[rgb(100,0,220)] hover:bg-[rgb(85,0,190)] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 inline-flex items-center justify-center text-base"
            >
              Իմանալ ավելին
            </a>
          </div>
        </div>

        {/* Աջ մաս (Քարտի վիզուալ պատկեր) */}
        <div className="lg:w-1/2 flex justify-center relative pr-4 lg:pr-10">
          <div className="relative w-full max-w-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png" 
              alt="Evoca Travel Card"
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>

      </div>

      {/* Ներքևի սլայդերի նավիգացիա (Սլաքներ և կետեր) */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center space-x-6">
        {/* Ձախ սլաք */}
        <button className="text-[rgb(100,0,220)] hover:text-purple-900 font-bold text-xl transition-colors cursor-pointer">
          &larr;
        </button>

        {/* Կետեր */}
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-[rgb(100,0,220)] rounded-full"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full hover:bg-[rgb(100,0,220)] cursor-pointer transition-colors"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full hover:bg-[rgb(100,0,220)] cursor-pointer transition-colors"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full hover:bg-[rgb(100,0,220)] cursor-pointer transition-colors"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full hover:bg-[rgb(100,0,220)] cursor-pointer transition-colors"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full hover:bg-[rgb(100,0,220)] cursor-pointer transition-colors"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full hover:bg-[rgb(100,0,220)] cursor-pointer transition-colors"></span>
        </div>

        {/* Աջ սլաք */}
        <button className="text-[rgb(100,0,220)] hover:text-purple-900 font-bold text-xl transition-colors cursor-pointer">
          &rarr;
        </button>
      </div>
    </section>
  );
}