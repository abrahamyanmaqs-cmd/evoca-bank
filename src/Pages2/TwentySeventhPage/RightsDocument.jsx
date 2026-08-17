import React from 'react';

export default function RightsDocument() {
  const documentsList = [
    "«Անցանկալի հաճախորդների հետ հարաբերությունների կառավարման» ընթացակարգ (Ուժի մեջ է 30.0...",
    "Բողոքների քննության կանոններ (30.04.2026թ.)",
    "Ինչ անել, եթե բողոք ունեք (30.04.2026թ.)",
    "Բողոքի ներկայացման հայտ (30.04.2026թ.)",
    "Անձնական տվյալների մշակման և երրորդ անձանց փոխանցման Համաձայնություն",
    "Հաճախորդներին ծառայությունների մատուցման նպատակով Բանկի կողմից «ԷԿԵՆԳ» ՓԲԸ և «ՆՈՐՔ» կ..."
  ];

  return (
    <div className="mt-16 ml-[320px] select-none">
      <h2 className="text-[22px] md:text-[26px] font-bold uppercase mb-6 tracking-wide text-[#333333]">
        Փաստաթղթեր
      </h2>

      <div className="flex w-[900px] flex-col gap-3">
        {documentsList.map((docTitle, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-4 p-4 bg-[#F9F7FC] rounded-xl border border-[#EBDFFF] hover:bg-[#F4EEFF] transition-colors cursor-pointer"
          >
            <div className="text-[#5E1EEB]   flex-shrink-0">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            
            <span className="text-[#333333] font-medium text-sm md:text-base">
              {docTitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}