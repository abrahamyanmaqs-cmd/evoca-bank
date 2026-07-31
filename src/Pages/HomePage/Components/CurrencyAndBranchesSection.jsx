import React, { useState } from 'react';

export default function CurrencyAndBranchesSection() {
  const [activeTab, setActiveTab] = useState('cash');

  // Փոխարժեքների տվյալներ ըստ տաբերի
  const ratesData = {
    cash: [
      { currency: 'USD', name: 'ԱՄՆ դոլար', buy: '363', sell: '368.5', buyTrend: 'down', sellTrend: 'up', flag: '🇺🇸' },
      { currency: 'EUR', name: 'Եվրո', buy: '415', sell: '426', buyTrend: 'down', sellTrend: 'up', flag: '🇪🇺' },
      { currency: 'RUB', name: 'Ռուսական ռուբլի', buy: '4.38', sell: '4.68', buyTrend: 'down', sellTrend: 'up', flag: '🇷🇺' },
    ],
    cashless: [
      { currency: 'USD', name: 'ԱՄՆ դոլար', buy: '364.5', sell: '367.5', buyTrend: 'up', sellTrend: 'up', flag: '🇺🇸' },
      { currency: 'EUR', name: 'Եվրո', buy: '417', sell: '424', buyTrend: 'up', sellTrend: 'down', flag: '🇪🇺' },
      { currency: 'RUB', name: 'Ռուսական ռուբլի', buy: '4.42', sell: '4.62', buyTrend: 'up', sellTrend: 'up', flag: '🇷🇺' },
    ],
    gold: [
      { currency: 'XAU', name: 'Ոսկու ստանդարտ (1գ)', buy: '31,200', sell: '33,500', buyTrend: 'up', sellTrend: 'up', flag: '🪙' },
    ],
    ruble: [
      { currency: 'RUB', name: 'Ռուբլու կանխիկ մուտք', buy: '4.35', sell: '4.70', buyTrend: 'down', sellTrend: 'up', flag: '🇷🇺' },
    ]
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <section className="w-full bg-white py-20 px-4 md:px-16 font-montserrat select-none">
        <div className="max-w-[1440px] w-full mx-auto">
          
          {/* Վերևի իրավական/տեղեկատվական տեքստ */}
          <div className="max-w-4xl mb-12">
            <p className="text-sm md:text-base text-[#1C1C1E] font-medium leading-relaxed">
              20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
            </p>
          </div>

          {/* Հիմնական բաժին՝ Ձախում փոխարժեքներ/հաշվիչ, Աջում՝ Հասցեներ/Քարտեզ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* ՁԱԽ ՄԱՍ՝ Փոխարժեքներ և Հաշվիչ (Span 8) */}
            <div className="lg:col-span-8 bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 md:p-8">
              
              {/* Տաբեր (Tabs) */}
              <div className="flex items-center gap-6 border-b border-gray-100 pb-4 mb-8 overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('cash')}
                  className={`text-sm md:text-base font-bold pb-2 cursor-pointer transition-colors relative whitespace-nowrap ${activeTab === 'cash' ? 'text-[#1C1C1E] border-b-2 border-[#5E1EEB]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Կանխիկ
                </button>
                <button 
                  onClick={() => setActiveTab('cashless')}
                  className={`text-sm md:text-base font-bold pb-2 cursor-pointer transition-colors relative whitespace-nowrap ${activeTab === 'cashless' ? 'text-[#1C1C1E] border-b-2 border-[#5E1EEB]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Անկանխիկ
                </button>
                <button 
                  onClick={() => setActiveTab('gold')}
                  className={`text-sm md:text-base font-bold pb-2 cursor-pointer transition-colors relative whitespace-nowrap ${activeTab === 'gold' ? 'text-[#1C1C1E] border-b-2 border-[#5E1EEB]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Ոսկու փոխարժեք
                </button>
                <button 
                  onClick={() => setActiveTab('ruble')}
                  className={`text-sm md:text-base font-bold pb-2 cursor-pointer transition-colors relative whitespace-nowrap ${activeTab === 'ruble' ? 'text-[#1C1C1E] border-b-2 border-[#5E1EEB]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Ռուբլու կանխիկ մուտք
                </button>
              </div>

              {/* Ներքին բովանդակություն՝ Աղյուսակ + Հաշվիչ */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Աղյուսակի մաս (md:col-span-7) */}
                <div className="md:col-span-7 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-xs font-semibold text-gray-400 border-b border-gray-100">
                        <th className="pb-3">Արժույթ</th>
                        <th className="pb-3 text-right">Առք</th>
                        <th className="pb-3 text-right">Վաճառք</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {ratesData[activeTab].map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 flex items-center gap-3">
                            <span className="text-2xl">{item.flag}</span>
                            <div>
                              <div className="font-bold text-[#1C1C1E] text-sm">{item.currency}</div>
                              <div className="text-xs text-gray-400 font-medium">{item.name}</div>
                            </div>
                          </td>
                          <td className="py-4 text-right font-bold text-[#1C1C1E] text-sm">
                            <div className="flex items-center justify-end gap-1.5">
                              <span className="text-red-500 text-xs">▼</span>
                              <span>{item.buy}</span>
                            </div>
                          </td>
                          <td className="py-4 text-right font-bold text-[#1C1C1E] text-sm">
                            <div className="flex items-center justify-end gap-1.5">
                              <span className="text-green-500 text-xs">▲</span>
                              <span>{item.sell}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Թարմացման ամսաթիվ և հղում */}
                  <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-100 text-xs font-medium text-gray-400">
                    <span>Թարմացվել է՝ 31.07.26</span>
                    <a href="#all-currencies" className="text-[#5E1EEB] font-bold hover:underline">
                      Այլ արտարժույթներ
                    </a>
                  </div>
                </div>

                {/* Ուղղահայաց բաժանարար գիծ */}
                <div className="hidden md:block md:col-span-1 h-full border-r border-gray-100 mx-auto"></div>

                {/* Հաշվիչի մաս (md:col-span-4) */}
                <div className="md:col-span-4 flex flex-col gap-4 bg-[#FAFAFC] p-5 rounded-2xl border border-gray-100">
                  
                  {/* Ունեմ դաշտ */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-gray-400">Ունեմ</span>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-xs">
                      <input 
                        type="text" 
                        defaultValue="1000" 
                        className="w-full bg-transparent font-bold text-[#1C1C1E] text-sm outline-none"
                      />
                      <span className="font-bold text-xs text-[#5E1EEB] flex items-center gap-1 cursor-pointer">
                        AMD <span className="text-[10px]">▼</span>
                      </span>
                    </div>
                  </div>

                  {/* Կստանամ դաշտ */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-gray-400">Կստանամ</span>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-xs">
                      <input 
                        type="text" 
                        defaultValue="2.75" 
                        className="w-full bg-transparent font-bold text-[#1C1C1E] text-sm outline-none"
                      />
                      <span className="font-bold text-xs text-[#5E1EEB] flex items-center gap-1 cursor-pointer">
                        USD <span className="text-[10px]">▼</span>
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* ԱՋ ՄԱՍ՝ Մեր հասցեները և Քարտեզ (Span 4) */}
            <div className="lg:col-span-4 bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1C1C1E] mb-2 tracking-tight">
                  Մեր հասցեները
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-medium mb-6">
                  Բանկի հասցեները, աշխատաժամերը, բանկոմատները
                </p>

                {/* Քարտեզի նկար / Իլյուստրացիա */}
                <div className="relative w-full h-[180px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-6 flex items-center justify-center">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                    alt="Map Illustration" 
                    className="w-full h-full object-cover opacity-70 filter blur-[0.5px]"
                  />
                  {/* Մանուշակագույն Pin նշան */}
                  <div className="absolute flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#5E1EEB] rounded-full flex items-center justify-center shadow-xl text-white font-bold text-lg border-2 border-white animate-bounce">
                      V
                    </div>
                  </div>
                </div>
              </div>

              {/* Կոճակ */}
              <button className="w-full bg-[#F2EEFF] text-[#5E1EEB] hover:bg-[#5E1EEB] hover:text-white font-bold text-sm py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                <span>Դիտել քարտեզը</span>
                <span className="text-lg">›</span>
              </button>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}