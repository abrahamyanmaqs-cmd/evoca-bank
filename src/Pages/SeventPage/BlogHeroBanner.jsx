import React, { useEffect } from "react";
import { db } from "../../firebase"; // Ճշգրտիր ճանապարհը ըստ քո ֆայլերի տեղադրության
import { collection, addDoc } from "firebase/firestore";

const BlogHeroBanner = () => {
  const bannerData = {
    category: "Կենսակերպ",
    title: "Evoca-գույնի հոգեբանական նկարագիրը",
    description: "Գույնը մարքեթինգային գործիք է։ Այն ազդում է մարդու հոգեբանության վրա։",
    image: "https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png",
  };

  useEffect(() => {
    const uploadData = async () => {
      try {
        await addDoc(collection(db, "blogHeroBanner"), bannerData);
        console.log("BlogHeroBanner տվյալները հաջողությամբ գրանցվեցին Firebase-ում!");
      } catch (error) {
        console.error("Սխալ Firebase ուղարկելիս:", error);
      }
    };

    uploadData();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
      <div className="relative rounded-[32px] overflow-hidden min-h-[480px] md:min-h-[560px] flex items-end p-6 md:p-12 shadow-sm">
        
        {/* Ետեւի ֆոնային նկար */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerData.image}
            alt="Evoca color psychology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Առջևի սպիտակ բլոկը ձախ մասում */}
        <div className="relative z-10 bg-white rounded-3xl p-6 md:p-10 max-w-[540px] w-full shadow-lg">
          {/* Կատեգորիայի նշան */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-3 bg-[#5E1EEB]"></div>
            <span className="text-[#1C1C1E] font-semibold text-[15px]">
              {bannerData.category}
            </span>
          </div>

          {/* Վերնագիր */}
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#1C1C1E] leading-[1.25] mb-4 tracking-tight">
            {bannerData.title}
          </h2>

          {/* Նկարագրություն */}
          <p className="text-[#4A4A4E] text-[15px] md:text-[16px] leading-relaxed">
            {bannerData.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default BlogHeroBanner;