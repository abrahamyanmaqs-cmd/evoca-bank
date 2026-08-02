 import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Ներմուծում ենք db-ն արդեն ստեղծված ֆայլից

const Business = () => {
  // Բիզնես վարկերի տվյալների զանգված
  const businessLoansData = [
    {
      id: 1,
      title: "Արագ բիզնես վարկ/վարկային գիծ",
      description:
        "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:",
      image: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
      stats: [
        {
          prefix: "մինչև",
          value: "60 ամիս",
          label: "Ժամկետ",
        },
        {
          prefix: "մինչև",
          value: "30 մլն ֏",
          label: "Սահմանաչափ կամ համարժեք արտարժույթ",
        },
        {
          prefix: "",
          value: "9.22%-17.89%",
          label: "Տարեկան տոկոսադրույք",
        },
      ],
    },
    {
      id: 2,
      title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
      description: "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:",
      image: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png", 
      stats: [
        {
          prefix: "մինչև",
          value: "36 ամիս",
          label: "Ժամկետ",
        },
        {
          prefix: "մինչև",
          value: "500 մլն ֏",
          label: "Սահմանաչափ կամ համարժեք արտարժույթ",
        },
        {
          prefix: "",
          value: "8%",
          label: "Տարեկան տոկոսադրույք",
        },
      ],
    },
    {
      id: 3,
      title: "Բիզնես վարկերի վերաֆինանսավորում",
      description: "Տեղափոխեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով:",
      image: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png", 
      stats: [
        {
          prefix: "Վերաֆինանսավորում",
          value: "36-120 ամիս",
          label: "ժամկետ",
        },
        {
          prefix: "Գումար",
          value: "15 մլն - 500 մլն ֏",
          label: "ՀՀ դրամ կամ համարժեք արտարժույթ",
        },
        {
          prefix: "Սկսած",
          value: "ՀՀ դրամ՝ 12%",
          label: "Տարեկան անվանական տոկոսադրույք",
        },
        {
          prefix: "Սկսած",
          value: "ԱՄՆ դոլար՝ 9%",
          label: "Տարեկան անվանական տոկոսադրույք",
        }
      ],
    },
    {
      id: 4,
      title: "Պարտատոմսերով ապահովված վարկ",
      description: "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը:",
      image: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png", 
      stats: [],
    },
    {
      id: 5,
      title: "Բիզնես վարկ",
      description: "Զարգացրե՛ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:",
      image: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg", 
      stats: [
        {
          prefix: "մինչև",
          value: "1 մլրդ ֏",
          label: "Գումար", 
        },
        {
          prefix: "մինչև",
          value: "10 տարի",
          label: "Ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "6%-ից",
          label: "Տարեկան տոկոսադրույք",
        },
      ],
    },
    {
      id: 6,
      title: "Փոքր և միջին բիզնեսի վարկավորում",
      description: "Առաջարկում ենք փոքր և միջին բիզնես վարկեր: Լրացրեք Online հայտը և Ձեր անհատական բիզնես խորհրդատուն կապ կհաստատի Ձեզ հետ 1 աշխատանքային օրվա ընթացքում:",
      image: "https://www.evoca.am/images-cache/loans/1/16148653401062/415x261.jpg", 
      stats: [
        {
          prefix: "մինչև",
          value: "750 մլն. ֏",
          label: "Սահմանաչափ", 
        },
        {
          prefix: "մինչև",
          value: "84 ամիս",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "7%-ից",
          label: "Տոկոսադրույք",
        },
      ],
    },
    {
      id: 7,
      title: "Evoca GO",
      description: "Օգտվեք Եվրոպական ներդրումային բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:",
      image: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg", 
      stats: [
        {
          prefix: "մինչև",
          value: "500 մլն. ֏",
          label: "Սահմանաչափ",
        },
        {
          prefix: "մինչև",
          value: "90 ամիս",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "",
          value: "10.5 % ֏",
          label: "Տոկոսադրույք",
        },
        {
          prefix: "մինչև",
          value: "30 ամիս",
          label: "Մայր գումարի արտոնյալ ժամկետ (ոչ պարտադիր)",
        }
      ],
    },
    {
      id: 8,
      title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
      description: "Եթե Դուք ցանկանում եք ձեռք բերել էկո սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:",
      image: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
      stats: [
        {
          prefix: "մինչև",
          value: "500 մլն. ֏",
          label: "Սահմանաչափ",
        },
        {
          prefix: "մինչև",
          value: "5 տարի",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "9%-ից",
          label: "Տոկոսադրույք",
        },
      ],
    },
    {
      id: 9,
      title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
      description: "Մի՛ օգտագործեք կուտակված խնայողությունները։ Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք։",
      image: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
      stats: [
        {
          prefix: "ավանդի գումարի մինչև",
          value: "95%",
          label: "Սահմանաչափ",
        },
        {
          prefix: "պարտատոմսի գումարի մինչև",
          value: "80%",
          label: "Սահմանաչափ",
        },
      ],
    },
    {
      id: 10,
      title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
      description: "Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:",
      image: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
      stats: [
        {
          prefix: "առանց գրավի մինչև",
          value: "10 մլն. ֏",
          label: "Սահմանաչափ (ներառյալ)",
        },
        {
          prefix: "",
          value: "9.5%",
          label: "Տարեկան անվանական տոկոսադրույք ՎԼԿ դեպքում (փաստացի տոկոսադրույք մինչև 10%)",
        },
        {
          prefix: "",
          value: "10.25%",
          label: "Տարեկան անվանական տոկոսադրույք ԷԱՆ դեպքում (փաստացի տոկոսադրույք մինչև 10.75%)",
        },
        {
          prefix: "մինչև",
          value: "120 ամիս",
          label: "Մարման ժամկետ ՎԼԿ դեպքում",
        },
      ],
    },
    {
      id: 11,
      title: "Պարզ բիզնես վարկ",
      description: "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:",
      image: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
      stats: [
        {
          prefix: "մինչև",
          value: "50 մլն. ֏",
          label: "Սահմանաչափ (կամ համարժեք արտարժույթ)",
        },
        {
          prefix: "մինչև",
          value: "60 ամիս",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "7.5%-ից",
          label: "Տոկոսադրույք",
        },
      ],
    },
    {
      id: 12,
      title: "Հաշվի վարկավորում",
      description: "Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:",
      image: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
      stats: [
        {
          prefix: "հաշվի տարեկան շարժի մինչև",
          value: "30%",
          label: "Սահմանաչափ",
        },
        {
          prefix: "մինչև",
          value: "180 օր",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "7%-ից",
          label: "Տոկոսադրույք",
        },
      ],
    },
    {
      id: 13,
      title: "Վարկային գիծ",
      description: "Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:",
      image: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
      stats: [
        {
          prefix: "մինչև",
          value: "1.5 մլրդ. ֏",
          label: "Սահմանաչափ",
        },
        {
          prefix: "մինչև",
          value: "5 տարի",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "6%-ից",
          label: "Տոկոսադրույք",
        },
      ],
    },
    {
      id: 14,
      title: "Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)",
      description: "Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:",
      image: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
      stats: [
        {
          prefix: "մինչև",
          value: "1 մլրդ ֏",
          label: "Կամ համարժեք արտարժույթ սահմանաչափ",
        },
        {
          prefix: "մինչև",
          value: "120 ամիս",
          label: "Մարման ժամկետը",
        },
        {
          prefix: "սկսած",
          value: "6%",
          label: "Տոկոսադրույք",
        },
        {
          prefix: "մինչև",
          value: "6%",
          label: "Սուբսիդավորում",
        },
      ],
    },
    {
      id: 15,
      title: "KfW բանկի կողմից ՄՖՄՁ-ների ֆինանսավորում",
      description: "Կատարե'ք Ձեր կապիտալ ներդրումները և իրականացրե'ք բիզնես գործունեության նպատակները Evocabank-ի հետ:",
      image: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
      stats: [
        {
          prefix: "մինչև",
          value: "160 մլն. ֏",
          label: "Սահմանաչափ",
        },
        {
          prefix: "մինչև",
          value: "60 ամիս",
          label: "Մարման ժամկետ",
        },
        {
          prefix: "սկսած",
          value: "9,5%-ից",
          label: "Տոկոսադրույք",
        },
      ],
    }
  ];

  // Ֆունկցիա, որն ստեղծում է "businessLoans" կոլեկցիան և ավելացնում տվյալները `setDoc`-ի միջոցով
  const uploadLoansToFirebase = async () => {
    try {
      for (const loan of businessLoansData) {
        await setDoc(doc(db, "businessLoans", `loan_${loan.id}`), loan);
      }
      alert("Բոլոր վարկերը հաջողությամբ ավելացվեցին Firebase-ում:");
    } catch (error) {
      console.error("Սխալ տվյալների ուղարկման ժամանակ: ", error);
      alert("Տեղի ունեցավ սխալ:");
    }
  };

  return (
    <div className="w-full bg-white font-sans">
      
      {/* Մանուշակագույն ենթամենյուի գոտի */}
      <div className="w-full bg-[#5E1EEB] py-3 px-4 md:px-10 flex justify-between items-center">
        <div className="text-white text-[14px] font-medium">
          Բիզնես վարկեր
        </div>
        
        {/* Firebase ուղարկելու կոճակ */}
        <button 
          onClick={uploadLoansToFirebase}
          className="bg-white text-[#5E1EEB] text-[13px] font-bold px-4 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Բեռնել Firebase
        </button>
      </div>

      {/* Գլխավոր բովանդակություն */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-10 md:py-16">
        
        {/* Էջի Վերնագիր */}
        <h1 className="text-[32px] md:text-[42px] font-black text-[#1C1C1E] mb-12 tracking-tight">
          Բիզնես վարկեր
        </h1>

        {/* Վարկերի Քարտերի Ցանկ */}
        <div className="flex flex-col gap-12">
          {businessLoansData.map((loan) => (
            <div 
              key={loan.id} 
              className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-100 last:border-none"
            >
              
              {/* Ձախ մաս (Նկար) */}
              <div className="w-full md:w-[40%] lg:w-[35%] flex-shrink-0">
                <div className="bg-[#F9F9FB] rounded-2xl p-4 overflow-hidden h-full flex items-center justify-center">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Աջ մաս (Ինֆորմացիա) */}
              <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col justify-center">
                <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#1C1C1E] mb-4">
                  {loan.title}
                </h2>
                
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-3xl">
                  {loan.description}
                </p>

                {/* Վիճակագրություն (Ժամկետ, Գումար, Տոկոս) */}
                {loan.stats && loan.stats.length > 0 && (
                  <div className="flex flex-wrap gap-x-12 gap-y-6 mb-8">
                    {loan.stats.map((stat, index) => (
                      <div key={index} className="flex flex-col">
                        {stat.prefix && (
                          <span className="text-gray-400 text-[12px] mb-1">
                            {stat.prefix}
                          </span>
                        )}
                        {!stat.prefix && <span className="h-[18px]"></span>}
                        
                        <span className="text-[28px] md:text-[32px] font-bold text-[#5E1EEB] mb-1">
                          {stat.value}
                        </span>
                        <span className="text-gray-400 text-[12px]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Կոճակ */}
                <div>
                  <button className="bg-[#F4F0FF] hover:bg-[#EBE4FF] text-[#5E1EEB] font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors duration-300 text-[14px]">
                    Մանրամասն
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Business;