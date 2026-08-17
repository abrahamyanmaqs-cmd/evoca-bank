 import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառումով ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...",
    author: "Կամո Թովմասյան",
    title: "KAMOBOG մեդիա-հարթակի հիմնադիր, influencer"
  },
  {
    id: 2,
    quote: "Հիանալի սպասարկում և նորարարական լուծումներ, որոնք զգալիորեն հեշտացնում են ամենօրյա ֆինանսական գործարքները:",
    author: "Արման Մանուկյան",
    title: "Հաճախորդ"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }

        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px) rotate(10deg); }
          50% { transform: translateY(10px) rotate(15deg); }
        }

        @keyframes lineWave {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.8; }
          50% { transform: translateY(-6px) scaleY(1.05); opacity: 1; }
        }

        .animate-hand-left {
          animation: floatSlow 5s ease-in-out infinite;
        }

        .animate-hand-right {
          animation: floatSlowReverse 6s ease-in-out infinite;
        }

        .animate-zigzag {
          animation: lineWave 3s ease-in-out infinite;
        }
      `}</style>

      {/* 300px մոբայլի օպտիմիզացիա. ավելացված է w-full և overflow-x-hidden */}
      <section className="w-full bg-[#FAFAFC] py-12 md:py-28 px-3 md:px-16 font-montserrat relative overflow-x-hidden select-none">
        
        {/* Ձախ դեկորացիա (թաքնված է փոքր էկրանների վրա՝ տարածք խնայելու համար) */}
        <div className="absolute left-6 lg:left-28 top-12 hidden lg:flex flex-col items-center animate-hand-left">
          <div className="w-20 h-20 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 rounded-2xl shadow-md flex items-center justify-center border border-white/80">
            <span className="text-3xl filter drop-shadow-sm">👌</span>
          </div>
        </div>

        <div className="absolute left-4 lg:left-40 bottom-12 hidden lg:block animate-zigzag">
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L14 14L2 24L14 34" stroke="#5E1EEB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Աջ դեկորացիա (թաքնված է փոքր էկրանների վրա) */}
        <div className="absolute right-6 lg:right-28 top-12 hidden lg:flex flex-col items-center animate-hand-right">
          <div className="w-20 h-20 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 rounded-2xl shadow-md flex items-center justify-center border border-white/80">
            <span className="text-3xl filter drop-shadow-sm">👍</span>
          </div>
        </div>

        <div className="absolute right-4 lg:right-40 bottom-12 hidden lg:block animate-zigzag" style={{ animationDelay: '1.5s' }}>
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L14 14L2 24L14 34" stroke="#FF2E93" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Բովանդակություն */}
        <div className="max-w-3xl mx-auto text-center relative z-10 w-full px-1">
          
          {/* Աստղեր (չափսը փոքրացված է) */}
          <div className="flex justify-center items-center gap-1 mb-6 md:mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#FFD700] text-lg md:text-2xl drop-shadow-xs">★</span>
            ))}
          </div>

          {/* Մեջբերում (օպտիմիզացված է փոքր էկրանների համար) */}
          <div className="relative px-4 sm:px-8 md:px-12 mb-6 md:mb-10 w-full">
            <span className="absolute left-0 sm:left-4 md:left-2 -top-2 text-[#5E1EEB] text-3xl md:text-5xl font-serif opacity-90 select-none">“</span>
            
            {/* text-sm (փոքր էկրանին) մինչև text-xl (միջին էկրանին) */}
            <p className="text-sm sm:text-base md:text-xl text-[#1C1C1E] font-medium leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>

            <span className="absolute right-0 sm:right-4 md:right-2 -bottom-4 text-[#5E1EEB] text-3xl md:text-5xl font-serif opacity-90 select-none">”</span>
          </div>

          {/* Հեղինակ */}
          <div className="mb-6 md:mb-10">
            <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#1C1C1E] mb-1">
              {testimonials[currentIndex].author}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 font-medium px-4">
              {testimonials[currentIndex].title}
            </p>
          </div>

          {/* Նավիգացիայի կետեր (մեծացված՝ ավելի հեշտ սեղմելու համար) */}
          <div className="flex justify-center items-center gap-2.5 pt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 transition-all duration-300 cursor-pointer rounded-full ${
                  currentIndex === idx ? 'w-7 bg-[#5E1EEB]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}