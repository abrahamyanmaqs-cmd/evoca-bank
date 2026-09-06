import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlessLoanPayment() {
  const [contractNumber, setContractNumber] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Վարկային պայմանագրի համար:", contractNumber);
    // Այստեղ կարող ես ավելացնել հաջորդ քայլի տրամաբանությունը
  };

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20 flex flex-col items-center">
      <div className="max-w-[800px] w-full mx-auto px-4 md:px-6">
        
        {/* Վերադառնալու կոճակ */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-[#5E1EEB] font-semibold cursor-pointer hover:underline flex items-center gap-2"
        >
          ← Վերադառնալ
        </button>

        {/* Գլխավոր Վերնագիր */}
        <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] text-center mb-6 tracking-tight">
          Հերթական մարում
        </h1>

        {/* Տեղեկատվական նշում */}
        <p className="text-[#6C757D] text-[14px] md:text-[15px] leading-relaxed text-center mb-10 px-2">
          Եթե Ձեր կատարած վճարումը գերազանցում է սույն<br/> վարկի հերթական մարման գումարի չափը, ապա<br/> գերազանցող մասը համարվելու է պարտավորության<br/> ժամկետից շուտ կատարվող և ուղղվելու է սույն վարկի<br/> մայր գումարի մարմանը: Փոփոխված<br /> ժամանակացույցը կարող եք ստանալ «ԲԼԵՍՍ»<br/> ՈՒՎԿ-ի գլխավորային գրասենյակում կամ<br/> մասնաճյուղերում: Ոչ աշխատանքային օրը<br/> կատարված վճարումը կհամարվի մարում հաջորդ<br/> աշխատանքային օրը։
        </p>

        {/* Ֆորմայի հատված */}
        <div className="max-w-[500px] mx-auto w-full">
          <form onSubmit={handleContinue} className="flex flex-col">
            <label className="text-[#8E8E93] text-[15px] md:text-[16px] mb-3 ml-1">
              * Վարկային պայմանագրի համար
            </label>
            
            <input
              type="text"
              value={contractNumber}
              onChange={(e) => setContractNumber(e.target.value)}
              placeholder="xxx-xxxx-xxx"
              className="w-full h-[55px] bg-white border border-gray-200 rounded-xl px-4 text-[18px] outline-none focus:border-[#5E1EEB] transition-all mb-8 shadow-sm"
              required
            />

            <button
              type="submit"
              className="w-full h-[55px] bg-[#5E1EEB] text-white font-bold text-[18px] rounded-xl hover:bg-[#4d16c5] transition-all cursor-pointer shadow-md active:scale-[0.98]"
            >
              Շարունակել
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}