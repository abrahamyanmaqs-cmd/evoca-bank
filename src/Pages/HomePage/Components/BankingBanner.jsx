import React from 'react';

export default function OnlineBankingBanner() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes dynamicFloat1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-20px) translateX(8px) rotate(25deg); }
        }

        @keyframes dynamicFloat2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(45deg); }
          50% { transform: translateY(15px) translateX(-12px) rotate(90deg); }
        }

        @keyframes dynamicFloat3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-14px) scale(1.1); }
        }

        .animate-shape-1 {
          animation: dynamicFloat1 4s ease-in-out infinite;
        }

        .animate-shape-2 {
          animation: dynamicFloat2 6s ease-in-out infinite;
        }

        .animate-shape-3 {
          animation: dynamicFloat3 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Ամբողջ լայնությամբ սեկցիա */}
      <section className="w-full bg-[#5E1EEB] py-12 sm:py-16 px-3 sm:px-4 md:px-16 font-montserrat select-none relative overflow-x-hidden text-white">
        
        {/* ՖՈՆԱՅԻՆ ԱՆԻՄԱՑՎԱԾ ԵՐԿՐԱՉԱՓԱԿԱՆ ՊԱՏԿԵՐՆԵՐ (Թաքցված կամ չափսերով փոքրացված շատ փոքր էկրանների վրա) */}
        <div className="absolute left-6 bottom-16 sm:left-10 sm:bottom-20 w-0 h-0 border-l-[14px] sm:border-l-[20px] border-l-transparent border-r-[14px] sm:border-r-[20px] border-r-transparent border-b-[26px] sm:border-b-[36px] border-b-[#FFD700] animate-shape-1 opacity-95 pointer-events-none z-0"></div>
        <div className="absolute top-10 right-6 sm:top-12 sm:right-28 w-9 h-9 sm:w-12 sm:h-12 border-4 border-purple-300/60 rounded-lg animate-shape-2 pointer-events-none z-0"></div>
        
        <div className="absolute right-6 bottom-10 sm:right-16 sm:bottom-14 flex flex-col space-y-1 animate-shape-3 opacity-90 pointer-events-none z-0">
          <div className="w-5 h-2.5 sm:w-7 sm:h-3.5 bg-pink-400 rounded-sm"></div>
          <div className="w-5 h-2.5 sm:w-7 sm:h-3.5 bg-purple-400 rounded-sm translate-x-2"></div>
          <div className="w-5 h-2.5 sm:w-7 sm:h-3.5 bg-pink-500 rounded-sm"></div>
        </div>

        {/* ԳԼԽԱՎՈՐ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
        <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
          
          {/* Ձախ մաս՝ MacBook և ճիշտ դասավորված Հեռախոս */}
          <div className="relative flex items-center justify-center w-full lg:w-[58%] mb-10 lg:mb-0">
            {/* MacBook նկար */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[620px]">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                alt="Evocabank Online Banking MacBook" 
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Հեռախոսի նկար՝ դասավորված Մակբուկի վրա */}
            <div className="absolute right-[18%] sm:right-[22%] bottom-[-2px] sm:bottom-[-5px] z-20 w-[80px] sm:w-[120px] md:w-[150px] drop-shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                alt="Evocabank Mobile App" 
                className="w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl"
              />
            </div>
          </div>

          {/* Աջ մաս՝ Տեքստեր և կոճակներ */}
          <div className="w-full lg:w-[42%] flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight">
              Օնլայն և մոբայլ բանկինգ
            </h2>
            
            <p className="text-xs sm:text-sm md:text-base text-purple-100 mb-6 sm:mb-8 leading-relaxed max-w-xl font-medium">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>
        <a href="https://online.evoca.am/InternetBank/MainForm.wgx"> 
            <button className="bg-white text-[#5E1EEB] hover:bg-purple-50 font-bold text-xs sm:text-sm py-3.5 sm:py-4 px-8 sm:px-9 rounded-full shadow-lg transition-all duration-300 cursor-pointer mb-6 sm:mb-8">
              Դառնալ հաճախորդ
            </button>
            </a>

            {/* Ներքևի հատված՝ QR կոդ և հավելվածների խանութներ */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-purple-400/30 w-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white p-2 rounded-2xl shadow-md shrink-0">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    alt="QR Code" 
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-purple-200 max-w-[110px] leading-snug text-left">
                  Ներբեռնել հավելվածը՝
                </span>
              </div>

              <div className="flex gap-2.5 sm:gap-3">
                {/* App Store կոճակ */}
                <a href="#appstore" className="block transition-transform hover:scale-105 shrink-0">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="App Store" 
                    className="h-9 sm:h-10 object-contain"
                  />
                </a>
                {/* Google Play կոճակ */}
                <a href="#googleplay" className="block transition-transform hover:scale-105 shrink-0">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-9 sm:h-10 object-contain"
                  />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}