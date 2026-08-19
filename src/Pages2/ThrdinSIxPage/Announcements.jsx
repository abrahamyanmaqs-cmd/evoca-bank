import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { FiChevronDown, FiArrowLeft, FiArrowRight, FiCalendar } from 'react-icons/fi';

export default function Announcements() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndices, setOpenIndices] = useState({});
  const [announcementsList, setAnnouncementsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultAnnouncements = [
    { id: "1", title: '«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով', date: '27.05.2026' },
    { id: "2", title: 'Գործարքների արգելափակում ֆունկցիոնալ', date: '26.06.2026' },
    { id: "3", title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով', date: '04.06.2025' },
    { id: "4", title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով', date: '28.03.2025' },
    { id: "5", title: 'Արտաքին աուդիտի մրցույթի հայտարարություն', date: '30.12.2024' },
    { id: "6", title: 'Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%', date: '12.11.2024' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "announcements");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե հավաքածուն դատարկ է, լրացնում ենք default տվյալներով
          for (const item of defaultAnnouncements) {
            await setDoc(doc(colRef, item.id), item);
          }
          setAnnouncementsList(defaultAnnouncements);
        } else {
          setAnnouncementsList(snapshot.docs.map(doc => doc.data()));
        }
      } catch (error) {
        console.error("Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = 8;

  const toggleAccordion = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) return null;

  return (
    <section className="relative w-full min-h-screen bg-white py-10 px-4 md:px-8 overflow-hidden font-sans">
      
      {/* ---------------- CSS ԱՆԻՄԱՑԻԱՆԵՐԻ ՍՏԻԼՆԵՐ ---------------- */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-18px) rotate(-8deg) scale(1.05); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.12); opacity: 1; }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: floatFast 3.5s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* ՎԵՐԻՆ ՀԱՏՎԱԾ՝ Վերնագիր և Ամսաթվերով ֆիլտր */}
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#222222]">
          Հայտարարություններ
        </h1>

        <div className="flex items-center gap-4 bg-[#F8F7FA] px-4 py-2.5 rounded-2xl border border-[#E5E2EC]">
          <FiCalendar className="text-[#666] text-xl" />
          <div className="flex items-center gap-2 text-sm text-[#555] font-medium">
            <span className="text-[#999]">Սկսած</span>
            <span className="text-[#ccc]">-</span>
            <span className="text-[#999]">Մինչև</span>
          </div>
        </div>
      </div>

      {/* ՀԻՄՆԱԿԱՆ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ ԵՎ ԱՆԻՄԱՑՎԱԾ ՖՈՆԱՅԻՆ ՏԱՐՐԵՐ */}
      <div className="max-w-[1300px] mx-auto relative flex flex-col lg:flex-row gap-12">
        
        {/* ՁԱԽ ՄԱՍԻ ԴԻԶԱՅՆԱՅԻՆ ՏԱՐՐԵՐ ԵՎ ԱՆԻՄԱՑԻԱՆԵՐ */}
        <div className="w-full lg:w-[350px] relative min-h-[450px] hidden lg:block select-none pointer-events-none">
          
          {/* 1. Մանուշակագույն թղթապանակը գրիչով */}
          <div className="absolute top-10 left-0 w-[240px] z-20 animate-float-slow">
            <div className="bg-[#8A5CF5] p-3 rounded-2xl shadow-xl rotate-[-6deg] relative border-4 border-white">
              {/* Սեղմակ */}
              <div className="w-16 h-6 bg-[#333] mx-auto rounded-md mb-3 flex justify-around items-center px-1">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
              {/* Թղթի գծեր */}
              <div className="bg-white p-3 rounded-xl space-y-2">
                <div className="w-full h-1.5 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-1.5 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-1.5 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* 2. Դեղին եռաչափ քառանծայր աստղիկ/բուրգ */}
          <div className="absolute top-[180px] left-12 z-30 animate-float-fast">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rotate-12 shadow-lg rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-200 rotate-45"></div>
            </div>
          </div>

          {/* 3. Մանուշակագույն վերև ուղղված զիգզագ/պտույտ */}
          <div className="absolute top-4 right-10 z-20 animate-float-slow" style={{ animationDelay: '1s' }}>
            <div className="w-8 h-16 bg-gradient-to-t from-[#8A5CF5] to-pink-500 rounded-full blur-[0.5px] rotate-[25deg] shadow-md"></div>
          </div>

          {/* 4. Ֆոնային կետավոր կամ կլոր կետերի մատրիցա */}
          <div className="absolute bottom-10 left-6 grid grid-cols-4 gap-2 z-10 opacity-60">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#DCD6EE]"></div>
            ))}
          </div>

          {/* 5. Հատվածային դեղին կետավոր գիծ (ալիքաձև տեսքով) */}
          <div className="absolute top-[280px] left-0 right-0 z-0 opacity-40">
            <svg width="260" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 Q 70 60, 130 20 T 250 30" stroke="#FFD700" strokeWidth="4" strokeDasharray="6 6" />
            </svg>
          </div>

          {/* 6. Ներքևի փայլուն դեղին գնդիկ */}
          <div className="absolute bottom-20 right-4 z-20 animate-pulse-glow">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-md"></div>
          </div>

        </div>

        {/* ԱՋ ՄԱՍ՝ Հայտարարությունների Ցանկ */}
        <div className="flex-1 w-full space-y-4">
          {announcementsList.map((item, index) => {
            const isOpen = openIndices[index] || false;
            return (
              <div 
                key={item.id || index} 
                className="border border-[#E5E2EC] rounded-2xl bg-white overflow-hidden transition-all shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-[#F9F8FC] transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[16px] md:text-[18px] font-bold text-[#222222]">
                      {item.title}
                    </span>
                    <span className="text-[13px] text-[#777] font-medium">
                      {item.date}
                    </span>
                  </div>
                  <span className={`text-[#5E1EEB] text-[22px] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <FiChevronDown />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-[#555555] text-[15px] md:text-[16px] leading-relaxed border-t border-[#F0EEF5] pt-4">
                    Մանրամասն տեղեկատվություն «{item.title}» վերաբերյալ: Փաստաթղթերը և հավելվածները հասանելի են ներբեռնման համար բանկի պաշտոնական կայքում կամ մասնաճյուղերում:
                  </div>
                )}
              </div>
            );
          })}

          {/* ՊԱԳԻՆԱՑԻԱ (Էջավորում) */}
          <div className="flex items-center justify-center md:justify-end gap-2 pt-8 pb-12">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="p-2 text-[#999] hover:text-[#222] transition-colors"
            >
              <FiArrowLeft size={20} />
            </button>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-full font-bold text-sm transition-all ${
                    isActive 
                      ? 'bg-[#5E1EEB] text-white shadow-md' 
                      : 'text-[#444] hover:bg-[#F0EEF5]'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="p-2 text-[#5E1EEB] hover:opacity-80 transition-opacity"
            >
              <FiArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}