import React from 'react';
import { useNavigate } from 'react-router-dom';

const loanRepaymentCategories = [
  {
    id: 1,
    title: "Վարկի մայր գումարի վաղաժամկետ մարում",
    path: "early-repayment",
    image: "https://resource.evoca.am/images/webPayment/loan.png", // կարող ես փոխել հղումը ըստ քո ցանկության
  },
  {
    id: 2,
    title: "Հերթական մարում",
    path: "regular-repayment",
    image: "https://resource.evoca.am/images/webPayment/loan.png",
  },
];

export default function LoanRepaymentSubCategories() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Վերադառնալու կոճակ */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-[#5E1EEB] font-semibold cursor-pointer hover:underline"
        >
          ← Վերադառնալ
        </button>

        {/* Գլխավոր Վերնագիր */}
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#1C1C1E] text-center mb-14 tracking-tight">
          Վարկի մարում
        </h1>

        {/* Քարտերի Ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-[800px] mx-auto">
          {loanRepaymentCategories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/payments/evoca/1/${item.path}`)}
              className="bg-white rounded-[28px] p-8 shadow-sm transition-all duration-300 flex flex-col items-center justify-between text-center h-[260px] cursor-pointer relative border border-transparent hover:border-[#5E1EEB]/30 hover:shadow-md"
            >
              {/* Նկար */}
              <div className="flex-grow flex items-center justify-center pt-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>

              {/* Վերնագիր */}
              <h3 className="text-[#1C1C1E] font-semibold text-[15px] md:text-[16px] leading-snug mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}