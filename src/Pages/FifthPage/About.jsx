 import React, { useState } from "react";
import AboutHero from "./AboutHero";

const About = () => {
  // Պահում ենք ակտիվ մենյուի ինդեքսը կամ անունը
  const [activeTab, setActiveTab] = useState("Ընդհանուր");

  const menuItems = [
    "Ընդհանուր",
    "Կառուցվածք",
    "Բաժնետերեր",
    "Ղեկավարություն",
    "Գործընկերներ",
    "Մրցանակներ",
    "Կարծիքներ",
    "CSR",
  ];

  return (
    <div className="w-full bg-white font-sans min-h-screen">
      
      {/* Մանուշակագույն ենթամենյուի գոտի */}
      <div className="w-full bg-[#5E1EEB] py-3.5 px-4 md:px-10 overflow-x-auto shadow-inner">
        <div className="max-w-[1440px] mx-auto flex items-center gap-10 whitespace-nowrap text-white text-[15px] font-medium">
          {menuItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`relative pb-1 transition-colors duration-200 outline-none cursor-pointer ${
                  isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"
                }`}
              >
                {item}
                {/* Գիծը, որը հայտնվում է սեղմված վիճակում */}
                {isActive && (
                  <span className="absolute bottom-[-14px] left-0 w-full h-[3px] bg-white rounded-t-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Այստեղ կանչում ենք մեր առանձին բաղադրիչը */}
      <AboutHero />

    </div>
  );
};

export default About;