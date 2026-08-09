 import React from "react";

export default function LoanCardd({ 
  image, 
  title, 
  description, 
  amount, 
  duration, 
  durationRealEstate,
  durationMovables,
  rate, 
  prepayment,
  loanToValue 
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full border-b border-gray-200 py-10">
      
      {/* Ձախ մաս: Նկար */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Աջ մաս: Ինֆորմացիա */}
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-black text-[#1C1C1E] mb-3">{title}</h3>
          <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Վիճակագրություն / Թվեր */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-6">
          <div>
            <p className="text-xs text-[#6B7280] mb-1">մինչև</p>
            <p className="text-2xl font-bold text-[#5E1EEB]">{amount}</p>
            <p className="text-xs text-[#6B7280] mt-1">Գումար</p>
          </div>

          {durationRealEstate && (
            <div>
              <p className="text-xs text-[#6B7280] mb-1">անշարժ գույքի գրավադրման դեպքում</p>
              <p className="text-2xl font-bold text-[#5E1EEB]">{durationRealEstate}</p>
              <p className="text-xs text-[#6B7280] mt-1">ամիս</p>
            </div>
          )}

          {durationMovables && (
            <div>
              <p className="text-xs text-[#6B7280] mb-1">շարժական գույքի գրավադրման դեպքում</p>
              <p className="text-2xl font-bold text-[#5E1EEB]">{durationMovables}</p>
              <p className="text-xs text-[#6B7280] mt-1">Վարկի մարման ժամկետը</p>
            </div>
          )}

          {duration && (
            <div>
              <p className="text-xs text-[#6B7280] mb-1">մինչև</p>
              <p className="text-2xl font-bold text-[#5E1EEB]">{duration}</p>
              <p className="text-xs text-[#6B7280] mt-1">Ժամկետ</p>
            </div>
          )}

          <div>
            <p className="text-xs text-[#6B7280] mb-1">սկսած</p>
            <p className="text-2xl font-bold text-[#5E1EEB]">{rate}</p>
            <p className="text-xs text-[#6B7280] mt-1">Տոկոսադրույք</p>
          </div>

          {prepayment && (
             <div>
               <p className="text-xs text-[#6B7280] mb-1">սկսած</p>
               <p className="text-2xl font-bold text-[#5E1EEB]">{prepayment}</p>
               <p className="text-xs text-[#6B7280] mt-1">Կանխավճար</p>
             </div>
          )}

          {loanToValue && (
             <div>
               <p className="text-xs text-[#6B7280] mb-1">մինչև</p>
               <p className="text-2xl font-bold text-[#5E1EEB]">{loanToValue}</p>
               <p className="text-xs text-[#6B7280] mt-1">Վարկ / գրավ հարաբերակցություն</p>
             </div>
          )}
        </div>

        {/* Կոճակ */}
        <div>
          <button className="bg-[#F3F0FD] text-[#5E1EEB] font-semibold px-6 py-3 rounded-full hover:bg-[#5E1EEB] hover:text-white transition-colors flex items-center gap-2">
            Մանրամասն
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}