import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc, query, orderBy } from "firebase/firestore";

const AccountAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [accordionItems, setAccordionItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալները (եթե Firebase-ում դատարկ է)
  const defaultItems = [
    { id: "1", title: "Անհրաժեշտ փաստաթղթեր", content: "Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն: Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ: Մեր պահանջով այլ փաստաթղթեր:" },
    { id: "2", title: "Հաշիվ բացելու ընթացակարգ", content: "Հաշիվ բացելու համար անհրաժեշտ է այցելել բանկի գլխամասային գրասենյակ կամ մասնաճյուղ և ներկայացնել համապատասխան փաստաթղթերը:" },
    { id: "3", title: "Բանկային հաշիվների սպասարկում", content: "Բանկային հաշիվների սպասարկումն իրականացվում է բանկի սահմանված սակագներին համապատասխան:" },
    { id: "4", title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ", content: "Այլ դրույթներին և պայմաններին կարող եք ծանոթանալ բանկի պաշտոնական կայքում կամ մասնաճյուղերում:" },
    { id: "5", title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ", content: "Պայմանագիրը կարող է լուծվել հաճախորդի դիմումի համաձայն՝ օրենսդրությամբ և բանկի ներքին իրավական ակտերով սահմանված կարգով:" },
    { id: "6", title: "Երաշխավորված ավանդների սահմանաչափերը", content: "Ֆիզիկական անձանց բանկային ավանդները երաշխավորված են «Ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքով:" },
    { id: "7", title: "ՈՒՇԱԴՐՈՒԹՅՈՒՆ", content: "Բանկը վերահսկվում է ՀՀ կենտրոնական բանկի կողմից:" },
    { id: "8", title: "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում", content: "Evocabank-ը հանդիսանում է FATCA-ի պահանջներին համապատասխանող ֆինանսական հաստատություն:" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "account_accordion_items");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Ավելացնում ենք default-ները, եթե հավաքածուն դատարկ է
          for (const item of defaultItems) {
            await setDoc(doc(colRef, item.id), item);
          }
          setAccordionItems(defaultItems);
        } else {
          // Կարդում ենք առկա տվյալները
          setAccordionItems(snapshot.docs.map(doc => doc.data()));
        }
      } catch (error) {
        console.error("Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return null;

  return (
    <div className="w-full bg-[#F8F9FA] font-sans py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E] mb-8 tracking-tight">
          ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
        </h2>

        <div className="flex flex-col gap-4">
          {accordionItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === index ? 'border-[#5E1EEB]/40' : 'border-[#E5E7EB]'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
              >
                <span className={`text-[17px] md:text-[19px] font-bold ${openIndex === index ? 'text-[#5E1EEB]' : 'text-[#1C1C1E]'}`}>
                  {item.title}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#5E1EEB]' : 'rotate-0 text-[#1C1C1E]'}`}>
                  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[#6B7280] text-[15px] leading-relaxed border-t border-[#F3F4F6] pt-4">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountAccordion;