import React from 'react';
import { HiDocumentDownload } from 'react-icons/hi';

export default function CardsRules() {
  const documents = [
    {
      title: 'Ի՞նչ անել, եթե բողոք ունեք (30.04.2026թ.)',
      link: '#',
    },
    {
      title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025',
      link: '#',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Հիմնական վերնագիր */}
        <h1 className="text-[34px] font-medium text-[#333333] mb-10 leading-tight">
          Հղումներ Բանկի քարտապանների համար
        </h1>

        {/* Ենթավերնագիր */}
        <h2 className="text-[22px] md:text-[24px] font-bold text-[#222222] mb-6">
          Փաստաթղթեր
        </h2>
        
        {/* Փաստաթղթերի ցանկ */}
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.link}
              className="flex items-center gap-4 p-5 rounded-lg bg-[#F8F7FA] hover:bg-[#F0EEF5] transition-colors duration-200"
            >
              <div className="text-[#5E1EEB] text-[32px]">
                <HiDocumentDownload />
              </div>
              <span className="text-[16px] md:text-[18px] font-bold text-[#222222]">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}