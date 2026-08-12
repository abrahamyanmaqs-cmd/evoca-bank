import React from 'react';

const ArjetghterMain = () => {
  const data = {
    title: "Ներդրումային ծառայություններ",
    description: "Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան:",
    image: "https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg"
  };

  return (
    <div className="w-full bg-[#F8F9FA] font-['MontserratARM',sans-serif] py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch justify-between">
          
          {/* Ձախ մաս (Տեքստ) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <h1 className="text-[32px] md:text-[40px] font-black text-[#1C1C1E] mb-6 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-[#6B7280] text-[16px] md:text-[17px] leading-relaxed mb-8">
              {data.description}
            </p>
            <div>
              
            </div>
          </div>

          {/* Աջ մաս (Նկար և մանուշակագույն ֆոն) */}
          <div className="w-full lg:w-1/2 bg-[#E9DDFB] flex items-center justify-center p-6 md:p-10">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-auto object-cover rounded-2xl shadow-sm max-w-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArjetghterMain;