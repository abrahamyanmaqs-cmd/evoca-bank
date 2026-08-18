 
 import React, { useState } from 'react';

const EvocaOnline = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F4F5F7] flex flex-col items-center justify-center p-4">
      <div className="max-w-[520px] w-full flex flex-col gap-4">
        
        {/* Հիմնական սպիտակ արկղ */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col">
          
          <h1 className="text-3xl font-bold text-[#1C1C1E] mb-8">
            Մուտք համակարգ
          </h1>

          <div className="flex flex-col gap-5">
            
            {/* Մուտքանուն */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Մուտքանուն" 
                className="w-full px-4 py-3.5 rounded-xl border-2 border-[#5E1EEB] focus:outline-none text-[#1C1C1E] placeholder-gray-400 text-base bg-white"
              />
            </div>

            {/* Գաղտնաբառ */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Գաղտնաբառ" 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#5E1EEB] focus:outline-none text-[#1C1C1E] placeholder-gray-400 text-base bg-white pr-12"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showPassword ? (
                  /* Աչքը բաց */
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                ) : (
                  /* Աչքը փակ */
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.07 10.07 0 014.136-5.42m3.744-1.21A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-3.327.994L14.5 17.5M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                )}
              </button>
            </div>

            {/* Մուտք կոճակ */}
            <button className="w-full bg-[#5E1EEB] hover:bg-[#5217ce] text-white font-semibold py-4 rounded-xl transition-all duration-300 text-base shadow-md cursor-pointer mt-2">
              Մուտք
            </button>

            {/* Վերականգնման հղում */}
            <div className="text-center mt-3">
              <a href="#" className="text-[#1C1C1E] hover:text-[#5E1EEB] text-sm transition-colors">
                Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը
              </a>
            </div>

          </div>
        </div>

        {/* Ներքևի QR կոդով բլոկ */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
          <svg className="w-6 h-6 text-[#5E1EEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
          <span className="font-semibold text-[#1C1C1E] text-base">Մուտք QR կոդով</span>
        </div>

      </div>
    </div>
  );
};

export default EvocaOnline;