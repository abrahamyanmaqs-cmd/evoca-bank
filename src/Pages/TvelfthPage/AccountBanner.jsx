import React from 'react';

const AccountBanner = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-sm">
          {/* Նկար */}
          <img 
            src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg" 
            alt="Evocabank Branch" 
            className="w-full h-[300px] md:h-[450px] object-cover brightness-[0.7]"
          />

          {/* Տեքստ նկարի վրա */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16 text-center">
            <h2 className="text-white font-black text-[22px] md:text-[36px] lg:text-[42px] leading-tight max-w-5xl tracking-tight">
              Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի»-ի):
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBanner;