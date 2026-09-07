import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը
import { collection, addDoc } from "firebase/firestore";

const CareerHero = () => {
  const [activeTab, setActiveTab] = useState("Մշակույթ");

  const heroData = {
    title: "Մշակույթ",
    description:
      "Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով: Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում",
    image: "https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg",
  };

  useEffect(() => {
    const uploadData = async () => {
      try {
        await addDoc(collection(db, "careerHero"), heroData);
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };
    uploadData();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - ամբողջ լայնությամբ */}
      <div className="w-full relative min-h-[500px] md:min-h-[600px] flex items-end">
        {/* Ետեւի ֆոնային նկար - ամբողջ լայնությամբ */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src={heroData.image}
            alt="Career background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Կոնտենտը սահմանափակված max-w-ով, որպեսզի ձախում մնա */}
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-10 pb-12 relative z-10">
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-[580px] w-full shadow-lg">
            <h1 className="text-[28px] md:text-[38px] font-bold text-[#1C1C1E] mb-4 tracking-tight">
              {heroData.title}
            </h1>
            <p className="text-[#4A4A4E] text-[15px] md:text-[16px] leading-relaxed">
              {heroData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;