import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WaterPayment() {
  const [subscriberNumber, setSubscriberNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Բաժանորդի համար:", subscriberNumber);
    console.log("Հեռախոսահամար:", phoneNumber);
    // Այստեղ կարող ես ավելացնել հաջորդ քայլի տրամաբանությունը
  };

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
        <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] text-center mb-10 tracking-tight">
          Ջուր
        </h1>

        {/* Ֆորմայի հատված */}
        <div className="max-w-[500px] mx-auto w-full">
          <form onSubmit={handleContinue} className="flex flex-col">
            
            {/* Բաժանորդի համար */}
            <label className="text-[#8E8E93] text-[15px] md:text-[16px] mb-2 ml-1">
              Բաժանորդի համար
            </label>
            <input
              type="text"
              value={subscriberNumber}
              onChange={(e) => setSubscriberNumber(e.target.value)}
              placeholder=""
              className="w-full h-[55px] bg-white border border-gray-200 rounded-xl px-4 text-[18px] outline-none focus:border-[#5E1EEB] transition-all mb-6 shadow-sm"
              required
            />

            {/* Հեռախոսահամար */}
            <label className="text-[#8E8E93] text-[15px] md:text-[16px] mb-2 ml-1">
              Հեռախոսահամար
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=""
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