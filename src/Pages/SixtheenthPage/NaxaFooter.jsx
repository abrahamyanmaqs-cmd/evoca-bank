import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրիր ուղին ըստ քո ֆայլի տեղադրության
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function TestimonialSectionn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialTestimonials = [
    {
      quote: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառումով ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...",
      author: "Կամո Թովմասյան",
      title: "KAMOBOG մեդիա-հարթակի հիմնադիր, influencer"
    },
    {
      quote: "Հիանալի սպասարկում և նորարարական լուծումներ, որոնք զգալիորեն հեշտացնում են ամենօրյա ֆինանսական գործարքները:",
      author: "Էլեն Վարդանյան",
      title: "Հաճախորդ"
    }
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const colRef = collection(db, "testimonials");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          for (const item of initialTestimonials) {
            await addDoc(colRef, item);
          }
          const newSnapshot = await getDocs(colRef);
          setTestimonials(newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setTestimonials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading || testimonials.length === 0) {
    return <div className="text-center py-28">Բեռնվում է...</div>;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        /* Ձեռքերի և բլոկների լողացող անիմացիա */
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(-14px) rotate(-5deg); }
        }

        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px) rotate(10deg); }
          50% { transform: translateY(14px) rotate(15deg); }
        }

        /* Զիգզագ գծերի ալիքաձև շարժում (թարթում և տեղաշարժ) */
        @keyframes lineWave {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.8; }
          50% { transform: translateY(-8px) scaleY(1.05); opacity: 1; }
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

      <section className="w-full bg-[#FAFAFC] py-28 px-4 md:px-16 font-montserrat relative overflow-hidden select-none">
        
        {/* ================= ՁԱԽ ԿՈՂՄԻ ԴԵԿՈՐԱՑԻԱ ================= */}
        {/* OK Ձեռք */}
        <div className="absolute left-10 lg:left-28 top-16 hidden md:flex flex-col items-center animate-hand-left">
          <div className="w-20 h-20 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 rounded-2xl shadow-md flex items-center justify-center border border-white/80">
            <span className="text-3xl filter drop-shadow-sm">👌</span>
          </div>
        </div>

        {/* Անիմացիոն զիգզագ գիծ (Ձախում) */}
        <div className="absolute left-20 lg:left-40 bottom-16 hidden md:block animate-zigzag">
          <svg width="32" height="48" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L14 14L2 24L14 34" stroke="#5E1EEB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>


        {/* ================= ԱՋ ԿՈՂՄԻ ԴԵԿՈՐԱՑԻԱ ================= */}
        {/* Thumbs Up Ձեռք */}
        <div className="absolute right-10 lg:right-28 top-16 hidden md:flex flex-col items-center animate-hand-right">
          <div className="w-20 h-20 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 rounded-2xl shadow-md flex items-center justify-center border border-white/80">
            <span className="text-3xl filter drop-shadow-sm">👍</span>
          </div>
        </div>

        {/* Անիմացիոն զիգզագ գիծ (Աջում) */}
        <div className="absolute right-20 lg:right-40 bottom-16 hidden md:block animate-zigzag" style={{ animationDelay: '1.5s' }}>
          <svg width="32" height="48" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L14 14L2 24L14 34" stroke="#FF2E93" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>


        {/* ================= ՀԻՄՆԱԿԱՆ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ ================= */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          
          {/* Աստղեր */}
          <div className="flex justify-center items-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#FFD700] text-2xl drop-shadow-xs">★</span>
            ))}
          </div>

          {/* Կարծիքի տեքստ և չակերտներ */}
          <div className="relative px-6 md:px-12 mb-10">
            {/* Մանուշակագույն ձախ չակերտ */}
            <span className="absolute -left-2 md:left-2 -top-4 text-[#5E1EEB] text-5xl font-serif opacity-90 select-none">“</span>
            
            <p className="text-base md:text-xl text-[#1C1C1E] font-medium leading-relaxed">
              {testimonials[currentIndex].quote}
            </p>

            {/* Մանուշակագույն աջ չակերտ */}
            <span className="absolute -right-2 md:right-2 -bottom-6 text-[#5E1EEB] text-5xl font-serif opacity-90 select-none">”</span>
          </div>

          {/* Հեղինակ */}
          <div className="mb-10">
            <h4 className="text-lg font-bold text-[#1C1C1E] mb-1">
              {testimonials[currentIndex].author}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 font-medium">
              {testimonials[currentIndex].title}
            </p>
          </div>

          {/* Սլայդերի կետեր (Dots) */}
          <div className="flex justify-center items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#5E1EEB]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
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