import React from "react";

const AboutColors = () => {
  const colorItems = [
    {
      colorClass: "bg-white border-2 border-gray-300",
      text: "Սպիտակը խորհրդանշում է նորը:",
    },
    {
      colorClass: "bg-gray-500",
      text: "Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:",
    },
    {
      colorClass: "bg-[#5E1EEB]",
      text: "Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության գույնն է:",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 bg-[#F8F9FA]">
      {/* Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-6 tracking-tight">
        Բանկի կորպորատիվ գույները
      </h2>

      {/* Տեքստ */}
      <p className="text-[#3A3A3C] text-[16px] md:text-[18px] max-w-4xl mb-12 leading-relaxed">
        Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
      </p>

      {/* Սպիտակ բլոկի մեջ տեղադրված կետերը */}
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 max-w-5xl">
        <div className="flex flex-col gap-8">
          {colorItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              {/* Գույնի կլորակ */}
              <div className={`w-8 h-8 rounded-full flex-shrink-0 ${item.colorClass}`}></div>
              {/* Տեքստ */}
              <p className="text-[#3A3A3C] text-[16px] md:text-[18px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutColors;