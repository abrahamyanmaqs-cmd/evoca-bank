import React from 'react';

export default function DibraryBox() {
  const logos = [
    { url: 'https://www.evoca.am/file_manager/Dibrary/1_Ebso.jpg', alt: 'EBSCO' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Openstax.jpg', alt: 'OpenStax' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/5_Logo_OAPEN.png', alt: 'OAPEN' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/N.jpg', alt: 'Noravանք' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/2_Sp[1].jpg', alt: 'Springer' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/3_POlP.jpg', alt: 'Polpred' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/431ea875.jpg', alt: 'Search' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/RS.jpg', alt: 'The Royal Society' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Library.ru.jpg', alt: 'Library.ru' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/4_71691ad9.jpg', alt: 'Open Textbook Library' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/e6797964.jpg', alt: 'DOAJ' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/NLA.jpg', alt: 'NLA' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/4_Doab.jpg', alt: 'DOAB' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/1_c55c00d4.jpg', alt: 'OER Commons' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/OpD.jpg', alt: 'OpenDOAR' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Duke.jpg', alt: 'Duke University Press' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/5_JS[1].jpg', alt: 'JSTOR' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/2_OBP.jpg', alt: 'Open Book Publishers' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Sage.jpg', alt: 'Sage Journals' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/3e144dee.jpg', alt: 'Bookboon' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/6_Quest.jpg', alt: 'Questia' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Logo_Journals4free.png', alt: 'Journals for Free' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/SD.jpg', alt: 'ScienceDirect' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/OKM.jpg', alt: 'Open Knowledge Maps' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/4_Logo_OpenKnowledgeRepository.png', alt: 'Open Knowledge Maps' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/dibrary-2.jpg', alt: 'B-OK' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/4_Logo_OpenKnowledgeRepository.png', alt: 'Open Knowledge Repository' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Search.jpg', alt: 'Search Box' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/Logo_BookBoon.png', alt: 'Bookboon Logo' },
    { url: 'https://www.evoca.am/file_manager/Dibrary/ideas.png', alt: 'IDEAS' },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto">
        
        {/* ՎԵՐԻՆ ՀԱՏՎԱԾ՝ Ձախում տեքստ, աջում նկար */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] leading-tight">
              Dibrary - Digital Library
            </h2>
            <p className="text-[#555555] text-[16px] md:text-[18px] leading-relaxed">
              Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում՝ Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից, կգործի նաև Dibrary – digital library:
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E5E2EC]">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16117479662777/780x585.jpg" 
                alt="Dibrary Digital Library" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* ՆԵՐՔԵՎԻ ՀԱՏՎԱԾ՝ Մնացած տեքստերը */}
        <div className="flex flex-col gap-6 max-w-[1200px] mb-16">
          <p className="text-[#555555] text-[16px] md:text-[18px] leading-relaxed">
            <span className="text-[#5E1EEB] font-semibold">#dibrary</span>-ում կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝ e-Duke Journals Scholarly Collection, ASTM Compass, Edward Elgar Publishing Journals, Mathematical Sciences Publishers Journals, Royal Society Journals Collection, SAGE Premier և այլն․․․
          </p>

          <p className="text-[#555555] text-[16px] md:text-[18px] leading-relaxed">
            <span className="text-[#5E1EEB] font-semibold">#dibrary</span>-ի գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվելու են՝ ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի ռեսուրսները։ Բացի էլեկտրոնային նյութերից, <span className="text-[#5E1EEB] font-semibold">#dibrary</span>-ում կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես գրականության բեսթսելլերները, որոնք կարելի է կարդալ տեղում, իսկ ցանկության դեպքում՝ նաև տանել տուն։
          </p>

          <p className="text-[#555555] text-[16px] md:text-[18px] leading-relaxed">
            <span className="text-[#5E1EEB] font-semibold">#dibrary</span>-ի բացման գործում մեզ աջակցել են՝ DLAA-ը՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library Association of Armenia), Ավետիք Իսահակյանի անվան գրադարանը և American Corner Yerevan-ը։ Նրանց աջակցության շնորհիվ՝ <span className="text-[#5E1EEB] font-semibold">#dibrary</span>-ում կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի։
          </p>
        </div>

        {/* ԳՈՐԾԸՆԿԵՐՆԵՐԻ ԵՎ ՀԱՐԹԱԿՆԵՐԻ ԼՈԳՈՏԻՊԵՐԻ ՑԱՆՑ (GRID) */}
        <div className="mt-12 pt-12 border-t border-[#E5E2EC]">
          <h3 className="text-[24px] md:text-[28px] font-bold text-[#222222] mb-8 text-center">
            Հասանելի հարթակներ և գործընկերներ
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="bg-white border border-[#E5E2EC] rounded-2xl p-4 flex items-center justify-center h-28 shadow-sm hover:shadow-md transition-all group"
              >
                <img 
                  src={logo.url} 
                  alt={logo.alt} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}