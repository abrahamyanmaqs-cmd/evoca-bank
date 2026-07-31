 import React, { useState } from 'react';

const partnersData = [
  "https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17104032198171/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17077436606929/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17107493820339/185x80_grayscale.png",
  "https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png"
];

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= partnersData.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, partnersData.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visiblePartners = partnersData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes rotateDottedCircle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-rotate-dotted {
          animation: rotateDottedCircle 25s linear infinite;
        }
      `}</style>

      <section className="w-full bg-white py-28 md:py-36 px-4 md:px-16 font-montserrat select-none overflow-hidden">
        <div className="max-w-[1450px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Ձախ մաս՝ Վերնագիր և տեքստ */}
          <div className="w-full lg:w-[38%] flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1C1C1E] mb-6 tracking-tight">
              Գործընկերներ
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
            </p>

            <button className="bg-[#F2EEFF] text-[#5E1EEB] hover:bg-[#5E1EEB] hover:text-white font-bold text-base py-4 px-9 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-3 shadow-sm">
              <span>Բոլոր գործընկերները</span>
              <span className="text-xl">›</span>
            </button>
          </div>

          {/* Աջ մաս՝ Սլայդեր և ձեռք */}
          <div className="w-full lg:w-[62%] relative flex items-center bg-[#FAFAFC] border border-gray-100 rounded-[36px] p-8 md:p-14 shadow-sm">
            
            {/* Ձեռքը և ավելի խոշոր ու հաստ պտտվող դեղին կետավոր շրջանակը */}
            <div className="relative flex-shrink-0 z-20 -ml-16 md:-ml-20 hidden sm:flex items-center justify-center w-52 h-52">
              {/* Խոշորացված կետերով պտտվող շրջանակ (border-[5px] կամ border-[6px]) */}
              <div className="absolute inset-0 rounded-full border-[6px] border-dotted border-[#FFD700] w-52 h-52 animate-rotate-dotted pointer-events-none"></div>
              
              {/* Ձեռքի նկար */}
              <img 
                src="https://mission.partners/wp-content/uploads/2022/10/ed3bbf2c-0600-287d-7ea4-b746a7e167f7-1030x1030.jpg" 
                alt="Partners Hand" 
                className="w-40 h-40 object-cover rounded-full shadow-lg relative z-10"
              />
            </div>

            {/* Սլայդերի նախորդ (Prev) կոճակ */}
            <button 
              onClick={handlePrev}
              className="z-30 text-[#5E1EEB] font-extrabold text-3xl hover:scale-110 transition-transform cursor-pointer px-3"
            >
              ‹
            </button>

            {/* Լոգոների ցուցադրություն */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center px-4">
              {visiblePartners.map((logoUrl, idx) => (
                <div key={idx} className="flex items-center justify-center h-32 md:h-36 bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
                  <img 
                    src={logoUrl} 
                    alt={`Partner ${idx}`} 
                    className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Սլայդերի հաջորդ (Next) կոճակ */}
            <button 
              onClick={handleNext}
              className="z-30 text-[#5E1EEB] font-extrabold text-3xl hover:scale-110 transition-transform cursor-pointer px-3"
            >
              ›
            </button>

          </div>

        </div>
      </section>
    </>
  );
}