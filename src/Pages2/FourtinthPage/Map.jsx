import React from 'react';

export default function Map() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Էջի Վերնագիր */}
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] mb-12">
          Կայքի քարտեզ
        </h1>

        {/* Քարտեզի բովանդակություն (Grid համակարգով) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* --- ՁԱԽ ՍՅՈՒՆ --- */}
          <div className="flex flex-col gap-10">
            
            {/* Անհատ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Անհատ
              </h2>
              <div className="flex flex-col gap-6 mt-2">
                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Վարկեր</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Վարկեր</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Վարկային պատմություն և սքոր</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կարևոր տեղեկատվություն</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Քարտեր</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Քարտեր</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Քարտերի տրամադրում և սպասարկում</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Սոցիալական ապահովության վճարային քարտեր</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Evoca Benefits</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Ավանդներ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ավանդներ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կարևոր տեղեկատվություն</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Դասական ավանդ</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Հաշիվներ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հաշիվների բացում և սպասարկում</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Առարկայազուրկ մետաղական հաշիվներ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Պահատուփեր</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Փոխանցումներ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Դրամական փոխանցումներ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Վճարային համակարգեր</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Արժեթղթեր</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ներդրումային ծառայություններ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Պարտատոմսեր</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">ՀԿԴ ծառայություններ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ռեպո/Հակադարձ ռեպո գործարքներ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">EvocaINVEST</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Առևտրի ֆինանսավորում</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Երաշխիք</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ֆակտորինգային ֆինանսավորում</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ակրեդիտիվ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ինկասո</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Դիջիթալ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">V-POS Տերմինալ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">POS Տերմինալ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Սակագներ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Տերմինալի տեղադրման հայտ</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Evoca Mobile POS՝ mPOS</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Այլ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Պահատուփեր</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Փոխանցումներ</a></li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Ակնթարթային վճարումներ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Ակնթարթային վճարումներ
              </h2>
            </div>

            {/* Մեր մասին (Ձախ կողմի վերջին բաժին) */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Մեր մասին
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Evoca-ի մասին</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ընդհանուր տեղեկություններ</a></li>
              </ul>
            </div>

            {/* Առանձին հղումներ */}
            <div className="flex flex-col gap-3 text-[18px] font-bold text-[#222]">
              <a href="#" className="hover:text-[#7C3AED] transition-colors">EvocaSALARY</a>
              <a href="#" className="hover:text-[#7C3AED] transition-colors">EvocaTOUCH</a>
              <a href="#" className="hover:text-[#7C3AED] transition-colors">Evoca codes</a>
            </div>

            {/* Բիզնես */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Բիզնես
              </h2>
              <div className="flex flex-col gap-6 mt-2">
                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Վարկեր</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Բիզնես վարկեր</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Լիզինգ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Evoca Leasing</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հատուկ առաջարկ</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[18px] font-bold text-[#222] mb-2">Հաշիվներ</h3>
                  <ul className="flex flex-col gap-2 text-[#555] text-[16px]">
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հաշիվների բացում և սպասարկում</a></li>
                    <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Առարկայազուրկ մետաղական հաշիվներ</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* --- ԱՋ ՍՅՈՒՆ --- */}
          <div className="flex flex-col gap-10">
            
            {/* Ընկերություն / Բանկի մասին ընդհանուր */}
            <div>
              <ul className="flex flex-col gap-3 text-[#555] text-[16px]">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կառուցվածք</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Բաժնետերեր</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ղեկավարություն</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Գործընկերներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Մրցանակներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կարծիքներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">CSR</a></li>
              </ul>
            </div>

            {/* Սակագներ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Սակագներ
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Վարկեր ֆիզիկական անձանց</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Վարկեր իրավաբանական անձանց</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Միջնորդավճարների սակագները</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ավանդների սակագներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Արխիվ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Սակագներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Սակագների արխիվ</a></li>
              </ul>
            </div>

            {/* Հաշվետվություններ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Հաշվետվություններ
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Աուդիտորական եզրակացություն</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ֆինանսական հաշվետվություններ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ներդրողների համար</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կիսամյակային հաշվետվություն</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Տարեկան հաշվետվություն</a></li>
              </ul>
            </div>

            {/* Հայտարարություններ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Հայտարարություններ
              </h2>
            </div>

            {/* Նորություններ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Նորություններ
              </h2>
            </div>

            {/* Բլոգ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Բլոգ
              </h2>
            </div>

            {/* Կարիերա */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Կարիերա
              </h2>
            </div>

            {/* Evoca Լայֆ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Evoca Լայֆ
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Մշակույթ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Առավելություններ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հաճախ տրվող հարցեր</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ինչպես ընդունվել աշխատանքի Evocabank-ում</a></li>
              </ul>
            </div>

            {/* Աշխատանք և պրակտիկա */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Աշխատանք և պրակտիկա
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Աշխատանք Evoca-ում</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ուսումնական պրակտիկա</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">EvocaBRIDGE</a></li>
              </ul>
            </div>

            {/* Բանկի մասին (Աջ կողմ) */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Բանկի մասին
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Մեր մասին</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ղեկավարություն</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Բաժնետերեր</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Իրավական ակտեր</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Օտարվող գույք</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կառուցապատողներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Գործընկեր ավտոսրահներ</a></li>
              </ul>
            </div>

            {/* Օգտակար հղումներ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Օգտակար հղումներ
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հաճախորդի ռեզիդենտության չափանիշներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կարգավորում</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Գաղտնիության քաղաքականություն</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ֆին. հաշտարար</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Ֆինանսական հանցագործությունների կանխարգելում</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հղումներ Բանկի քարտապանների համար</a></li>
              </ul>
            </div>

            {/* Այլ հղումներ */}
            <div>
              <h2 className="text-[24px] font-extrabold text-[#222222] pb-2 border-b-2 border-[#7C3AED] inline-block mb-4">
                Այլ հղումներ
              </h2>
              <ul className="flex flex-col gap-2 text-[#555] text-[16px] mt-2">
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">EvocaONLINE</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Պահատուփեր</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հաճախ տրվող հարցեր</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հայտարարություններ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Dibrary</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Բուկլետներ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Հետադարձ կապ</a></li>
                <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Կայքի քարտեզ</a></li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}