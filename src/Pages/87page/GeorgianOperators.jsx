import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GeorgianOperators() {
  const navigate = useNavigate();

  const operators = [
    {
      name: 'Ջեոսել',
      logoUrl: 'https://resource.evoca.am/images/webPayment/geocell.png',
      path: '/payments/international/georgian/geocell',
    },
    {
      name: 'Մագթի',
      logoUrl: 'https://resource.evoca.am/images/webPayment/magti.png',
      path: '/payments/international/georgian/magti',
    },
  ];

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20 flex flex-col items-center">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6">
        
        {/* Վերադառնալու կոճակ */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-[#5E1EEB] font-semibold cursor-pointer hover:underline flex items-center gap-2"
        >
          ← Վերադառնալ
        </button>

        {/* Գլխավոր Վերնագիր */}
        <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-10 tracking-tight">
          Վրացական
        </h1>

        {/* Քարտերի ցանկ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {operators.map((op, index) => (
            <div
              key={index}
              onClick={() => navigate(op.path)}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all hover:border-[#5E1EEB]/30 group min-h-[220px]"
            >
              <div className="h-16 flex items-center justify-center mb-6">
                <img 
                  src={op.logoUrl} 
                  alt={op.name} 
                  className="max-h-full max-w-[140px] object-contain group-hover:scale-105 transition-transform" 
                />
              </div>
              <span className="text-[16px] font-medium text-[#1C1C1E]">
                {op.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}