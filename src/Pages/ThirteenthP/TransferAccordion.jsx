import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const TransferAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [accordionItems, setAccordionItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալները (եթե Firebase-ում ոչինչ չկա)
  const defaultItems = [
    {
      id: "1",
      title: "Փոխանցումներ դրամով",
      content: [
        "Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև։",
        "Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում։"
      ]
    },
    {
      id: "2",
      title: "Միջազգային փոխանցումներ",
      content: [
        "Մենք SWIFT համակարգի անդամ ենք և ձեր արտարժույթային միջազգային փոխանցումներն իրականացնում ենք այս համակարգով: Այն ապահովում է արագ և անվտանգ փոխանցումներ՝ միջազգային բանկային ստանդարտներին համապատասխան։",
        "Փոխանցումը կատարում ենք միայն փոխանցվող գումարի և միջնորդավճարի գումարի փաստացի առկայության դեպքում։",
        "Արտարժույթային միջազգային փոխանցում իրականացնելու համար մեզ եք ներկայացնում սահմանված ձևանմուշի վճարման հանձնարարագիր (անհրաժեշտության դեպքում մեր աշխատակիցները կօգնեն լրացնել այն)։",
        "Արտարժույթային միջազգային բանկային փոխանցումները, ըստ մեր սակագների, իրականացվում են OUR (ծախսերը՝ փոխանցողի հաշվին), Guaranteed OUR (գումարը ստացողին հասնում է ամբողջական) և BEN (ծախսերը՝ ստացողի հաշվին) տարբերակներով։",
        "Արտարժույթային միջազգային փոխանցումները, որպես կանոն, տևում են 1-3 բանկային օր: Փոխանցումների կատարման տևողությունը կախված է այն բանկերի թվից, որոնց միջոցով կատարվում է փոխանցումը։"
      ]
    },
    {
      id: "3",
      title: "Վճարային համակարգեր",
      content: [
        "Դրամական փոխանցումների վճարային համակարգերը հնարավորություն են տալիս շատ արագ՝ առանց բանկային հաշվի բացման, պարզեցված ընթացակարգով, ոչ առևտրային բնույթի փոխանցումներ կատարել ֆիզիկական անձանց միջև՝ դեպի աշխարհի տարբեր երկրներ։",
        "Մեր կողմից սպասարկվող վճարային համակարգերին կարող եք ծանոթանալ այստեղ։"
      ]
    },
    {
      id: "4",
      title: "Փոխանցման պայմանների փոփոխություն կամ չեղյալացում",
      content: [
        "Փոխանցումների վավերապայմանների փոփոխումը կամ փոխանցման չեղյալացումը կատարում ենք փոխանցումը նախաձեռնող անձի գրավոր դիմումի հիման վրա՝ նրանից գանձելով միջնորդավճարներ (սակագներին կարող եք ծանոթանալ Բանկային փոխանցումներ բաժնում)։",
        "Փոխանցման մեջ առկա սխալների ուղղումը, ինչպես նաև փոխանցման չեղյալացումն իրականացնում ենք փոխանցող և ստացող բանկերի հնարավորության սահմաններում և ժամկետներում, սովորաբար դա կարող է տևել 2-5 բանկային օր։",
        "Եթե փոխանցումը նախաձեռնող անձը ներկայացրել է փոխանցման չեղյալացման հայտ, սակայն ըստ հարցման՝ միջոցներն արդեն հաշվեգրված են, ապա մենք չենք կարող պատասխանատվություն կրել գումարների վերադարձի համար: Փոխանցված միջոցները ստացողին չհասնելու դեպքում՝",
        "• Փոխանցված միջոցները թղթակից բանկի կողմից վերադարձվում են փոխանցում կատարած բանկին: Դրամական միջոցների վերադարձի ժամկետները կախված են թղթակից բանկերում գործող ընթացակարգային ժամկետներից և այն բանկերի թվից, որոնց միջոցով կատարվել է փոխանցումը։",
        "• Վերադարձված դրամական միջոցները հաշվեգրում ենք փոխանցում իրականացրած անձի բանկային հաշվին, իսկ առանց բանկային հաշվի բացման կատարված փոխանցման դեպքում՝ փոխանցման հանձնարարագրում նշված անձնագրային հիմքերով վերադարձնում ենք փոխանցում իրականացրած անձին։"
      ]
    }
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const colRef = collection(db, "transfer_accordion");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե դատարկ է, գրում ենք Firebase-ի մեջ
          for (const item of defaultItems) {
            await setDoc(doc(colRef, item.id), item);
          }
          setAccordionItems(defaultItems);
        } else {
          setAccordionItems(snapshot.docs.map(doc => doc.data()));
        }
      } catch (error) {
        console.error("Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <div className="py-20 text-center">Բեռնվում է...</div>;

  return (
    <div className="w-full bg-[#F8F9FA] font-['MontserratARM',sans-serif] py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E] mb-8 tracking-tight">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="flex flex-col gap-4">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? 'border-[#5E1EEB]/40 ring-2 ring-[#5E1EEB]/5' : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className={`text-[17px] md:text-[19px] font-bold transition-colors ${isOpen ? 'text-[#5E1EEB]' : 'text-[#1C1C1E]'}`}>
                    {item.title}
                  </span>
                  
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-[#5E1EEB] text-white rotate-180' : 'bg-[#F3F0FD] text-[#5E1EEB]'
                  }`}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed border-t border-[#F3F4F6] pt-5">
                    <ul className="flex flex-col gap-3.5">
                      {item.content.map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {text.startsWith("•") ? (
                            <span className="pl-6 block">{text}</span>
                          ) : (
                            <>
                              <span className="w-2 h-2 rounded-full bg-[#5E1EEB] mt-2 flex-shrink-0"></span>
                              <span>{text}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransferAccordion;