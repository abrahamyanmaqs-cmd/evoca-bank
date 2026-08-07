 import React, { useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը
import { collection, addDoc } from "firebase/firestore";

const CareerWhyEvoca = () => {
  const contentData = {
    title: "Ինչո՞ւ աշխատել Evoca-ում",
    description:
      "«Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»",
    image: "https://www.evoca.am/file_manager/Career/evoca-girl.jpg",
  };

  useEffect(() => {
    const uploadData = async () => {
      try {
        await addDoc(collection(db, "careerWhyEvoca"), contentData);
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };

    uploadData();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 flex flex-col items-center">
      {/* Տեքստային բաժին՝ կենտրոնացված և հավասարեցված նկարի լայնությանը */}
      <div className="max-w-[850px] w-full text-center mb-10">
        <h2 className="text-[28px] md:text-[38px] font-bold text-[#1C1C1E] mb-6 tracking-tight">
          {contentData.title}
        </h2>
        <p className="text-[#4A4A4E] text-[16px] md:text-[18px] leading-relaxed">
          {contentData.description}
        </p>
      </div>

      {/* Նկարի բլոկ՝ փոքրացված լայնությամբ և առանց border-radius-ի */}
      <div className="max-w-[850px] w-full overflow-hidden shadow-sm bg-gray-50">
        <img
          src={contentData.image}
          alt="Why work at Evoca"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CareerWhyEvoca;