import React from "react";

const AboutValues = () => {
  const valuesData = [
    {
      title: "Human-first",
      text: "Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից՝ մարդկանց համար:",
    },
    {
      title: "Նորարարություն",
      text: "Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է: Մենք բաց ենք և պատրաստակամ զարգանալու համար:",
    },
    {
      title: "Դրական ազդեցություն",
      text: "Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն:",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
      
      {/* Գլխավոր Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-14 tracking-tight">
        Արժեքներ և առաջնայնություններ
      </h2>

      {/* 3 Սյունակների Ցանց (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {valuesData.map((item, index) => (
          <div key={index} className="flex flex-col">
            {/* Վերնագիր (Մանուշակագույն) */}
            <h3 className="text-[#5E1EEB] text-[24px] md:text-[28px] font-bold mb-4">
              {item.title}
            </h3>
            {/* Տեքստ */}
            <p className="text-[#3A3A3C] text-[16px] md:text-[17px] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutValues;