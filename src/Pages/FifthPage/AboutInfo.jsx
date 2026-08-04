import React from "react";

const AboutInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#F8F9FA] p-8 rounded-3xl">
        <h3 className="text-[20px] font-bold text-[#1C1C1E] mb-3">Մեր առաքելությունը</h3>
        <p className="text-gray-600 text-[15px]">
          Մատուցել արագ, հարմարավետ և տեխնոլոգիական ծառայություններ յուրաքանչյուր հաճախորդին:
        </p>
      </div>
      <div className="bg-[#F8F9FA] p-8 rounded-3xl">
        <h3 className="text-[20px] font-bold text-[#1C1C1E] mb-3">Մեր տեսլականը</h3>
        <p className="text-gray-600 text-[15px]">
          Լինել առաջատար թվային բանկային համակարգում՝ ստեղծելով նոր չափանիշներ շուկայում:
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;