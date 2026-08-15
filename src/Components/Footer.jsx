import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <footer className="w-full bg-white text-[#1C1C1E] pt-16 pb-10 px-4 md:px-16 font-montserrat border-t border-gray-100 select-none">
        <div className="max-w-[1440px] w-full mx-auto">
          
          {/* Հիմնական բաժին */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-100">
            
            {/* Սյունակ 1: Լոգո, հասցե, իրավական տեղեկություն */}
            <div className="lg:col-span-1 flex flex-col items-start gap-4">
              {/* Լոգո (Հղում դեպի Home) */}
              <Link to="/" className="flex items-center cursor-pointer mb-2">
                <img 
                  src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
                  alt="Evocabank Logo" 
                  className="h-20 object-contain"
                />
              </Link>

              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                ք. Երևան, 0010, Հանրապետության 44/2
              </p>

              <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-2">
                <strong className="text-[#1C1C1E]">Evocabank</strong>-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
              </p>

              <p className="text-[10px] text-gray-400 font-semibold tracking-wider mt-4">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>

            {/* Սյունակ 2: Բանկի մասին */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[#1C1C1E] mb-2">Բանկի մասին</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/about" className="hover:text-[#5E1EEB] transition-colors">Մեր մասին</Link></li>
                <li><Link to="/management" className="hover:text-[#5E1EEB] transition-colors">Ղեկավարություն</Link></li>
                <li><Link to="/shareholders" className="hover:text-[#5E1EEB] transition-colors">Բաժնետերեր</Link></li>
                <li><Link to="/reports" className="hover:text-[#5E1EEB] transition-colors">Հաշվետվություններ</Link></li>
                <li><Link to="/laws" className="hover:text-[#5E1EEB] transition-colors">Իրավական ակտեր</Link></li>
                <li><Link to="/tariffs" className="hover:text-[#5E1EEB] transition-colors">Սակագներ</Link></li>
                <li><Link to="/property" className="hover:text-[#5E1EEB] transition-colors">Օտարվող գույք</Link></li>
                <li><Link to="/builders" className="hover:text-[#5E1EEB] transition-colors">Կառուցապատողներ</Link></li>
                <li><Link to="/partners" className="hover:text-[#5E1EEB] transition-colors">Գործընկեր ավտոսրահներ</Link></li>
                <li><Link to="/archive" className="hover:text-[#5E1EEB] transition-colors">Սակագների արխիվ</Link></li>
              </ul>
            </div>

            {/* Սյունակ 3: Օգտակար հղումներ */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[#1C1C1E] mb-2">Օգտակար հղումներ</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/rights" className="hover:text-[#5E1EEB] transition-colors">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</Link></li>
                <li><Link to="/criteria" className="hover:text-[#5E1EEB] transition-colors">Հաճախորդի ռեզիդենտության չափանիշներ</Link></li>
                <li><Link to="/regulation" className="hover:text-[#5E1EEB] transition-colors">Կարգավորում</Link></li>
                <li><Link to="/privacy" className="hover:text-[#5E1EEB] transition-colors">Գաղտնիության քաղաքականություն</Link></li>
                <li><Link to="/ombudsman" className="hover:text-[#5E1EEB] transition-colors">Ֆին. հաշտարար</Link></li>
                <li><Link to="/aml" className="hover:text-[#5E1EEB] transition-colors">Ֆինանսական հանցագործությունների կանխարգելում</Link></li>
                <li><Link to="/cards-rules" className="hover:text-[#5E1EEB] transition-colors">Հղումներ Բանկի քարտապանների համար</Link></li>
              </ul>
            </div>

            {/* Սյունակ 4: Այլ հղումներ */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-[#1C1C1E] mb-2">Այլ հղումներ</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-600 font-medium">
                <li><Link to="/online" className="hover:text-[#5E1EEB] transition-colors">EvocaONLINE</Link></li>
                <li><Link to="/vaults" className="hover:text-[#5E1EEB] transition-colors">Պահատուփեր</Link></li>
                <li><Link to="/faq" className="hover:text-[#5E1EEB] transition-colors">Հաճախ տրվող հարցեր</Link></li>
                <li><Link to="/announcements" className="hover:text-[#5E1EEB] transition-colors">Հայտարարություններ</Link></li>
                <li><Link to="/dibrary" className="hover:text-[#5E1EEB] transition-colors">Dibrary</Link></li>
                <li><Link to="/booklets" className="hover:text-[#5E1EEB] transition-colors">Բուկլետներ</Link></li>
                <li><Link to="/feedback" className="hover:text-[#5E1EEB] transition-colors">Հետադարձ կապ</Link></li>
                <li><Link to="/map" className="hover:text-[#5E1EEB] transition-colors">Կայքի քարտեզ</Link></li>
              </ul>
            </div>

            {/* Սյունակ 5: Սոց. ցանցեր, Հավելվածներ և Հեռախոսահամարներ */}
            <div className="flex flex-col gap-5">
              
              {/* Սոցիալական ցանցեր */}
              <div className="flex items-center gap-4 text-gray-600">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5E1EEB] text-lg font-bold">f</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5E1EEB] text-sm font-bold">ig</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5E1EEB] text-sm font-bold">p</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5E1EEB] text-sm font-bold">yt</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#5E1EEB] text-sm font-bold">in</a>
              </div>

              {/* Հավելվածների ներբեռնում */}
              <div className="flex flex-col gap-2">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Download_on_the_App_Store_Badge_US-UK_RGB_blk.svg" alt="App Store" className="w-32 h-auto" />
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32 h-auto" />
                </a>
              </div>

              {/* Հղումներ և Համարներ */}
              <div className="flex flex-col gap-1 text-xs font-bold">
                <Link to="/branches" className="text-[#5E1EEB] hover:underline">Բանկի հասցեները և աշխատաժամերը</Link>
                <Link to="/contact" className="text-[#5E1EEB] hover:underline">Կապ մեզ հետ</Link>
                <p className="text-xl font-extrabold text-[#5E1EEB] mt-1">+374 10 605555</p>
                <p className="text-lg font-extrabold text-[#5E1EEB]">8444</p>
              </div>

            </div>

          </div>

          {/* Ստորին իրավական ծանուցում և վճարային համակարգերի լոգոներ */}
          <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-gray-500 font-medium leading-relaxed max-w-4xl text-left">
              Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստուգման և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հետևանքների համար:
            </p>

            {/* Վճարային և գործընկերային համակարգերի նշաններ */}
            <div className="flex items-center gap-4 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-[10px] font-bold border px-2 py-1 rounded">AB</span>
              <span className="text-[10px] font-bold border px-2 py-1 rounded">AF</span>
              <span className="text-[10px] font-bold border px-2 py-1 rounded">FININFO</span>
              <span className="text-[10px] font-bold border px-2 py-1 rounded">abcfinance</span>
              <span className="text-[10px] font-bold border px-2 py-1 rounded">arca</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}