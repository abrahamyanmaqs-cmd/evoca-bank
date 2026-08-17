import React from 'react';

export default function DibraryBox() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 font-sans">
      <div className="max-w-[1300px] mx-auto">
        
        {/* ՎԵՐԻՆ ՀԱՏՎԱԾ՝ Ձախում տեքստ, աջում նկար */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          
          {/* Ձախ մաս՝ Վերնագիր և առաջին կարճ տեքստ */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] leading-tight">
              Dibrary - Digital Library
            </h2>
            <p className="text-[#555555] text-[16px] md:text-[18px] leading-relaxed">
              Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում՝ Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից, կգործի նաև Dibrary – digital library:
            </p>
          </div>

          {/* Աջ մաս՝ Նկար */}
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

        {/* ՆԵՐՔԵՎԻ ՀԱՏՎԱԾ՝ Մնացած տեքստերը ամբողջ լայնությամբ */}
        <div className="flex flex-col gap-6 max-w-[1200px]">
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

      </div>
    </section>
  );
}