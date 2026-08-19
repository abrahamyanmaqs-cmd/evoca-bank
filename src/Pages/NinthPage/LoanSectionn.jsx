import React, { useState, useEffect } from "react";
import LoanCardd from "./LoanCards";
import { db } from "../../../firebase"; // Ճշգրիր ուղին ըստ քո ֆայլի տեղադրության
import { collection, getDocs, addDoc } from "firebase/firestore";

const LoansSectionn = () => {
  const [activeCategory, setActiveCategory] = useState("Բոլորը");
  const [loansData, setLoansData] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Բոլորը",
    "Գրավով ապահովված սպառողական վարկեր",
    "Անգրավ սպառողական վարկեր",
    "Հիփոթեքային վարկեր",
    "Ավտոմեքենաների ձեռքբերման ֆինանսավորում",
    "Ապառիկ",
    "Օնլայն վարկեր"
  ];

  const initialLoans = [
    {
      id: 1,
      title: "Անգրավ սպառողական վարկ",
      description: "Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։",
      image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg",
      amount: "10 մլն. ֏",
      duration: "60 ամիս",
      rate: "19%-ից"
    },
    {
      id: 2,
      title: "Գույքի գրավով ապահովված վարկ",
      description: "Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։",
      image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
      amount: "150 մլն. ֏",
      durationRealEstate: "24-180",
      durationMovables: "60 ամիս",
      rate: "14%-ից"
    },
    {
      id: 3,
      title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER",
      description: "Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից: EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության:",
      image: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png",
      amount: "5 մլն. ֏",
      duration: "60 ամիս",
      rate: "0%-ից"
    },
    {
      id: 4,
      title: "Ոսկու գրավով (լոմբարդային) վարկ",
      description: "Ձևակերպեք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացեք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։",
      image: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg",
      amount: "50 մլն. ֏",
      duration: "3-60 ամիս",
      rate: "15.5%-ից",
      loanToValue: "150%"
    },
    {
      id: 5,
      title: "Տեղում Ապառիկ",
      description: "Ցանկանում ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից: Օգտվիր Evoca-ի տեղում ապառիկից:",
      image: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg",
      amount: "5 մլն. ֏",
      duration: "60 ամիս",
      rate: "0%-ից"
    },
    {
      id: 6,
      title: "Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ",
      description: "Աշխատավարձ᷉ եք ստանում մեր բանկային քարտով և ունե՞ք ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ:",
      image: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg",
      amount: "10 մլն. ֏", 
      duration: "60 ամիս",
      rate: "17%-ից"     
    },
    {
      id: 7,
      title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
      description: "Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։",
      image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
      amount: "80 մլն. ֏",
      duration: "240 ամիս",
      rate: "13.2%-ից"
    },
    {
      id: 8,
      title: "Action",
      description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:",
      image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
      amount: "10 մլն. ֏",
      duration: "60 ամիս",
      rate: "18%-ից"
    },
    {
      id: 9,
      title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին",
      description: "Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:",
      image: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png",
      amount: "55 մլն ֏",
      duration: "120 ամիս",
      rate: "13%-ից"
    }, 
    {
      id: 10,
      title: "Հողամասի ձեռքբերման վարկ",
      description: "Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։",
      image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg",
      amount: "80 մլն ֏",
      duration: "240 ամիս",
      rate: "14%-ից"
    },
    {
      id: 11,
      title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
      description: "Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։",
      image: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png",
      amount: "5 մլն ֏",
      duration: "60 ամիս",
      rate: "17%-ից"
    },
    {
      id: 12,
      title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
      description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:",
      image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
      amount: "50 մլն ֏",
      duration: "60 ամիս",
      rate: "14%-ից"
    },
    {
      id: 13,
      title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)",
      description: "Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:",
      image: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png",
      amount: "10 մլն ֏",
      duration: "36 ամիս",
      rate: "16%-ից"
    },
    {
      id: 14,
      title: "Անհատական վարկ «Ներդրումային»",
      description: "Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ",
      image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png",
      amount: "350 մլն ֏",
      duration: "240 ամիս",
      rate: "15%-ից"
    },
    {
      id: 15,
      title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
      description: "Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:",
      image: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg",
      amount: "8 մլն ֏",
      duration: "60 ամիս",
      rate: "16%-ից"
    },
    {
      id: 16,
      title: "Հեծանիվի ձեռքբերման վարկ",
      description: "Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։",
      image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png",
      amount: "300,000 ֏",
      duration: "36 ամիս",
      rate: "16%-ից"
    },
    {
      id: 17,
      title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ",
      description: "Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։",
      image: "https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png",
      amount: "80 մլն. ֏",
      duration: "180 ամիս",
      rate: "8.2%-ից"
    },
    {
      id: 18,
      title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին",
      description: "Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:",
      image: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png",
      amount: "45 մլն. ֏",
      duration: "120 ամիս",
      rate: "10%-ից"
    },
    {
      id: 19,
      title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին",
      description: "Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։",
      image: "https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png",
      amount: "10 մլն. ֏",
      duration: "60 ամիս",
      rate: "13%-ից"
    },
    {
      id: 20,
      title: "Evolution",
      description: "Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։",
      image: "https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png",
      amount: "1 մլն. ֏",
      duration: "18 ամիս",
      rate: "18%-ից"
    },
    {
      id: 21,
      title: "Հիփոթեքային վարկեր Զինծառայողներին",
      description: "Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։",
      image: "https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png",
      amount: "25,65 մլն. ֏",
      duration: "120-240 ամիս",
      rate: "5%-ից"
    }
  ];

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const colRef = collection(db, "loans");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          for (const loan of initialLoans) {
            await addDoc(colRef, loan);
          }
          const newSnapshot = await getDocs(colRef);
          setLoansData(newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setLoansData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  // Ֆիլտրման տրամաբանություն (եթե անհրաժեշտ է կապել վարկերի տեսակների հետ)
  const filteredLoans = loansData.filter((loan) => {
    if (activeCategory === "Բոլորը") return true;
    // Այստեղ կարող ես ավելացնել համապատասխան պայմաններ, եթե տվյալների մեջ ունես category դաշտ
    return true; 
  });

  if (loading) {
    return <div className="text-center py-20">Բեռնվում է վարկերը...</div>;
  }

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

        {/* Քարտերի ցանց */}
        <div className="mt-10 flex flex-col w-full">
          {filteredLoans.map((loan) => (
            <LoanCardd key={loan.id} {...loan} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default LoansSectionn;