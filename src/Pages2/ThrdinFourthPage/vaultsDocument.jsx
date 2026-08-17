import React from 'react';
import { HiDocumentDownload } from 'react-icons/hi';

export default function VaultsDocument() {
  const documents = [
    {
      title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025',
      link: '#',
    },
  ];

  return (
    <section className="py-12 px-4 md:px-0 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Վերնագիր */}
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#222222] mb-8">
          Փաստաթղթեր
        </h2>
        
        {/* Փաստաթղթերի ցանկ */}
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.link}
              className="flex items-center gap-4 p-5 rounded-xl bg-[#F8F7FA] hover:bg-[#F0EEF5] transition-colors duration-200"
            >
              <div className="text-[#5E1EEB] text-[32px] shrink-0">
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