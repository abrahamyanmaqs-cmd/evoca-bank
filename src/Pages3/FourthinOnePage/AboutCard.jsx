import React from 'react';

export default function AboutCard() {
  return (
    <section className="bg-white min-h-[500px] py-16 px-6 md:px-16 w-full select-none flex items-center">
      <div className="max-w-[1300px]   mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս՝ Վերնագրեր և Տեքստ */}
        <div className="lg:w-7/12 flex flex-col items-start text-left space-y-6">
          <h1 className="text-3xl md:text-[42px] font-bold text-[#1C1C1E] tracking-tight">
            Evoca Travel Card
          </h1>
          
          <div className="space-y-4 text-[#48484A] text-sm md:text-base leading-relaxed font-normal">
            <p className="font-semibold text-[#1C1C1E]">
              Որտե՞ղ ես ուզում լինել վաղը. Փարիզո՞ւմ, Դուբայո՞ւմ, թե՞ քեզ համար նոր, արկածներով լի վայրում։
            </p>
            <p>
              Evocabank-ը ներկայացնում է Evoca Travel Card՝ ճամփորդական քարտ, որը կդառնա քո անփոխարինելի ուղեկիցը յուրաքանչյուր ճամփորդության ժամանակ։
            </p>
            <p>
              Ձեռք բերելով Evoca Travel Card՝ դու դառնում ես Evocabank-ի պրեմիում քարտապան և ստանում մի շարք արտոնություններ ոչ միայն Հայաստանում, այլ նաև ամբողջ աշխարհում՝ միջազգային ճամփորդական ապահովագրություն, կոնսիերժ ծառայություն, անվճար մուտք օդանավակայանների բիզնես սպասասրահներ, Fast track, արտարժույթի արտոնյալ կուրս և այլն։
            </p>
          </div>
        </div>

        {/* Աջ մաս՝ Քարտի Նկարը */}
        <div className="lg:w-5/12 flex justify-center items-center">
          <div className="w-full max-w-[450px]">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg" 
              alt="Evoca Travel Card" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}