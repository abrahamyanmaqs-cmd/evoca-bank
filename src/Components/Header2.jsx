 import React from 'react';

export default function Navbar() {
  const navItems = [
    "Վարկեր",
    "Քարտեր",
    "Ավանդներ",
    "Հաշիվներ",
    "Փոխանցումներ",
    "Արժեթղթեր",
    "EvocaSALARY",
    "EvocaTOUCH",
  ];

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Լոգո - դարձրել ենք հղում (link) դեպի գլխավոր էջ ("/") */}
        <a href="/" className="flex items-center cursor-pointer">
          <img 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
            className="h-20 object-contain"
          />
        </a>

        {/* Մենյուի հղումներ */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-900 font-medium hover:text-purple-700 transition-colors text-sm lg:text-base"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* EvocaONLINE կոճակ */}
        <div>
          <a
            href="#"
            className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-7 py-2.5 rounded-full shadow-md transition-all duration-300 text-sm md:text-base inline-flex items-center justify-center"
          >
            EvocaONLINE
          </a>
        </div>

      </div>
    </header>
  );
}