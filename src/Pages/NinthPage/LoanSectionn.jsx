import React, { useState } from "react";
import LoanCardd from "./LoanCards"; // Եթե ուզում ես օգտագործել քո առանձին բաղադրիչը

const LoansSectionn = () => {
  const [activeCategory, setActiveCategory] = useState("Բոլորը");

  const categories = [
    "Բոլորը",
    "Գրավով ապահովված սպառողական վարկեր",
    "Անգրավ սպառողական վարկեր",
    "Հիփոթեքային վարկեր",
    "Ավտոմեքենաների ձեռքբերման ֆինանսավորում",
    "Ապառիկ",
    "Օնլայն վարկեր"
  ];

  const allLoans = [
    // --- Անգրավ սպառողական վարկեր (3 հատ) ---
    {
      id: 1,
      title: "Անգրավ սպառողական վարկ",
      category: "Անգրավ սպառողական վարկեր",
      description: "Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։",
      image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
      amount: "10 մլն. ֏",
      duration: "60 ամիս",
      rate: "19%-ից"
    },
    {
      id: 6,
      title: "Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ",
      category: "Անգրավ սպառողական վարկեր",
      description: "Աշխատավարձ᷉ եք ստանում մեր բանկային քարտով և ունե՞ք ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ:",
      image: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg",
      amount: "10 մլն. ֏", 
      duration: "60 ամիս",
      rate: "17%-ից"     
    },
    {
      id: 22,
      title: "Անհատական սպառողական վարկ",
      category: "Անգրավ սպառողական վարկեր",
      description: "Արագ և հարմարավետ անգրավ սպառողական վարկ Ձեր ընթացիկ բոլոր խնդիրները լուծելու համար:",
      image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
      amount: "5 մլն. ֏",
      duration: "48 ամիս",
      rate: "18%-ից"
    },

    // --- Գրավով ապահովված սպառողական վարկեր (3 հատ) ---
    {
      id: 2,
      title: "Գույքի գրավով ապահովված վարկ",
      category: "Գրավով ապահովված սպառողական վարկեր",
      description: "Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։",
      image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
      amount: "150 մլն. ֏",
      duration: "24-180 ամիս",
      rate: "14%-ից"
    },
    {
      id: 4,
      title: "Ոսկու գրավով (լոմբարդային) վարկ",
      category: "Գրավով ապահովված սպառողական վարկեր",
      description: "Ձևակերպեք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացեք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։",
      image: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg",
      amount: "50 մլն. ֏",
      duration: "3-60 ամիս",
      rate: "15.5%-ից"
    },
    {
      id: 14,
      title: "Անհատական վարկ «Ներդրումային»",
      category: "Գրավով ապահովված սպառողական վարկեր",
      description: "Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում:",
      image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png",
      amount: "350 մլն ֏",
      duration: "240 ամիս",
      rate: "15%-ից"
    },

    // --- Հիփոթեքային վարկեր (3 հատ) ---
    {
      id: 7,
      title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
      category: "Հիփոթեքային վարկեր",
      description: "Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։",
      image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
      amount: "80 մլն. ֏",
      duration: "240 ամիս",
      rate: "13.2%-ից"
    },
    {
      id: 10,
      title: "Հողամասի ձեռքբերման վարկ",
      category: "Հիփոթեքային վարկեր",
      description: "Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու և հանգստի գոտի ստեղծելու համար։",
      image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg",
      amount: "80 մլն ֏",
      duration: "240 ամիս",
      rate: "14%-ից"
    },
    {
      id: 17,
      title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ",
      category: "Հիփոթեքային վարկեր",
      description: "Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։",
      image: "https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png",
      amount: "80 մլն. ֏",
      duration: "180 ամիս",
      rate: "8.2%-ից"
    },

    // --- Ավտոմեքենաների ձեռքբերման ֆինանսավորում (3 հատ) ---
    {
      id: 12,
      title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
      category: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում",
      description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով:",
      image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
      amount: "50 մլն ֏",
      duration: "60 ամիս",
      rate: "14%-ից"
    },
    {
      id: 15,
      title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
      category: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում",
      description: "Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի:",
      image: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg",
      amount: "8 մլն ֏",
      duration: "60 ամիս",
      rate: "16%-ից"
    },
    {
      id: 23,
      title: "Ավտոմեքենայի ձեռքբերման վարկ",
      category: "Ավտոմեքենաների ձեռքբերման ֆինանսավորում",
      description: "Գնիր նոր կամ օգտագործված ավտոմեքենա արագ և հարմարավետ պայմաններով:",
      image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
      amount: "20 մլն ֏",
      duration: "60 ամիս",
      rate: "15%-ից"
    },

    // --- Ապառիկ (3 հատ) ---
    {
      id: 5,
      title: "Տեղում Ապառիկ",
      category: "Ապառիկ",
      description: "Ցանկանում ես ձեռք բերել քո նախընտրած ապրանքը, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից:",
      image: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg",
      amount: "5 մլն. ֏",
      duration: "60 ամիս",
      rate: "0%-ից"
    },
    {
      id: 16,
      title: "Հեծանիվի ձեռքբերման վարկ",
      category: "Ապառիկ",
      description: "Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։",
      image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png",
      amount: "300,000 ֏",
      duration: "36 ամիս",
      rate: "16%-ից"
    },
    {
      id: 20,
      title: "Evolution (Ուսման վարկ)",
      category: "Ապառիկ",
      description: "Նոր որակավորումների ժամանակն է, բայց ուսման վարձի խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։",
      image: "https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png",
      amount: "1 մլն. ֏",
      duration: "18 ամիս",
      rate: "18%-ից"
    },

    // --- Օնլայն վարկեր (3 հատ) ---
    {
      id: 8,
      title: "Action",
      category: "Օնլայն վարկեր",
      description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից:",
      image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
      amount: "10 մլն. ֏",
      duration: "60 ամիս",
      rate: "18%-ից"
    },
    {
      id: 13,
      title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)",
      category: "Օնլայն վարկեր",
      description: "Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է:",
      image: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png",
      amount: "10 մլն ֏",
      duration: "36 ամիս",
      rate: "16%-ից"
    },
    {
      id: 24,
      title: "Express Օնլայն Վարկ",
      category: "Օնլայն վարկեր",
      description: "Ստացեք արագ օնլայն վարկ ուղղակիորեն ձեր բանկային քարտին՝ առանց բանկ այցելելու:",
      image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
      amount: "3 մլն. ֏",
      duration: "24 ամիս",
      rate: "19%-ից"
    }
  ];

  // Ֆիլտրում ըստ ընտրված կատեգորիայի
  const filteredLoans = allLoans.filter((loan) => {
    if (activeCategory === "Բոլորը") return true;
    return loan.category === activeCategory;
  });

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        <h2 className="text-[40px] md:text-[48px] font-black text-[#1C1C1E] mb-8 tracking-tight">
          Վարկեր
        </h2>

        {/* Ֆիլտրի կոճակներ */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#5E1EEB] text-white" 
                    : "bg-[#F3F4F6] text-[#1C1C1E] hover:bg-[#E5E7EB]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Քարտերը՝ մեկը մյուսի տակ (Flex col, առանց grid-ի) */}
        <div className="mt-10 flex flex-col w-full gap-6">
          {filteredLoans.length > 0 ? (
            filteredLoans.map((loan) => (
              <LoanCardd key={loan.id} {...loan} />
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              Այս բաժնում վարկեր առայժմ չկան:
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default LoansSectionn;