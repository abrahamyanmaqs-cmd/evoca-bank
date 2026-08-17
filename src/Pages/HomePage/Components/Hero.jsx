import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Ներմուծում ենք Link-ը

const slides = [
  {
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    buttonText: "Իմանալ ավելին",
    link: "/about-card", // Ավելացված link
    bgColor: "bg-[#DADADA]",
    textColor: "text-[#333333]",
    image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png"
  },
  {
    title: "Evoca Աշխատավարձային նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    link: "/salary-project", 
    bgColor: "bg-[#6539AA]",
    textColor: "text-white",
    image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png"
  },
  // ... մնացած սլայդերը նույն կերպ կարող ես լրացնել link դաշտով
  {
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք ձեր զանգին...",
    buttonText: "Իմանալ ավելին",
    link: "/contact",
    bgColor: "bg-[#000000]",
    textColor: "text-white",
    image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png"
  },
  {
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    buttonText: "Իմանալ ավելին",
    link: "/visa-vision",
    bgColor: "bg-[#27292B]",
    textColor: "text-white",
    image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg"
  },
  {
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    buttonText: "Իմանալ ավելին",
    link: "/visa-infinite",
    bgColor: "bg-[#000000]",
    textColor: "text-white",
    image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png"
  },
  {
    title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
    buttonText: "Իմանալ ավելին",
    link: "/mortgage",
    bgColor: "bg-[#E4DFFF]",
    textColor: "text-[#333333]",
    image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg"
  },
  {
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    buttonText: "Իմանալ ավելին",
    link: "/unionpay",
    bgColor: "bg-[#B6A44F]",
    textColor: "text-[#333333]",
    image: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png"
  },
  {
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի'ր ավանդ Evocabank-ում բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Ծանոթանալ պայմաններին",
    link: "/deposits",
    bgColor: "bg-[#FFDCFB]",
    textColor: "text-[#333333]",
    image: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[currentIndex];

  return (
    <section className={`relative ${current.bgColor} pt-6 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 md:px-16 rounded-b-[24px] md:rounded-b-[40px] overflow-x-hidden transition-colors duration-500 w-full`}>
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[300px] md:min-h-[380px] w-full">
        
        <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-3 md:space-y-6 px-2 text-center lg:text-left w-full">
          <h1 className={`text-xl sm:text-2xl md:text-[36px] font-medium ${current.textColor} tracking-tight leading-snug`}>
            {current.title}
          </h1>
          <p className={`${current.textColor} text-xs sm:text-sm md:text-[18px] max-w-xl leading-relaxed opacity-95 mx-auto lg:mx-0 line-clamp-3 sm:line-clamp-none`}>
            {current.description}
          </p>
          <div className="pt-2 flex justify-center lg:justify-start">
            <Link
              to={current.link} // Ավելացված link-ը
              className="bg-[rgb(100,0,220)] hover:bg-[rgb(85,0,190)] text-white font-semibold px-6 py-2.5 md:px-8 md:py-3.5 rounded-full shadow-md transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm md:text-base"
            >
              {current.buttonText}
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative mt-2 lg:mt-0 w-full max-w-lg">
          <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-lg">
            <img src={current.image} alt={current.title} className="w-full h-auto object-contain bg-transparent shadow-none rounded-2xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 md:bottom-6 left-0 right-0 flex items-center justify-center space-x-2 md:space-x-6">
        <button onClick={prevSlide} className="text-[rgb(100,0,220)] hover:text-purple-900 font-bold text-lg md:text-xl transition-colors cursor-pointer bg-white/70 hover:bg-white p-1.5 md:p-2 rounded-full shadow">&larr;</button>
        <div className="flex items-center space-x-1.5 md:space-x-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`transition-all duration-300 rounded-full cursor-pointer ${currentIndex === index ? "w-2.5 h-2.5 md:w-3 md:h-3 bg-[rgb(100,0,220)] ring-2 ring-white" : "w-2 h-2 bg-gray-500/70 hover:bg-[rgb(100,0,220)]"}`} />
          ))}
        </div>
        <button onClick={nextSlide} className="text-[rgb(100,0,220)] hover:text-purple-900 font-bold text-lg md:text-xl transition-colors cursor-pointer bg-white/70 hover:bg-white p-1.5 md:p-2 rounded-full shadow">&rarr;</button>
      </div>
    </section>
  );
}