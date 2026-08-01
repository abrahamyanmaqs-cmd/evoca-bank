 import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header1 = () => {
  // Օգտագործում ենք useLocation, որպեսզի էջը թարմացնելիս ակտիվ տաբը ճիշտ մնա
  const location = useLocation();

  const tabs = [
    { name: "Անհատ", path: "/individuals" }, // Եթե ուզում ես սա լինի գլխավորը, կարող ես path-ը դնել "/"
    { name: "Բիզնես", path: "/business" },
    { name: "Ակնթարթային վճարումներ", path: "/payments" },
    { name: "Մեր մասին", path: "/about" },
    { name: "Նորություններ", path: "/news" },
    { name: "Բլոգ", path: "/blog" },
    { name: "Կարիերա", path: "/career" },
  ];

  return (
    <div className="w-full border-b border-gray-100 bg-white select-none">
      <div className="relative mx-auto flex items-center justify-between w-full max-w-[1440px] px-4 md:px-10">
        
        {/* ================= ՁԱԽ ՄԱՍ: Տաբեր ================= */}
        <div className="flex items-center gap-6 text-[13px] whitespace-nowrap overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            // Ստուգում ենք՝ արդյոք հասցեն համապատասխանում է տաբի հասցեին
            const isActive = location.pathname === tab.path || (location.pathname === "/" && tab.path === "/individuals");

            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`py-3.5 font-semibold transition-all duration-300 border-b-2 ${
                  isActive
                    ? "text-[#5E1EEB] border-[#5E1EEB]" // Ակտիվ վիճակ
                    : "text-[#1C1C1E] hover:text-[#5E1EEB] border-transparent" // Պասիվ վիճակ
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* ================= ԱՋ ՄԱՍ: Հղումներ և Իկոնկաներ ================= */}
        <div className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-[#5E1EEB]">
          
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
            Առցանց հայտեր
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
            Հետադարձ կապ
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Իկոնկաների բլոկ */}
          <div className="flex items-center gap-4 text-[#1C1C1E] ml-2">
            
            {/* Քարտեզ (Մասնաճյուղեր) */}
            <svg className="w-[18px] h-[18px] cursor-pointer hover:text-[#5E1EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>

            {/* Հարցական (Օգնություն) */}
            <svg className="w-[18px] h-[18px] cursor-pointer hover:text-[#5E1EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>

            {/* Գլոբուս (Լեզու) */}
            <svg className="w-[18px] h-[18px] cursor-pointer hover:text-[#5E1EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>

            {/* Որոնում */}
            <svg className="w-[18px] h-[18px] cursor-pointer hover:text-[#5E1EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>

            {/* Համբուրգեր մենյու (3 գիծ) */}
            <svg className="w-6 h-6 cursor-pointer hover:text-[#5E1EEB] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header1;