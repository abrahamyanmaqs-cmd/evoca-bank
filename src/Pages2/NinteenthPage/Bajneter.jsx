import React from 'react';

export default function Bajneterer() {
  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Հիմնական վերնագիր */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1C1C1E] mb-10">
          Բաժնետերեր
        </h1>

        {/* Բովանդակություն (Grid կամ Flex0) */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Անձի նկար */}
          <div className="w-full lg:w-[450px] flex-shrink-0">
            <img 
              src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" 
              alt="Մարետա Գևորգյան" 
              className="w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Տեքստային հատված */}
          <div className="flex flex-col gap-4 max-w-3xl">
            
            {/* Անուն Ազգանուն (Մանուշակագույն) */}
            <h2 className="text-xl md:text-2xl font-bold text-[#5E1EEB]">
              Մարետա Գևորգյան
            </h2>

            {/* Հիմնական նկարագրություն */}
            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              Մարետա Գևորգյանը միանձնյա տիրապետում է Evocabank-ի բաժնետոմսերի 100%-ին:
            </p>

            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              Նա ծնվել է Դիլիջանում, ավարտել Դիլիջանի միջնակարգ դպրոցը, այնուհետև՝ Երևանի պետական մանկավարժական ակադեմիան:
            </p>

            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է բանկային, տարածքային զարգացման և սոցիալական նախաձեռնություններում՝ նպաստելով Հայաստանի կայուն զարգացմանը:
            </p>

            {/* Նշում */}
            <p className="text-xs md:text-sm text-gray-600 font-medium mt-4">
              <strong className="text-[#1C1C1E]">Նշում.</strong> Բանկն անուղղակի նշանակալից մասնակից չունի:
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}