import React, { useState, useEffect } from 'react';

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
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section className="w-full bg-white py-10 md:py-32 px-2 sm:px-4 md:px-16 font-montserrat select-none overflow-hidden">
      <div className="max-w-[1450px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Ձախ մաս */}
        <div className="w-full lg:w-[38%] flex flex-col items-start text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1C1C1E] mb-3 md:mb-6 tracking-tight">
            Գործընկերներ
          </h2>
          
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-6 md:mb-10 leading-relaxed font-medium">
            Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ:
          </p>

          <button className="bg-[#F2EEFF] text-[#5E1EEB] hover:bg-[#5E1EEB] hover:text-white font-bold text-xs sm:text-sm md:text-base py-3 md:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-sm">
            <span>Բոլոր գործընկերները</span>
            <span className="text-base md:text-xl">›</span>
          </button>
        </div>

        {/* Աջ մաս՝ Սլայդեր */}
        <div className="w-full lg:w-[62%] relative flex items-center bg-[#FAFAFC] border border-gray-100 rounded-[20px] sm:rounded-[28px] md:rounded-[36px] p-4 sm:p-6 md:p-14 shadow-sm">
          
          <div className="relative flex-shrink-0 z-20 hidden sm:flex items-center justify-center w-32 h-32 md:w-52 md:h-52">
            <img 
              src="https://mission.partners/wp-content/uploads/2022/10/ed3bbf2c-0600-287d-7ea4-b746a7e167f7-1030x1030.jpg" 
              alt="Partners Hand" 
              className="w-24 h-24 md:w-40 md:h-40 object-cover rounded-full shadow-lg relative z-10"
            />
          </div>

          <button 
            onClick={handlePrev}
            className="z-30 text-[#5E1EEB] font-extrabold text-xl sm:text-2xl md:text-3xl hover:scale-110 transition-transform cursor-pointer px-1 md:px-3"
          >
            ‹
          </button>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-center justify-center px-1 sm:px-2 md:px-4 w-full">
            {visiblePartners.map((logoUrl, idx) => (
              <div key={idx} className="flex items-center justify-center h-24 sm:h-28 md:h-36 bg-white rounded-xl sm:rounded-2xl p-3 md:p-5 shadow-xs border border-gray-100 w-full">
                <img 
                  src={logoUrl} 
                  alt={`Partner ${idx}`} 
                  className="max-h-12 sm:max-h-16 md:max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="z-30 text-[#5E1EEB] font-extrabold text-xl sm:text-2xl md:text-3xl hover:scale-110 transition-transform cursor-pointer px-1 md:px-3"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}