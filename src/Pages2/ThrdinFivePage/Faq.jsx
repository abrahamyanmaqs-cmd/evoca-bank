 import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { faqCategories } from "./faqData";
import { faqQuestions } from "./faqData";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('bonds');
  const [openIndices, setOpenIndices] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [activeCategory]: {
        ...prev[activeCategory],
        [index]: !prev[activeCategory]?.[index],
      },
    }));
  };

  const currentQuestions = faqQuestions[activeCategory] || [];
  const activeCategoryObj = faqCategories.find((cat) => cat.id === activeCategory);

  return (
    <div className="w-full font-sans min-h-screen py-12 px-4 md:px-8 bg-white">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Էջի գլխավոր վերնագիր */}
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#222222] mb-10">
          Հաճախ տրվող հարցեր
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Ձախ կողմի Մենյու */}
          <div className="w-full lg:w-[320px] bg-[#F8F7FA] rounded-3xl p-4 shadow-sm relative shrink-0">
            <div className="space-y-1">
              {faqCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all relative ${
                      isActive 
                        ? 'text-[#5E1EEB] bg-white shadow-sm' 
                        : 'text-[#666666] hover:text-[#222222] hover:bg-white/50'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#5E1EEB] rounded-r-full" />
                    )}
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Աջ կողմի Հարցերի բովանդակություն */}
          <div className="flex-1 w-full">
            <h2 className="text-[28px] md:text-[34px] font-bold text-[#222222] mb-6">
              {activeCategoryObj?.name}
            </h2>

            <div className="space-y-4">
              {currentQuestions.map((item, index) => {
                const isOpen = openIndices[activeCategory]?.[index] || false;
                return (
                  <div 
                    key={index} 
                    className="border border-[#E5E2EC] rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-[#F9F8FC] transition-colors"
                    >
                      <span className="text-[16px] md:text-[18px] font-bold text-[#222222]">
                        {item.question}
                      </span>
                      <span className={`text-[#5E1EEB] text-[22px] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <FiChevronDown />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-[#555555] text-[15px] md:text-[16px] leading-relaxed border-t border-[#F0EEF5] pt-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Faq;