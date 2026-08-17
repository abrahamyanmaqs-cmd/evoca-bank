import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, doc, writeBatch } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';

import 'swiper/css';

const initialCardsData = [
  { id: "1", title: "Evoca Gift Card", description: "Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է: Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:", img: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png", order: 1 },
  { id: "2", title: "Digital Gift Card", description: "Թվային նվեր քարտ՝ ակնթարթային ակտիվացմամբ EvocaTOUCH հավելվածում:", img: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png", order: 2 },
  { id: "3", title: "Visa Infinite", description: "Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ: Բացառիկ հնարավորությունների փաթեթ VIP կարգավիճակով:", img: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png", order: 3 },
  { id: "4", title: "Visa Vision", description: "0% կանխիկացում Evoca-ի բոլոր բանկոմատներից, Cashback բոլոր անկանխիկ վճարումներից:", img: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png", order: 4 },
  { id: "5", title: "Mastercard World Digital", description: "Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:", img: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png", order: 5 },
  { id: "6", title: "UnionPay Business Platinum", description: "Հարմարավետ լուծում բիզնես փոխանցումների և միջազգային գործուղումների համար:", img: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png", order: 6 },
  { id: "7", title: "MyLer Gift Card", description: "Հատուկ նվեր-քարտ լեռնադահուկային սպորտի և ակտիվ հանգստի սիրահարների համար:", img: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png", order: 7 },
  { id: "8", title: "4U.am Gift card", description: "Էքսկլյուզիվ նվեր քարտ 4U.am հարթակում գնումներ կատարելու համար:", img: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png", order: 8 },
  { id: "9", title: "Mastercard Gold", description: "Քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները:", img: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png", order: 9 },
  { id: "10", title: "Evoca Visa Platinum", description: "Բարձրակարգ սպասարկում, ապահովագրություն և անվճար մուտք Lounge Key սրահներ:", img: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png", order: 10 },
  { id: "11", title: "Evoca Digital Card", description: "Առանց պլաստիկի, լիովին ֆունկցիոնալ թվային քարտ անհպում վճարումների համար:", img: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png", order: 11 },
  { id: "12", title: "Mastercard Standard", description: "Դասական և հուսալի վճարային քարտ ամենօրյա ծախսերի համար:", img: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png", order: 12 },
  { id: "13", title: "Visa Classic", description: "Համաշխարհային ճանաչում ունեցող քարտ ձեր բոլոր գնումների համար:", img: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png", order: 13 },
  { id: "14", title: "ArCa Classic", description: "Ազգային վճարային համակարգի քարտ՝ ՀՀ տարածքում շահավետ գործարքների համար:", img: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png", order: 14 },
  { id: "15", title: "Evoca Business Card", description: "Կազմակերպությունների աշխատակիցների ծախսերի արդյունավետ կառավարում:", img: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png", order: 15 },
  { id: "16", title: "ArCa Gold", description: "Առավելագույն հնարավորություններ ArCa համակարգի սիրահարների համար:", img: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png", order: 16 },
  { id: "17", title: "Evoca Junior Card", description: "Հատուկ քարտ երեխաների և դեռահասների համար՝ ֆինանսական գրագիտությունը զարգացնելու համար:", img: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png", order: 17 },
  { id: "18", title: "UnionPay Gold", description: "Միջազգային վճարային քարտ՝ Ասիայում և ողջ աշխարհում ճանապարհորդելու համար:", img: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png", order: 18 },
  { id: "19", title: "Evoca Special Card", description: "Բացառիկ դիզայնով և անհատական պայմաններով հատուկ քարտ:", img: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg", order: 19 }
];

export default function CardSlider() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verticalSwiper, setVerticalSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [tiltStyle, setTiltStyle] = useState({});

  useEffect(() => {
    const fetchOrSeedCards = async () => {
      try {
        const cardsCollectionRef = collection(db, "cards");
        const querySnapshot = await getDocs(cardsCollectionRef);

        if (querySnapshot.empty) {
          const batch = writeBatch(db);
          initialCardsData.forEach((item) => {
            const docRef = doc(db, "cards", item.id);
            batch.set(docRef, item);
          });
          await batch.commit();
          setCardsData(initialCardsData);
        } else {
          const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          items.sort((a, b) => (a.order || 0) - (b.order || 0));
          setCardsData(items);
        }
      } catch (error) {
        console.error("Սխալ տվյալների բեռնման ժամանակ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrSeedCards();
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Անջատել 3D tilt-ը հեռախոսների վրա կատարողականի և հարմարավետության համար
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-in-out',
    });
  };

  if (loading) {
    return (
      <div className="bg-[#F2F5FA] py-20 min-h-[500px] flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-[#5E2BFF] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="bg-[#F2F5FA] py-8 md:py-20 px-2 sm:px-4 md:px-12 min-h-[500px] flex items-center select-none w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* 1. ՄԻՆԻ ՍԼԱՅԴԵՐ (Հեռախոսի վրա՝ հորիզոնական, լայնությունը հարմարեցված 300px-ին) */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col items-center justify-center relative w-full h-auto lg:h-[380px] gap-2 lg:gap-0">
          <button 
            onClick={() => verticalSwiper?.slidePrev()}
            className="z-10 p-1 lg:mb-2 text-[#5E2BFF] hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 stroke-current stroke-[3] rotate-[-90deg] lg:rotate-0" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <div className="w-[240px] sm:w-[280px] lg:w-full lg:max-w-none lg:h-full overflow-hidden">
            <Swiper
              direction={window.innerWidth >= 1024 ? "vertical" : "horizontal"}
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={true}
              onSwiper={setVerticalSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              modules={[Controller]}
              className="h-full w-full"
            >
              {cardsData.map((card, idx) => (
                <SwiperSlide key={card.id} className="cursor-pointer flex flex-col items-center justify-center">
                  <div 
                    onClick={() => {
                      setActiveIndex(idx);
                      verticalSwiper?.slideTo(idx);
                      mainSwiper?.slideTo(idx);
                    }}
                    className={`transition-all duration-300 flex flex-col items-center p-1 ${
                      activeIndex === idx 
                        ? 'scale-105 opacity-100 font-bold' 
                        : 'scale-90 opacity-40 hover:opacity-75'
                    }`}
                  >
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-16 sm:w-20 md:w-24 h-auto rounded-lg shadow-md mb-1 object-contain pointer-events-none"
                    />
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#2B2B2B] text-center line-clamp-1">
                      {card.title}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => verticalSwiper?.slideNext()}
            className="z-10 p-1 lg:mt-2 text-[#5E2BFF] hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 lg:w-6 lg:h-6 stroke-current stroke-[3] rotate-[-90deg] lg:rotate-0" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* 2. ՄԵՋՏԵՂԻ ՄԱՍ՝ ԳԼԽԱՎՈՐ ՄԵԾ ՔԱՐՏԸ (300px հեռախոսների համար անվտանգ չափսերով) */}
        <div className="lg:col-span-5 flex justify-center items-center py-2">
          <Swiper
            onSwiper={setMainSwiper}
            allowTouchMove={false}
            effect="fade"
            className="w-full flex justify-center"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center items-center">
                <div 
                  className="relative group cursor-pointer py-2 w-full flex justify-center"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ perspective: '1000px' }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-black/10 blur-xl rounded-full transition-all duration-300"></div>
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    style={tiltStyle}
                    className="w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] h-auto object-contain drop-shadow-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. ԱՋ ԿՈՂՄ՝ ՏԵՔՍՏ ԵՒ ԿՈՃԱԿ (Օպտիմիզացված փոքր էկրանների համար) */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-3 md:space-y-6 text-center lg:text-left px-2 lg:pl-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1C1C1E] tracking-tight">
            {cardsData[activeIndex]?.title}
          </h2>
          
          <p className="text-[#636366] text-[11px] sm:text-xs md:text-sm leading-relaxed min-h-[60px] md:min-h-[90px]">
            {cardsData[activeIndex]?.description}
          </p>

          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-block bg-[#5E2BFF] hover:bg-[#4A1EEB] text-white text-xs sm:text-sm font-semibold py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Մանրամասն
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}