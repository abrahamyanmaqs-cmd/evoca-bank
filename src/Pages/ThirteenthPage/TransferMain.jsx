import React from 'react';

const TransferMain = () => {
  const transferData = {
    title: "Դրամական փոխանցումներ",
    description: "Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:",
    image: "https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg"
  };

  return (
    <div className="w-full bg-[#F8F9FA] font-sans py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8 items-center justify-between">
          
          {/* Տեքստային մաս */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-black text-[#1C1C1E] mb-6 tracking-tight">
              {transferData.title}
            </h2>
            <p className="text-[#6B7280] text-[16px] md:text-[17px] leading-relaxed mb-8">
              {transferData.description}
            </p>
            <div>
              <button className="bg-[#F3F0FD] text-[#5E1EEB] font-semibold px-6 py-3 rounded-full hover:bg-[#5E1EEB] hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                Մանրամասն
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Նկար */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <img 
              src={transferData.image} 
              alt={transferData.title} 
              className="w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransferMain;