import React from 'react';

export default function TariffSidebar() {
  const menuItems = [
    { title: "Սպառողական վարկեր", active: true },
    { title: "Հիփոթեքային վարկեր", active: false },
    { title: "Ավտովարկեր", active: false },
    { title: "Լիզինգ", active: false },
    { title: "Օնլայն վարկեր", active: false },
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 select-none">
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center justify-between cursor-pointer p-3 rounded-xl transition-all duration-300 ${
              item.active ? 'bg-transparent' : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Մանուշակագույն գիծ ակտիվի համար */}
              {item.active && (
                <div className="w-1.5 h-6 bg-[#5E1EEB] rounded-full"></div>
              )}
              <span className={`text-lg ${item.active ? 'font-bold text-[#5E1EEB]' : 'font-bold text-gray-500'}`}>
                {item.title}
              </span>
            </div>
            
            {/* Սլաք */}
            <div className={`${item.active ? 'text-[#5E1EEB]' : 'text-gray-500'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}