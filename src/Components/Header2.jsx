 import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Ավելացրել ենք ռոութերների ուղիները (path) յուրաքանչյուր կետի համար
  const navItems = [
    { title: "Վարկեր", path: "/loans" },
    { title: "Քարտեր", path: "/cards" },
    { title: "Ավանդներ", path: "/deposits" },
    { title: "Հաշիվներ", path: "/accounts" },
    { title: "Փոխանցումներ", path: "/transfers" },
    { title: "Արժեթղթեր", path: "/securities" },
    { title: "EvocaSALARY", path: "/evocasalary" },
    { title: "EvocaTOUCH", path: "/evocatouch" },
  ];

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Լոգո - դեպի գլխավոր էջ */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
            className="h-20 object-contain"
          />
        </Link>

        {/* Մենյուի հղումներ (React Router Link-երով) */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-900 font-medium hover:text-[#5E1EEB] transition-colors text-sm lg:text-base"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* EvocaONLINE կոճակ */}
        <div>
          <Link
  to="/evocaonline"
  className="bg-[#5E1EEB] hover:bg-[#5217ce] text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 text-xs inline-flex items-center justify-center cursor-pointer ml-2"
>
  EvocaONLINE
</Link>
        </div>

      </div>
    </header>
  );
}