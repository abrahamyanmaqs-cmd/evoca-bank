 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Ֆունկցիա՝ ըստ ինդեքսի համապատասխան link վերադարձնելու համար
  const getCardLink = (index) => {
    switch (index) {
      case 0:
        return "/news";
      case 1:
        return "/news";
      case 2:
        return "/about-card";
      case 3:
        return "/payments";
      default:
        return "#";
    }
  };

  return (
    <section className="relative bg-[#5E2BFF] py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-16 overflow-x-hidden text-white min-h-[680px] flex items-center w-full select-none">
      
      {/* --- ՖՈՆԱՅԻՆ ԱՆԻՄԱՑԻՈՆ ՊԱՏԿԵՐՆԵՐ --- */}

      {/* 1. Դեղին լողացող եռանկյունի */}
      <div className="absolute top-8 right-[10%] sm:right-[15%] w-0 h-0 border-l-[10px] sm:border-l-[14px] border-l-transparent border-b-[18px] sm:border-b-[24px] border-b-[#FFD700] border-r-[10px] sm:border-r-[14px] border-r-transparent animate-[bounce_4s_infinite_ease-in-out]"></div>

      {/* 2. Վարդագույն/մոռագույն 3D աստղ/էլեմենտ */}
      <div className="absolute bottom-10 right-6 sm:right-10 w-5 h-5 sm:w-6 sm:h-6 bg-[#FF6B8B] rounded-full animate-[pulse_2.5s_infinite] opacity-80 shadow-[0_0_15px_#FF6B8B]"></div>

      {/* 3. Սպիտակ թեքված քառակուսի */}
      <div className="absolute bottom-8 left-6 sm:left-10 w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/40 rotate-12 animate-[spin_12s_linear_infinite]"></div>


      <div className="max-w-[1300px] mx-auto w-full z-10">
        
        {/* Վերնագիր */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-wide">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        {/* Հիմնական բլոկ */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 w-full">
          
          {/* ՁԱԽ ՄԱՍ: ԱՐՁԱՆ + ՀԵՏԵՎԻ ԱՆԻՄԱՑՎՈՂ ԿԵՏԵՐՆ ՈՒ 3D ՊԱՏԿԵՐՆԵՐԸ */}
          <div className="lg:w-5/12 w-full flex justify-center items-center relative min-h-[340px] sm:min-h-[420px]">
            
            {/* 1. BLUE-DOTS BACKGROUND */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] animate-[spin_35s_linear_infinite] opacity-60">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="185" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="3 16" strokeLinecap="round" />
                  <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="3 14" strokeLinecap="round" />
                  <circle cx="200" cy="200" r="115" fill="none" stroke="white" strokeWidth="2" strokeDasharray="3 12" strokeLinecap="round" />
                  <circle cx="200" cy="200" r="80" fill="none" stroke="white" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* 2. 3D Purple Pyramid Shape */}
            <div className="absolute top-6 left-2 sm:top-10 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 animate-[bounce_5s_infinite_ease-in-out] pointer-events-none z-0">
              <div className="w-full h-full bg-gradient-to-tr from-[#D16BA5] to-[#E73C7E] clip-path-pyramid rotate-12 opacity-90 shadow-lg" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            </div>

            {/* 3. 3D ZigZag/Ribbon Shape */}
            <div className="absolute bottom-16 left-6 sm:bottom-20 sm:left-12 animate-[pulse_3s_infinite] pointer-events-none z-20">
              <svg width="32" height="20" viewBox="0 0 40 25" fill="none">
                <path d="M2 20 L12 5 L22 20 L32 5 L38 12" stroke="#FF4081" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* 4. ՄԱՔՈՒՐ ԱՐՁԱՆԻ ՆԿԱՐԸ */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px]">
              <img
                src="https://www.evoca.am/img/statue-1.png"
                alt="Evoca Statue"
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
                onError={(e) => {
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
                {cardsData.slice(0, 4).map((card, index) => (
                  <Link
                    key={card.id}
                    to={getCardLink(index)}
                    className="bg-white text-[#2B2B2B] p-5 sm:p-7 rounded-[20px] sm:rounded-[24px] shadow-lg hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group border border-transparent hover:border-[#5E2BFF]/20 w-full"
                  >
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider block mb-2">
                        {card.status}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#1C1C1E] mb-2.5 sm:mb-3 group-hover:text-[#5E2BFF] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[#636366] text-xs leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}