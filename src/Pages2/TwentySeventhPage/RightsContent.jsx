import React from 'react';

export default function RightsContent() {
  return (
    <div className="ml-[120px] select-none text-[#333333]">
      
      {/* Գլխավոր վերնագիր */}
      <h1 className="text-[24px] md:text-[30px] font-bold mb-8 tracking-wide">
        Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)
      </h1>

      {/* Տեքստային բովանդակություն */}
      <div className="space-y-6 text-base md:text-[17px] leading-relaxed text-[#333333]">
        
        <p className="font-bold">
          Հարգելի Հաճախորդներ՝
        </p>

        <p>
          Մեր կողմից հաճախորդների բողոք-պահանջների ընդունման, քննարկման և որոշումների կայացման 
          գործընթացը կարգավորվում է «Էվոկաբանկ» ԲԲԸ Բողոքների քննության կանոններով։
        </p>

        <p>
          Ձեր իրավունքները պաշտպանվում են դատական կարգով կամ ֆինանսական համակարգի հաշտարարի միջոցով։ 
          Հաշտարարին ենթակա են մինչև 10 մլն դրամ կամ համարժեք արտարժույթ գույքային պահանջները։
        </p>

        <p>
          Արբիտրաժային համաձայնության դեպքում վեճերը ենթակա են լուծման արբիտրաժային դատարանում՝ 
          ՀՀ օրենքին համապատասխան։
        </p>

        <p>
          Մանրամասներին կարող եք ծանոթանալ{' '}
          <a 
            href="https://www.fsm.am" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#5E1EEB] font-medium hover:underline"
          >
            www.fsm.am
          </a>{' '}
          կայքում կամ զանգահարելով (010) 60-55-55 հեռախոսահամարով։
        </p>

      </div>

      {/* Նոր ավելացված բաժինը (Ուշադրություն) */}
      <div className="mt-12">
        <h2 className="text-[#5E1EEB] font-bold text-xl mb-6">
          Ուշադրություն՝
        </h2>

        <ul className="space-y-6 list-disc pl-5 text-base md:text-[17px] leading-relaxed">
          <li>
            Ցանկացած անձ իրավունք ունի ստանալ «Էվոկաբանկ» ԲԲԸ-ի վերաբերյալ «Բանկերի և բանկային 
            գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի 3-րդ մասով, 43-րդ հոդվածի 2-րդ մասով 
            սահմանված տեղեկատվության պատճենները (օրենքը կարող եք գտնել ԿԲ{' '}
            <a 
              href="https://www.cba.am" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#5E1EEB] font-medium hover:underline"
            >
              www.cba.am
            </a>{' '}
            կայքում)։ Թղթային մեկ էջը 50 դրամ է, էլեկտրոնայինը՝ անվճար։
          </li>

          <li>
            Վերոնշյալ տեղեկությունները Բանկը տրամադրում է գրավոր դիմումից հետո 3 աշխատանքային օրում։ 
            Դիմումը կարող է ներկայացվել առձեռն՝ գլխամասում կամ մասնաճյուղերում, էլ. հասցեով՝{' '}
            <a 
              href="mailto:hello@evoca.am" 
              className="text-[#5E1EEB] font-medium hover:underline"
            >
              hello@evoca.am
            </a>{' '}
            կամ փոստով։
          </li>
        </ul>
      </div>

    </div>
  );
}