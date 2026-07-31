 import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BestFromEvoca() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bestFromEvoca"));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCardsData(items);
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <section className="relative bg-[#5E2BFF] py-20 px-6 md:px-16 overflow-hidden text-white min-h-[680px] flex items-center">
      
      {/* --- ՖՈՆԱՅԻՆ ԱՆԻՄԱՑԻՈՆ ՊԱՏԿԵՐՆԵՐ (BEST-FROM-EVOCA__SHAPE) --- */}

      {/* 1. Դեղին լողացող եռանկյունի (վերևի աջ անկյունում) */}
      <div className="absolute top-12 right-[15%] w-0 h-0 border-l-[14px] border-l-transparent border-b-[24px] border-b-[#FFD700] border-r-[14px] border-r-transparent animate-[bounce_4s_infinite_ease-in-out]"></div>

      {/* 2. Վարդագույն/մոռագույն 3D աստղ/էլեմենտ (ներքևի աջում) */}
      <div className="absolute bottom-16 right-10 w-6 h-6 bg-[#FF6B8B] rounded-full animate-[pulse_2.5s_infinite] opacity-80 shadow-[0_0_15px_#FF6B8B]"></div>

      {/* 3. Սպիտակ թեքված քառակուսի (ձախ ներքևում) */}
      <div className="absolute bottom-12 left-10 w-6 h-6 border-2 border-white/40 rotate-12 animate-[spin_12s_linear_infinite]"></div>


      <div className="max-w-[1300px] mx-auto w-full z-10">
        
        {/* Վերնագիր */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-wide">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        {/* Հիմնական բլոկ */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* ՁԱԽ ՄԱՍ: ԱՐՁԱՆ + ՀԵՏԵՎԻ ԱՆԻՄԱՑՎՈՂ ԿԵՏԵՐՆ ՈՒ 3D ՊԱՏԿԵՐՆԵՐԸ */}
          <div className="lg:w-5/12 w-full flex justify-center items-center relative min-h-[420px]">
            
            {/* 1. BLUE-DOTS BACKGROUND (Պտտվող կետային ֆոն) */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] animate-[spin_35s_linear_infinite] opacity-60">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="185" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="3 16" strokeLinecap="round" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="3 14" strokeLinecap="round" />
                  <circle cx="200" cy="200" r="115" fill="none" stroke="white" strokeWidth="2" strokeDasharray="3 12" strokeLinecap="round" />
                  <circle cx="200" cy="200" r="80" fill="none" stroke="white" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* 2. 3D Purple Pyramid Shape (Արձանի ձախ կողմում) */}
            <div className="absolute top-10 left-4 w-12 h-12 animate-[bounce_5s_infinite_ease-in-out] pointer-events-none z-0">
              <div className="w-full h-full bg-gradient-to-tr from-[#D16BA5] to-[#E73C7E] clip-path-pyramid rotate-12 opacity-90 shadow-lg" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            </div>

            {/* 3. 3D ZigZag/Ribbon Shape (Արձանի ձեռքի մոտ) */}
            <div className="absolute bottom-20 left-12 animate-[pulse_3s_infinite] pointer-events-none z-20">
              <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
                <path d="M2 20 L12 5 L22 20 L32 5 L38 12" stroke="#FF4081" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* 4. ՄԱՔՈՒՐ ԱՐՁԱՆԻ ՆԿԱՐԸ (ԱՆՓԱՅԼ Transparent PNG) */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px]">
              <img
                src="https://www.evoca.am/img/statue-1.png"
                alt="Evoca Statue"
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
                onError={(e) => {
                  // Եթե ֆայլի URL-ը փոխվի, fallback նկար
                  e.target.src = "https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png";
                }}
              />
            </div>
          </div>

          {/* ԱՋ ՄԱՍ: 4 ՔԱՐՏԵՐԸ */}
          <div className="lg:w-7/12 w-full">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {cardsData.slice(0, 4).map((card) => (
                  <a
                    key={card.id}
                    href={card.link || "#"}
                    className="bg-white text-[#2B2B2B] p-7 rounded-[24px] shadow-lg hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group border border-transparent hover:border-[#5E2BFF]/20"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider block mb-2">
                        {card.status}
                      </span>
                      <h3 className="text-lg font-bold text-[#1C1C1E] mb-3 group-hover:text-[#5E2BFF] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[#636366] text-xs leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}