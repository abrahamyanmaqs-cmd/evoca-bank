 import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը
import { collection, addDoc } from "firebase/firestore";

const CareerCultureSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Evoca New Year Corporate Party 2022",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg",
    },
    {
      id: 2,
      title: "EVOCAISLAND Evoca Summer Party 2022",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg",
    },
    {
      id: 3,
      title: "Attention!!! You have never seen anything like this",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16335942010669/744x419.png",
    },
    {
      id: 4,
      title: "Purple photoshoot with Evocabank",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16196069660929/744x419.jpg",
    },
    {
      id: 5,
      title: "Welcome to Evocabank",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16196066065187/744x419.jpg",
    },
    {
      id: 6,
      title: "Evoca Corporate Party 2021",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16412988100187/744x419.jpg",
    },
    {
      id: 7,
      title: "Evocabank neon art corporate party",
      image: "https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  useEffect(() => {
    const uploadData = async () => {
      try {
        for (const item of slides) {
          await addDoc(collection(db, "careerCultureSlider"), item);
        }
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };
    uploadData();
  }, []);

  return (
    <div className="w-full bg-[#5E1EEB] relative overflow-hidden py-16 px-4 md:px-10 text-white">
      {/* Ետնամասի դեկորատիվ երկրաչափական անիմացիոն պատկերներ */}
      <div className="absolute top-10 left-10 w-8 h-12 bg-pink-400 rotate-12 opacity-70 animate-bounce duration-1000"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-10 h-10 border-4 border-pink-300 rounded-full opacity-60 animate-spin"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-purple-400 rotate-45 opacity-50"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Վերնագրի հատված */}
        <div className="max-w-[850px] mb-12">
          <h2 className="text-[32px] md:text-[42px] font-bold mb-4 tracking-tight">
            Մշակույթ
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] leading-relaxed">
            Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ: Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում: Միացե՛ք մեզ:
          </p>
        </div>

        {/* Սլայդերի գլխավոր հատվածը */}
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Ձախ սլաք */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer z-20 shrink-0"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Քարտեր (Ձախ փոքր, Մեծ կենտրոնական, Աջ փոքր) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Ձախ փոքր քարտ */}
            <div className="hidden md:flex flex-col bg-white text-[#1C1C1E] rounded-3xl p-4 shadow-xl opacity-60 scale-95 transition-all duration-500 ease-in-out">
              <div className="rounded-2xl overflow-hidden relative h-[180px] bg-gray-100 mb-4">
                <img src={slides[prevIndex].image} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#5E1EEB] pl-0.5">
                    ▶
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-[15px] line-clamp-2">{slides[prevIndex].title}</h3>
            </div>

            {/* Մեծ կենտրոնական քարտ (Ավելի սահուն և դինամիկ) */}
            <div className="flex flex-col bg-white text-[#1C1C1E] rounded-[32px] p-6 shadow-2xl scale-100 transition-all duration-500 ease-in-out z-10">
              <div className="rounded-2xl overflow-hidden relative h-[260px] md:h-[320px] bg-gray-100 mb-6">
                <img src={slides[currentIndex].image} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-[#5E1EEB] text-xl pl-1 shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                    ▶
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-[18px] md:text-[20px] mb-2">{slides[currentIndex].title}</h3>
            </div>

            {/* Աջ փոքր քարտ */}
            <div className="hidden md:flex flex-col bg-white text-[#1C1C1E] rounded-3xl p-4 shadow-xl opacity-60 scale-95 transition-all duration-500 ease-in-out">
              <div className="rounded-2xl overflow-hidden relative h-[180px] bg-gray-100 mb-4">
                <img src={slides[nextIndex].image} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#5E1EEB] pl-0.5">
                    ▶
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-[15px] line-clamp-2">{slides[nextIndex].title}</h3>
            </div>

          </div>

          {/* Աջ սլաք */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer z-20 shrink-0"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>
    </div>
  );
};

export default CareerCultureSlider;