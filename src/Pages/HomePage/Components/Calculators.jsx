import React, { useState } from 'react';

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('loan');
  
  const [loanAmount, setLoanAmount] = useState('1000000');
  const [loanTerm, setLoanTerm] = useState('12');
  const [interestRate, setInterestRate] = useState('14');
  const [repaymentMethod, setRepaymentMethod] = useState('annuity');

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log({
      loanAmount: Number(loanAmount) || 0,
      loanTerm: Number(loanTerm) || 0,
      interestRate: Number(interestRate) || 0,
      repaymentMethod
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      {/* Հեռացվել է հսկայական min-h-screen-ը, դարձել է նորմալ py-12 md:py-20, որպեսզի դատարկ տեղ չբացվի */}
      <section className="bg-[#F2F5FA] py-12 md:py-20 px-3 sm:px-4 md:px-12 w-full flex flex-col items-center select-none font-montserrat overflow-x-hidden">
        <div className="max-w-[1280px] w-full mx-auto">
          
          {/* Վերնագիր */}
          <h2 className="text-2xl sm:text-[34px] font-bold text-[#1C1C1E] mb-6 md:mb-8 text-left">
            Հաշվիչներ
          </h2>

          {/* Գլխավոր Քարտ */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-10 border border-gray-100 w-full">
            
            {/* Վերևի Tab-եր */}
            <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 mb-6 md:mb-8 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('loan')}
                className={`pb-3 text-sm sm:text-base font-bold transition-all relative cursor-pointer whitespace-nowrap ${
                  activeTab === 'loan'
                    ? 'text-[#1C1C1E] border-b-2 border-[#5E2BFF]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Վարկ
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('deposit')}
                className={`pb-3 text-sm sm:text-base font-bold transition-all relative cursor-pointer whitespace-nowrap ${
                  activeTab === 'deposit'
                    ? 'text-[#1C1C1E] border-b-2 border-[#5E2BFF]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Ավանդ
              </button>
            </div>

            {/* ՎԱՐԿԻ ԲԱԺԻՆ */}
            {activeTab === 'loan' && (
              <form onSubmit={handleCalculate} className="space-y-4 sm:space-y-6 w-full">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                  
                  {/* 1. Վարկի գումար */}
                  <div className="bg-[#FAFAFC] border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between w-full">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Վարկի գումար</span>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value.replace(/\D/g, ''))}
                        className="w-full text-lg sm:text-xl font-bold text-[#1C1C1E] bg-transparent outline-none focus:ring-0 min-w-0"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-gray-400 ml-2 shrink-0">AMD</span>
                    </div>
                  </div>

                  {/* 2. Ժամկետ */}
                  <div className="bg-[#FAFAFC] border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between w-full">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Ժամկետ</span>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value.replace(/\D/g, ''))}
                        className="w-full text-lg sm:text-xl font-bold text-[#1C1C1E] bg-transparent outline-none focus:ring-0 min-w-0"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-gray-400 ml-2 shrink-0">ամիս</span>
                    </div>
                  </div>

                  {/* 3. Տարեկան տոկոսադրույք */}
                  <div className="bg-[#FAFAFC] border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between w-full">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Տարեկան տոկոսադրույք</span>
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value.replace(/[^0-9.]/g, ''))}
                        className="w-full text-lg sm:text-xl font-bold text-[#1C1C1E] bg-transparent outline-none focus:ring-0 min-w-0"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-gray-400 ml-2 shrink-0">%</span>
                    </div>
                  </div>

                  {/* 4. Մարման ձև */}
                  <div className="bg-[#FAFAFC] border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-center w-full">
                    <span className="text-xs text-gray-400 mb-2 sm:mb-3 font-medium">Մարման ձև</span>
                    <div className="flex space-x-4 sm:space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="repaymentMethod"
                          checked={repaymentMethod === 'annuity'}
                          onChange={() => setRepaymentMethod('annuity')}
                          className="accent-[#5E2BFF] w-4 h-4 shrink-0"
                        />
                        <span className="text-xs sm:text-sm font-medium text-[#1C1C1E]">Անուիտետ</span>
                      </label>

                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="repaymentMethod"
                          checked={repaymentMethod === 'differential'}
                          onChange={() => setRepaymentMethod('differential')}
                          className="accent-[#5E2BFF] w-4 h-4 shrink-0"
                        />
                        <span className="text-xs sm:text-sm font-medium text-[#1C1C1E]">Նվազող</span>
                      </label>
                    </div>
                  </div>

                </div>

                {/* Ներքևի մաս՝ ծանուցում և կոճակ */}
                <div className="pt-4 sm:pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                  <p className="text-[11px] sm:text-xs text-gray-400 max-w-xl text-center md:text-left">
                    Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
                  </p>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#5E2BFF] hover:bg-[#4A1EEB] text-white text-sm font-semibold py-3 px-8 sm:px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0"
                  >
                    Հաշվել
                  </button>
                </div>

              </form>
            )}

            {/* ԱՎԱՆԴԻ ԲԱԺԻՆ */}
            {activeTab === 'deposit' && (
              <div className="py-12 text-center text-gray-500 text-sm font-medium">
                Ավանդների հաշվիչի պարունակությունը...
              </div>
            )}

          </div>

        </div>
      </section>
    </>
  );
}