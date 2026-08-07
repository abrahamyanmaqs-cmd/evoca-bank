import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը
import { collection, addDoc } from "firebase/firestore";

const CareerTeamQuotes = () => {
  const slides = [
    {
      id: 1,
      quote: ["Թրենդային", "Պահանջված", "Ուրախ"],
      name: "Հարություն Սահակյան",
      position: "Անվտանգության մասնագետ",
    },
    {
      id: 2,
      quote: ["Դինամիկ", "Պրպտող", "Զարգացող"],
      name: "Լիլիթ Գաբրոյան",
      position: "Գլխավոր ֆինանսական տնօրեն",
    },
    {
      id: 3,
      quote: ["Կրեատիվ", "Նորարար", "Մանուշակագույն"],
      name: "Ալլա Զաքարյան",
      position: "Վճարային գործիքների մասնագետ",
    },
    {
      id: 4,
      quote: ["Գույներ", "Էմոցիաներ", "Նորարարություններ"],
      name: "Գայանե Առաքելյան",
      position: "Մասնաճյուղի կառավարիչ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Ցույց տալու համար 3 քարտ միանգամից (ձախ, կենտրոն, աջ)
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  useEffect(() => {
    const uploadData = async () => {
      try {
        for (const item of slides) {
          await addDoc(collection(db, "careerTeamQuotes"), item);
        }
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };
    uploadData();
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Վերնագիր */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#1C1C1E] tracking-tight">
            Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն» 3 բառով
          </h2>
        </div>

        {/* Սլայդերի գլխավոր հատվածը */}
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Ձախ սլաք */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 cursor-pointer z-20 shrink-0 text-[#5E1EEB]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Քարտեր (3 հատ միաժամանակ) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Ձախ քարտ (կիսաթափանցիկ) */}
            <div className="hidden md:flex flex-col bg-[#F9F8FC] rounded-3xl p-8 shadow-sm opacity-50 scale-95 transition-all duration-500 ease-in-out relative min-h-[320px] justify-between">
              <div className="absolute top-6 right-6 flex gap-1">
                <div className="w-3 h-8 bg-[#5E1EEB] skew-x-[-12deg]"></div>
                <div className="w-3 h-8 bg-[#5E1EEB] skew-x-[-12deg]"></div>
              </div>
              <div>
                <div className="space-y-1 mb-8">
                  {slides[prevIndex].quote.map((word, i) => (
                    <h3 key={i} className="text-[24px] font-bold text-[#5E1EEB]">
                      {word}
                    </h3>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-[#1C1C1E]">{slides[prevIndex].name}</h4>
                <p className="text-[14px] text-gray-500">{slides[prevIndex].position}</p>
              </div>
            </div>

            {/* Մեծ կենտրոնական քարտ */}
            <div className="flex flex-col bg-[#F9F8FC] rounded-[32px] p-8 md:p-10 shadow-lg scale-100 transition-all duration-500 ease-in-out relative min-h-[350px] justify-between z-10 border border-purple-100">
              <div className="absolute top-6 right-6 flex gap-1">
                <div className="w-3.5 h-10 bg-[#5E1EEB] skew-x-[-12deg]"></div>
                <div className="w-3.5 h-10 bg-[#5E1EEB] skew-x-[-12deg]"></div>
              </div>
              <div>
                <div className="space-y-1.5 mb-8">
                  {slides[currentIndex].quote.map((word, i) => (
                    <h3 key={i} className="text-[28px] md:text-[32px] font-bold text-[#5E1EEB] tracking-tight">
                      {word}
                    </h3>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[17px] text-[#1C1C1E]">{slides[currentIndex].name}</h4>
                <p className="text-[14px] text-gray-500 mt-0.5">{slides[currentIndex].position}</p>
              </div>
            </div>

            {/* Աջ քարտ (կիսաթափանցիկ) */}
            <div className="hidden md:flex flex-col bg-[#F9F8FC] rounded-3xl p-8 shadow-sm opacity-50 scale-95 transition-all duration-500 ease-in-out relative min-h-[320px] justify-between">
              <div className="absolute top-6 right-6 flex gap-1">
                <div className="w-3 h-8 bg-[#5E1EEB] skew-x-[-12deg]"></div>
                <div className="w-3 h-8 bg-[#5E1EEB] skew-x-[-12deg]"></div>
              </div>
              <div>
                <div className="space-y-1 mb-8">
                  {slides[nextIndex].quote.map((word, i) => (
                    <h3 key={i} className="text-[24px] font-bold text-[#5E1EEB]">
                      {word}
                    </h3>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-[#1C1C1E]">{slides[nextIndex].name}</h4>
                <p className="text-[14px] text-gray-500">{slides[nextIndex].position}</p>
              </div>
            </div>

          </div>

          {/* Աջ սլաք */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 cursor-pointer z-20 shrink-0 text-[#5E1EEB]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Կետիկներ (Dots) ներքևի մասում */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? "w-8 bg-[#5E1EEB]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CareerTeamQuotes;