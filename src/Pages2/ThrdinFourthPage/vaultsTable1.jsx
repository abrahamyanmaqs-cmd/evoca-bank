import React from 'react';

export default function VaultsTable1() {
  return (
    <section className="py-12 px-4 md:px-0 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Աղյուսակի վերնագիր */}
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#222222] mb-8">
          Հրդեհվող անհատական պահարանների վարձակալման սակագներ
        </h2>

        {/* Աղյուսակի կոնտեյներ (responsive սխոլերով) */}
        <div className="overflow-x-auto border border-[#E5E2EC] rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            
            {/* Վերնագրերի գլխամաս */}
            <thead>
              <tr className="border-b border-[#E5E2EC] text-[#222222] text-[16px] md:text-[18px]">
                <th className="p-4 md:p-5 font-bold w-1/4 border-r border-[#E5E2EC] align-middle">
                  Ժամկետ
                </th>
                <th className="p-4 md:p-5 font-bold text-center" colSpan="3">
                  Պահարանի չափերը
                </th>
              </tr>
              <tr className="border-b border-[#E5E2EC] text-[#222222] text-[15px] md:text-[17px] bg-[#F8F7FA]">
                <th className="border-r border-[#E5E2EC]"></th>
                <th className="p-3 md:p-4 font-semibold text-center w-1/4 border-r border-[#E5E2EC]">փոքր</th>
                <th className="p-3 md:p-4 font-semibold text-center w-1/4 border-r border-[#E5E2EC]">միջին</th>
                <th className="p-3 md:p-4 font-semibold text-center w-1/4">մեծ</th>
              </tr>
            </thead>

            {/* Մարմնի տվյալներ */}
            <tbody className="text-[15px] md:text-[17px] text-[#222222]">
              
              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">14 օր</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">5,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">7,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center">10,000 ՀՀ դրամ</td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">1 ամիս</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">7,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">10,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center">12,000 ՀՀ դրամ</td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">3 ամիս</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">10,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">15,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center">20,000 ՀՀ դրամ</td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">6 ամիս</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">15,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">20,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center">25,000 ՀՀ դրամ</td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">12 ամիս</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">30,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">40,000 ՀՀ դրամ</td>
                <td className="p-4 md:p-5 text-center">50,000 ՀՀ դրամ</td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">Երկարաժամկետ</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">պայմանագրային</td>
                <td className="p-4 md:p-5 text-center border-r border-[#E5E2EC]">պայմանագրային</td>
                <td className="p-4 md:p-5 text-center">պայմանագրային</td>
              </tr>

              {/* Լրացուցիչ պայմանների տողեր */}
              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">
                  Պահարանի բանալու կորուստ կամ վնասում
                </td>
                <td className="p-4 md:p-5 font-semibold text-[#5E1EEB]" colSpan="3">
                  20,000 ՀՀ դրամ
                </td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">
                  Պահարանի վնասում
                </td>
                <td className="p-4 md:p-5 font-semibold text-[#5E1EEB]" colSpan="3">
                  Հասցված վնասի եռապատիկը
                </td>
              </tr>

              <tr className="border-b border-[#E5E2EC] hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">
                  Պայմանագրի ժամկետի ավարտին բանալու չհանձնում
                </td>
                <td className="p-4 md:p-5 font-semibold text-[#5E1EEB]" colSpan="3">
                  Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ
                </td>
              </tr>

              <tr className="hover:bg-[#F9F8FC] transition-colors">
                <td className="p-4 md:p-5 font-medium border-r border-[#E5E2EC]">
                  Իրերը Բանկի այլ տարածքում պահպանելու վճար
                </td>
                <td className="p-4 md:p-5 font-semibold text-[#5E1EEB]" colSpan="3">
                  Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}