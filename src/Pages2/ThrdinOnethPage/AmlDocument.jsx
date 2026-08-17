import React from 'react';
import { HiDocumentDownload } from 'react-icons/hi';

export default function AmlDocument() {
  const documents = [
    {
      title: 'Ֆինանսական հանցագործությունների կանխարգելման քաղաքականություն',
      link: '#',
    },
    {
      title: 'Wolfsberg հարցաթերթ',
      link: '#',
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#222222] mb-8">
          Փաստաթղթեր
        </h2>
        
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