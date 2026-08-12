import React from 'react';

const TransferBanner = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-['MontserratARM',sans-serif] py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative   overflow-hidden shadow-sm">
          {/* Նկար */}
          <img 
            src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg" 
            alt="Evocabank Transfers" 
            className="w-full h-[300px] md:h-[450px] object-cover brightness-[0.65]"
          />

          {/* Տեքստ նկարի վրա */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 text-center">
            <h2 className="text-white font-black text-[22px] md:text-[36px] lg:text-[42px] leading-tight max-w-5xl tracking-tight">
              Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի բացման:
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferBanner;