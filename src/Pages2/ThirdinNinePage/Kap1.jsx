import React from 'react';

export default function ContactUs() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 font-sans">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Էջի Վերնագիր */}
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] mb-10">
          Հետադարձ կապ
        </h1>

        {/* Աղյուսակային հատված */}
        <div className="bg-white rounded-3xl border border-[#E5E2EC] shadow-sm overflow-hidden">
          <div className="divide-y divide-[#E5E2EC]">
            
            {/* Հասցե */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-6 py-5 text-[#222222] font-semibold text-[16px] md:text-[18px] bg-[#FAFAFA]/50">
                Հասցե
              </div>
              <div className="w-full md:w-2/3 px-6 py-5 text-[#555555] text-[16px] md:text-[18px]">
                ՀՀ, 0010 Երևան, Հանրապետության փող. 44/2 շենք
              </div>
            </div>

            {/* Հեռախոսահամար */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-6 py-5 text-[#222222] font-semibold text-[16px] md:text-[18px] bg-[#FAFAFA]/50">
                Հեռախոսահամար
              </div>
              <div className="w-full md:w-2/3 px-6 py-5 text-[#555555] text-[16px] md:text-[18px]">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                    <a href="tel:+37410605555" className="hover:text-[#7C3AED] transition-colors">
                      +374 10 605555,
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                    <a href="tel:8444" className="hover:text-[#7C3AED] transition-colors">
                      84-44
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Էլ. փոստ */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-6 py-5 text-[#222222] font-semibold text-[16px] md:text-[18px] bg-[#FAFAFA]/50">
                Էլ. փոստ
              </div>
              <div className="w-full md:w-2/3 px-6 py-5 text-[16px] md:text-[18px]">
                <a href="mailto:hello@evoca.am" className="text-[#7C3AED] hover:underline font-medium">
                  hello@evoca.am
                </a>
              </div>
            </div>

            {/* SWIFT */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-6 py-5 text-[#222222] font-semibold text-[16px] md:text-[18px] bg-[#FAFAFA]/50">
                SWIFT
              </div>
              <div className="w-full md:w-2/3 px-6 py-5 text-[#555555] text-[16px] md:text-[18px] font-medium tracking-wide">
                PRML AM 22
              </div>
            </div>

            {/* Աշխատանքային ժամեր */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-6 py-5 text-[#222222] font-semibold text-[16px] md:text-[18px] bg-[#FAFAFA]/50">
                Աշխատանքային ժամեր
              </div>
              <div className="w-full md:w-2/3 px-6 py-5 text-[#555555] text-[16px] md:text-[18px]">
                9:00 - 18:00
              </div>
            </div>

            {/* Հաճախորդների սպասարկման ժամեր */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 px-6 py-5 text-[#222222] font-semibold text-[16px] md:text-[18px] bg-[#FAFAFA]/50">
                Հաճախորդների սպասարկման ժամեր
              </div>
              <div className="w-full md:w-2/3 px-6 py-5 text-[#555555] text-[16px] md:text-[18px]">
                9:30 - 17:00
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}