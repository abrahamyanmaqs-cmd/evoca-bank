import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventsSubCategories() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20 flex flex-col justify-between">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 w-full flex-grow">
        
        {/* Վերադառնալու կոճակ */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-[#5E1EEB] font-semibold cursor-pointer hover:underline"
        >
          ← Վերադառնալ
        </button>

        {/* Գլխավոր Վերնագիր */}
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#1C1C1E] text-center mb-14 tracking-tight">
          Միջոցառումներ
        </h1>

        {/* Դատարկ վիճակ (Եթե բովանդակություն չկա) */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-[#8E8E93] text-[18px]">
            Այս բաժնում տվյալ պահին միջոցառումներ առկա չեն։
          </p>
        </div>

      </div>
    </div>
  );
}