 import React, { useState, useEffect } from 'react';

const faces = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];

export default function BiometricSection() {
  const [currentFace, setCurrentFace] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentFace((prev) => (prev + 1) % faces.length);
        setFade(true);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս (Հետևի կետավոր ֆոն, շրջված մանուշակագույն եռանկյուն և վեր բարձրացրած դեմք) */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] flex justify-center items-center">
            
            {/* Հետևի կետավոր շրջանաձև ֆոն (Pattern) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none">
              <div className="w-[360px] h-[360px] rounded-full border border-dashed border-[#9B51E0]"></div>
            </div>

            {/* Շրջված եռանկյուն */}
            <div 
              className="absolute inset-0 shadow-xl"
              style={{
                clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                backgroundColor: '#9B51E0'
              }}
            ></div>

            {/* Նկարի և գծերի միացյալ բլոկ (Մի փոքր բարձրացրած վերև՝ -translate-y-4) */}
            <div className={`relative z-10 w-full h-full flex justify-center items-center -translate-y-4 transition-opacity duration-600 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              
              {/* Անիմացիոն դեմքի նկարը */}
              <img
                src={faces[currentFace]}
                alt="Biometric Face"
                className="w-full h-full object-contain pt-2"
              />

              {/* Նուրբ սպիտակ բիոմետրիկ գծեր և կետեր */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 300 300">
                <g stroke="white" strokeWidth="0.7" fill="white">
                  <line x1="150" y1="80" x2="130" y2="120" />
                  <line x1="150" y1="80" x2="170" y2="120" />
                  <line x1="130" y1="120" x2="150" y2="150" />
                  <line x1="170" y1="120" x2="150" y2="150" />
                  <line x1="130" y1="120" x2="110" y2="130" />
                  <line x1="170" y1="120" x2="190" y2="130" />
                  <line x1="150" y1="150" x2="135" y2="180" />
                  <line x1="150" y1="150" x2="165" y2="180" />
                  <line x1="135" y1="180" x2="150" y2="200" />
                  <line x1="165" y1="180" x2="150" y2="200" />
                  <line x1="150" y1="150" x2="150" y2="175" />
                  
                  <line x1="110" y1="130" x2="100" y2="160" />
                  <line x1="190" y1="130" x2="200" y2="160" />
                  <line x1="100" y1="160" x2="120" y2="210" />
                  <line x1="200" y1="160" x2="180" y2="210" />
                  <line x1="120" y1="210" x2="150" y2="230" />
                  <line x1="180" y1="210" x2="150" y2="230" />

                  <circle cx="150" cy="80" r="1.5" />
                  <circle cx="130" cy="120" r="1.5" />
                  <circle cx="170" cy="120" r="1.5" />
                  <circle cx="110" cy="130" r="1.5" />
                  <circle cx="190" cy="130" r="1.5" />
                  <circle cx="150" cy="150" r="2" />
                  <circle cx="135" cy="180" r="1.5" />
                  <circle cx="165" cy="180" r="1.5" />
                  <circle cx="150" cy="200" r="1.5" />
                  <circle cx="100" cy="160" r="1.5" />
                  <circle cx="200" cy="160" r="1.5" />
                  <circle cx="120" cy="210" r="1.5" />
                  <circle cx="180" cy="210" r="1.5" />
                  <circle cx="150" cy="230" r="1.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Աջ մաս (Վերնագիր, նկարագրություն, QR կոդ և կոճակ) */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-[38px] font-medium text-[#222222] font-['Montserratarm-Medium',Helvetica,Arial,sans-serif] leading-tight">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-gray-600 text-base md:text-[18px] font-['Montserratarm-Medium',Helvetica,Arial,sans-serif] leading-relaxed max-w-xl">
            Սկանավորիր QR կոդը, ներբեռնիր EvocaTOUCH հարմարավետ հավելվածը, ստեղծիր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            {/* QR կոդի բլոկ */}
            <div className="bg-white p-2.5 rounded-2xl shadow-md border border-gray-100">
              <img
                src="https://www.evoca.am/img/biometric-section-QR-Code.png"
                alt="QR Code"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Կոճակ */}
            <div>
              <a
                href="#"
                className="bg-[rgb(100,0,220)] hover:bg-[rgb(85,0,190)] text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-all duration-300 inline-flex items-center justify-center text-base"
              >
                Իմանալ ավելին
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}