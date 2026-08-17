import React, { useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Avandnerrr = () => {
  const depositsData = [
    {
      id: 1,
      title: "Դասական ավանդ",
      description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
      image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
      features: [
        { label: "Գումար", value: "100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "10.5% ֏", sub: "Մինչև" },
        { label: "Համալրման հնարավորություն", value: "100,000 ֏", sub: "սկսած" }
      ]
    },
    {
      id: 2,
      title: "Մանկական ավանդ",
      description: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
      features: [
        { label: "Գումար", value: "100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "18 լրանալը", sub: "Մինչև" },
        { label: "Տոկոսադրույք", value: "9.5% ֏", sub: "" },
        { label: "Համալրման հնարավորություն", value: "40,000 ֏", sub: "սկսած" }
      ]
    },
    {
      id: 3,
      title: "Ավանդ Evoca Online",
      description: "Ցանկանո՞ւմ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg",
      features: [
        { label: "Գումար", value: "100,000 ֏", sub: "Սկսած" },
        { label: "Ժամկետ", value: "31-1,825 օր", sub: "" },
        { label: "Տոկոսադրույք", value: "10.75% ֏", sub: "Մինչև" }
      ]
    }
  ];

  useEffect(() => {
    const uploadData = async () => {
      try {
        for (const item of depositsData) {
          await addDoc(collection(db, "deposits"), item);
        }
        console.log("Ավանդների տվյալները հաջողությամբ գրանցվեցին Firebase-ում!");
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };

    // uploadData(); // Միացրեք այս տողը միայն մեկ անգամ տվյալները բազա լցնելու համար
  }, []);

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        
        <h1 className="text-[40px] md:text-[48px] font-black text-[#1C1C1E] mb-12 tracking-tight">
          Ավանդներ
        </h1>

        <div className="flex flex-col gap-12">
          {depositsData.map((deposit) => (
            <div 
              key={deposit.id} 
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8 items-start justify-between"
            >
              {/* Նկար */}
              <div className="w-full lg:w-[415px] flex-shrink-0">
                <img 
                  src={deposit.image} 
                  alt={deposit.title} 
                  className="w-full h-auto object-cover rounded-2xl shadow-sm"
                />
              </div>

              {/* Բովանդակություն */}
              <div className="w-full flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-[28px] md:text-[32px] font-black text-[#1C1C1E] mb-3">
                    {deposit.title}
                  </h3>
                  <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8 max-w-4xl">
                    {deposit.description}
                  </p>
                </div>

                {/* Ցուցանիշներ */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {deposit.features.map((feat, idx) => (
                    <div key={idx}>
                      <p className="text-[12px] text-[#6B7280] mb-1 font-medium">{feat.sub}</p>
                      <p className="text-[24px] md:text-[28px] font-black text-[#5E1EEB] tracking-tight">
                        {feat.value}
                      </p>
                      <p className="text-[13px] text-[#8E8E93] mt-0.5">{feat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Մանրամասն կոճակ */}
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
          ))}
        </div>

      </div>
    </div>
  );
};

export default Avandnerrr;