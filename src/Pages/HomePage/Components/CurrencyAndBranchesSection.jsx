import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function CurrencyAndBranchesSection() {
  const [activeTab, setActiveTab] = useState('cash');
  const [ratesData, setRatesData] = useState({
    cash: [],
    cashless: [],
    gold: [],
    ruble: []
  });
  const [loading, setLoading] = useState(true);

  const initialRates = {
    cash: [
      { currency: 'USD', name: 'ԱՄՆ դոլար', buy: '363', sell: '368.5', flag: '🇺🇸' },
      { currency: 'EUR', name: 'Եվրո', buy: '415', sell: '426', flag: '🇪🇺' },
      { currency: 'RUB', name: 'Ռուսական ռուբլի', buy: '4.38', sell: '4.68', flag: '🇷🇺' },
    ],
    cashless: [
      { currency: 'USD', name: 'ԱՄՆ դոլար', buy: '364.5', sell: '367.5', flag: '🇺🇸' },
      { currency: 'EUR', name: 'Եվրո', buy: '417', sell: '424', flag: '🇪🇺' },
      { currency: 'RUB', name: 'Ռուսական ռուբլի', buy: '4.42', sell: '4.62', flag: '🇷🇺' },
    ],
    gold: [
      { currency: 'XAU', name: 'Ոսկու ստանդարտ (1գ)', buy: '31,200', sell: '33,500', flag: '🪙' },
    ],
    ruble: [
      { currency: 'RUB', name: 'Ռուբլու կանխիկ մուտք', buy: '4.35', sell: '4.70', flag: '🇷🇺' },
    ]
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const colRef = collection(db, "currencyRates");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե դատարկ է, պահպանում ենք սկզբնական օբյեկտը որպես առանձին փաստաթուղթ կամ ըստ տիպերի
          await addDoc(colRef, initialRates);
          setRatesData(initialRates);
        } else {
          // Վերցնում ենք առաջին իսկ փաստաթուղթը, որտեղ պահված են տվյալները
          setRatesData(snapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) return <div className="text-center py-20">Բեռնվում է փոխարժեքները...</div>;

  const currentTabRates = ratesData[activeTab] || [];

  return (
    <section className="w-full bg-white py-8 md:py-20 px-2 sm:px-4 md:px-16 font-montserrat select-none overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto">
        
        <div className="max-w-4xl mb-6 md:mb-12">
          <p className="text-[11px] sm:text-xs md:text-base text-[#1C1C1E] font-medium leading-relaxed">
            20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* ՁԱԽ ՄԱՍ՝ Փոխարժեքներ և Հաշվիչ */}
          <div className="lg:col-span-8 bg-white rounded-[20px] md:rounded-[32px] border border-gray-100 shadow-sm p-3 sm:p-6 md:p-8 w-full overflow-hidden">
            
            {/* Տաբեր */}
            <div className="flex items-center gap-3 sm:gap-6 border-b border-gray-100 pb-3 mb-4 md:mb-8 overflow-x-auto scrollbar-none">
              {['cash', 'cashless', 'gold', 'ruble'].map((tabKey) => {
                const labels = { cash: 'Կանխիկ', cashless: 'Անկանխիկ', gold: 'Ոսկու փոխարժեք', ruble: 'Ռուբլու կանխիկ մուտք' };
                return (
                  <button 
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`text-[11px] sm:text-xs md:text-base font-bold pb-2 cursor-pointer transition-colors relative whitespace-nowrap ${activeTab === tabKey ? 'text-[#1C1C1E] border-b-2 border-[#5E1EEB]' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {labels[tabKey]}
                  </button>
                );
              })}
            </div>

            {/* Բովանդակություն */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-7 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[240px]">
                  <thead>
                    <tr className="text-[10px] sm:text-xs font-semibold text-gray-400 border-b border-gray-100">
                      <th className="pb-2">Արժույթ</th>
                      <th className="pb-2 text-right">Առք</th>
                      <th className="pb-2 text-right">Վաճառք</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {currentTabRates.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-2.5 sm:py-3 md:py-4 flex items-center gap-2">
                          <span className="text-lg sm:text-xl md:text-2xl">{item.flag}</span>
                          <div>
                            <div className="font-bold text-[#1C1C1E] text-[11px] sm:text-xs md:text-sm">{item.currency}</div>
                            <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 font-medium line-clamp-1">{item.name}</div>
                          </div>
                        </td>
                        <td className="py-2.5 sm:py-3 md:py-4 text-right font-bold text-[#1C1C1E] text-[11px] sm:text-xs md:text-sm">
                          {item.buy}
                        </td>
                        <td className="py-2.5 sm:py-3 md:py-4 text-right font-bold text-[#1C1C1E] text-[11px] sm:text-xs md:text-sm">
                          {item.sell}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100 text-[10px] sm:text-[11px] md:text-xs font-medium text-gray-400">
                  <span>Թարմացվել է՝ 31.07.26</span>
                  <a href="#all-currencies" className="text-[#5E1EEB] font-bold hover:underline">
                    Այլ արտարժույթներ
                  </a>
                </div>
              </div>

              <div className="hidden md:block md:col-span-1 h-full border-r border-gray-100 mx-auto"></div>

              {/* Հաշվիչ */}
              <div className="md:col-span-4 flex flex-col gap-3 bg-[#FAFAFC] p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 w-full">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-gray-400">Ունեմ</span>
                  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg sm:rounded-xl px-2.5 py-2 shadow-xs">
                    <input 
                      type="text" 
                      defaultValue="1000" 
                      className="w-full bg-transparent font-bold text-[#1C1C1E] text-xs md:text-sm outline-none"
                    />
                    <span className="font-bold text-[10px] sm:text-[11px] text-[#5E1EEB] flex items-center gap-1 cursor-pointer">
                      AMD <span className="text-[8px]">▼</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-gray-400">Կստանամ</span>
                  <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg sm:rounded-xl px-2.5 py-2 shadow-xs">
                    <input 
                      type="text" 
                      defaultValue="2.75" 
                      className="w-full bg-transparent font-bold text-[#1C1C1E] text-xs md:text-sm outline-none"
                    />
                    <span className="font-bold text-[10px] sm:text-[11px] text-[#5E1EEB] flex items-center gap-1 cursor-pointer">
                      USD <span className="text-[8px]">▼</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ԱՋ ՄԱՍ՝ Հասցեներ և Քարտեզ */}
          <div className="lg:col-span-4 bg-white rounded-[20px] md:rounded-[32px] border border-gray-100 shadow-sm p-4 sm:p-6 md:p-8 flex flex-col justify-between w-full">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1C1C1E] mb-1.5 tracking-tight">
                Մեր հասցեները
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 font-medium mb-4">
                Բանկի հասցեները, աշխատաժամերը, բանկոմատները
              </p>

              <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] bg-gray-50 rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 mb-4 flex items-center justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
                  alt="Map Illustration" 
                  className="w-full h-full object-cover opacity-70 filter blur-[0.5px]"
                />
                <div className="absolute flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5E1EEB] rounded-full flex items-center justify-center shadow-xl text-white font-bold text-base md:text-lg border-2 border-white">
                    V
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/usersmap" 
              className="w-full bg-[#F2EEFF] text-[#5E1EEB] hover:bg-[#5E1EEB] hover:text-white font-bold text-xs md:text-sm py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xs cursor-pointer no-underline"
            >
              <span>Դիտել քարտեզը</span>
              <span className="text-base">›</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}