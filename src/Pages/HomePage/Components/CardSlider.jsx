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

  // 3D Tilt state
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

  // 3D Շարժման ֆունկցիա (ማկնիկի տեղաշարժով պտույտ)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / centerY) * 12; // Որքան մեծ, այնքան ուժեղ է թեքվում
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
    <section className="bg-[#F2F5FA] py-20 px-4 md:px-12 min-h-[600px] flex items-center select-none">
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* 1. ՁԱԽ ԿՈՂՄ՝ ՈՒՂՂԱՀԱՅԱՑ SLIDER */}
        <div className="lg:col-span-3 flex flex-col items-center relative h-[380px]">
          <button 
            onClick={() => verticalSwiper?.slidePrev()}
            className="z-10 mb-2 p-2 text-[#5E2BFF] hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <svg className="w-6 h-6 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={15}
            centeredSlides={true}
            onSwiper={setVerticalSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Controller]}
            className="h-full w-full"
          >
            {cardsData.map((card, idx) => (
              <SwiperSlide key={card.id} className="cursor-pointer flex flex-col items-center justify-center">
                <div 
                  onMouseEnter={() => {
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
                    className="w-24 h-auto rounded-lg shadow-md mb-1 object-contain pointer-events-none"
                  />
                  <span className="text-[11px] text-[#2B2B2B] text-center line-clamp-1">
                    {card.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button 
            onClick={() => verticalSwiper?.slideNext()}
            className="z-10 mt-2 p-2 text-[#5E2BFF] hover:scale-125 transition-transform duration-200 cursor-pointer"
          >
            <svg className="w-6 h-6 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* 2. ՄԵՋՏԵՂԻ ՄԱՍ՝ ԳԼԽԱՎՈՐ ՄԵԾ ՔԱՐՏԸ (3D Էֆեկտով) */}
        <div className="lg:col-span-5 flex justify-center items-center py-6">
          <Swiper
            onSwiper={setMainSwiper}
            allowTouchMove={false}
            effect="fade"
            className="w-full flex justify-center"
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center items-center">
                <div 
                  className="relative group cursor-pointer py-4"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ perspective: '1000px' }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/10 blur-xl rounded-full transition-all duration-300"></div>
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    style={tiltStyle}
                    className="w-full max-w-[360px] sm:max-w-[400px] h-auto object-contain drop-shadow-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 3. ԱՋ ԿՈՂՄ՝ ՔԱՐՏԻ ՏԵՔՍՏՆ ՈՒ «ՄԱՆՐԱՄԱՍՆ» ԿՈՃԱԿԸ */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-left pl-0 lg:pl-6">
          <h2 className="text-3xl font-extrabold text-[#1C1C1E] tracking-tight">
            {cardsData[activeIndex]?.title}
          </h2>
          
          <p className="text-[#636366] text-sm leading-relaxed min-h-[90px]">
            {cardsData[activeIndex]?.description}
          </p>

          <div>
            <a
              href="#"
              className="inline-block bg-[#5E2BFF] hover:bg-[#4A1EEB] text-white text-sm font-semibold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Մանրամասն
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}