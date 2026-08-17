import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useFavoriteStore } from '../../useFavoriteStore';

const CardsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Բոլորը");
  const { favorites, toggleFavorite } = useFavoriteStore();

  const categories = [
    "Բոլորը",
    "Պրեմիում",
    "Նվեր քարտեր",
    "Թվային քարտեր",
    "arca",
    "VISA",
    "Mastercard",
    "UnionPay"
  ];

  const cardsData = [
    {
      id: 1,
      title: "Evoca Travel Card",
      category: "Պրեմիում",
      description: "Սիրו՞ւմ ես ճամփորդել. ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:",
      image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
      features: [
        { label: "Cashback արտասահմանում իրականացված վճարումների համար", value: "մինչև 1.5%" },
        { label: "Lounge Key սրահներ քեզ և հյուրերիդ համար", value: "Անվճար 6 մուտք" },
        { label: "Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար", value: "Անվճար 6 անգամ" },
        { label: "Քարտի տարեկան սպասարկում", value: "16.000 ֏" }
      ]
    },
    {
      id: 2,
      title: "Evoca Visa Platinum",
      category: "Պրեմիում",
      description: "Պրեմիում առավելություններ պրեմիում քարտով:",
      image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
      features: [
        { label: "Սպասարկման վճար", value: "30.000 ֏" },
        { label: "Օդանավակայանների բիզնես սրահներ", value: "Անվճար 6 մուտք" }
      ]
    },
    {
      id: 3,
      title: "Wilco Visa Infinite",
      category: "Պրեմիում",
      description: "Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ:",
      image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png",
      features: []
    },
    {
      id: 4,
      title: "Evoca Gift Card",
      category: "Նվեր քարտեր",
      description: "Գնհիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:",
      image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
      features: []
    },
    {
      id: 5,
      title: "Digital Gift Card",
      category: "Նվեր քարտեր",
      description: "Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ կհավանթի՞, թե՞ ոչ: Մենք առաջարկում ենք իդեալական նվերի տարբերակ:",
      image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
      features: []
    },
    {
      id: 6,
      title: "Visa Infinite",
      category: "VISA",
      description: "Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտ է:",
      image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "1%" },
        { label: "Կանխիկացում ԱրՓա անդամ բանկերի կանխիկացման կետերում", value: "1.2%" },
        { label: "Կանխիկացում ԱրՓա անդամ չհանդիսացող բանկերի կետերում", value: "min 2,500 ֏ / 1.5%" },
        { label: "Տարեկան սպասարկում", value: "100,000 ֏" }
      ]
    },
    {
      id: 7,
      title: "Visa Vision",
      category: "VISA",
      description: "Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:",
      image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
      features: []
    },
    {
      id: 8,
      title: "Mastercard World Digital",
      category: "Թվային քարտեր",
      description: "Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:",
      image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "2%" },
        { label: "Կանխիկացում ԱրՓա համակարգի անդամ բանկերի բանկոматներից և POS տերմինալների միջոցով", value: "2.5%" },
        { label: "Միանվագ", value: "1000 ֏" }
      ]
    },
    {
      id: 9,
      title: "UnionPay Business Platinum",
      category: "UnionPay",
      description: "Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերդ հաջողության ճանապարհին:",
      image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
      features: [
        { label: "Կանխիկացում", value: "0.5%" },
        { label: "Քարտի ժամկետ", value: "5 տարի" },
        { label: "Տարեկան սպասարկման վճար", value: "15000 ֏" },
        { label: "Կիրառություն", value: "Ամենուր" }
      ]
    },
    {
      id: 10,
      title: "MyLer Gift Card",
      category: "Նվեր քարտեր",
      description: "Մեկ քարտ, անսահմանափակ արկածներ:",
      image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
      features: []
    },
    {
      id: 11,
      title: "UnionPay Gold",
      category: "UnionPay",
      description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:",
      image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
      features: [
        { label: "Կանխիկացում", value: "0.5%" },
        { label: "Քարտի ժամկետ", value: "5 տարի" },
        { label: "Տարեկան սպասարկման վճար", value: "15000 ֏" },
        { label: "Կիրառություն", value: "Ամենուր" }
      ]
    },
    {
      id: 12,
      title: "4U.am Gift card",
      category: "Նվեր քարտեր",
      description: "Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր:",
      image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
      features: []
    },
    {
      id: 13,
      title: "Mastercard Gold",
      category: "Mastercard",
      description: "Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:",
      image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կետերում (մինչև 2 մլն ֏)", value: "0%" },
        { label: "Կանխիկացում ԱրՓա անդամ բանկերում", value: "0.8%" },
        { label: "Կանխիկացում այլ բանկերում (min 1,500 ֏)", value: "1%" },
        { label: "Տարեկան սպասարկում", value: "15.000 ֏" }
      ]
    },
    {
      id: 14,
      title: "Mastercard Standard",
      category: "Mastercard",
      description: "Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն:",
      image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կետերում (մինչև 1 մլն ֏)", value: "0%" },
        { label: "Կանխիկացում ԱրՓա անդամ բանկերում", value: "0.8%" },
        { label: "Կանխիկացում այլ բանկերում (min 1,500 ֏)", value: "1%" },
        { label: "Տարեկան սպասարկում", value: "5000 ֏" }
      ]
    },
    {
      id: 15,
      title: "Visa Digital",
      category: "Թվային քարտեր",
      description: "Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով, և քարտը կակտիվանա րոպեների ընթացքում:",
      image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կետերում", value: "2%" },
        { label: "Մնացորդի տարեկան տոկոսադրույք (մինչև)", value: "4%" },
        { label: "Միանվագ սպասարկում", value: "1000 ֏" },
        { label: "Քեշբեք (մինչև)", value: "0.5%" }
      ]
    },
    {
      id: 16,
      title: "Visa Classic",
      category: "VISA",
      description: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:",
      image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կետերում", value: "0.2%" },
        { label: "Կանխիկացում ԱրՓա անդամ բանկերում", value: "0.8%" },
        { label: "Կանխիկացում այլ բանկերում (min 1,500 ֏)", value: "1%" },
        { label: "Տարեկան սպասարկում", value: "5,000 ֏" }
      ]
    },
    {
      id: 17,
      title: "Arca Classic",
      category: "arca",
      description: "Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի:",
      image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
      features: [
        { label: "Արտարժույթ՝ Բանկի ATM-ով", value: "0.5%" },
        { label: "Մինչև 300,000 ֏` անվճար ATM-ով", value: "0.2%" },
        { label: "ԱրՓա այլ բանկերի ATM և POS-ով", value: "1%" },
        { label: "Տարեկան սպասարկում", value: "1500 ֏" }
      ]
    },
    {
      id: 18,
      title: "Visa Business",
      category: "VISA",
      description: "Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով:",
      image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
      features: [
        { label: "Կանխիկացում բանկի կետերում", value: "0.2%" },
        { label: "Կանխիկացում ԱրՓա անդամ բանկերում", value: "0.8%" },
        { label: "Կանխիկացում այլ բանկերում (min 1,500 ֏)", value: "1%" },
        { label: "Կանխիկի տրամադրում բանկի տարածքում", value: "0.2%" }
      ]
    },
    {
      id: 19,
      title: "Dalma Gift Card",
      category: "Նվեր քարտեր",
      description: "Նվեր ընտրելն այլևս դժվար չէ:",
      image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
      features: []
    },
    {
      id: 20,
      title: "Rio Gift Card",
      category: "Նվեր քարտեր",
      description: "Ամեն ինչ մեկ նվեր քարտում:",
      image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
      features: []
    }
  ];

  const filteredCards = cardsData.filter((card) => {
    if (activeCategory === "Բոլորը") return true;
    return card.category === activeCategory;
  });

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10">
        
        <h2 className="text-[40px] md:text-[48px] font-black text-[#1C1C1E] mb-8 tracking-tight">
          Քարտեր
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-[15px] font-medium transition-colors duration-300 flex items-center justify-center cursor-pointer ${
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

        <div className="mt-10 flex flex-col w-full">
          {filteredCards.map((card) => {
            const isFavorite = favorites.some((fav) => fav.id === card.id);

            return (
              <div 
                key={card.id} 
                className="flex flex-col md:flex-row gap-8 w-full border-b border-gray-200 py-10 items-start"
              >
                {/* ՆԿԱՐԻ ԲԼՈԿ՝ ԻՐ ԱՋ ԱՆԿՅԱՆ ՍՐՏԻԿՈՎ */}
                <div className="w-full md:w-1/3 flex-shrink-0 relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-auto object-cover rounded-xl shadow-sm"
                  />
                  <button
                    onClick={() => toggleFavorite(card)}
                    className="absolute top-3 right-3 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  >
                    <svg 
                      className={`w-5 h-5 transition-colors ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"}`} 
                      fill={isFavorite ? "currentColor" : "none"} 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-[#1C1C1E] mb-3">{card.title}</h3>
                    <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {card.features && card.features.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      {card.features.map((feat, idx) => (
                        <div key={idx}>
                          <p className="text-xs text-[#6B7280] mb-1 leading-snug">{feat.label}</p>
                          <p className="text-xl font-bold text-[#5E1EEB]">{feat.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <button className="bg-[#F3F0FD] text-[#5E1EEB] font-semibold px-6 py-3 rounded-full hover:bg-[#5E1EEB] hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                      Մանրամասն
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default CardsSection;