import React from 'react';

const DocumentsList = () => {
  const documents = [
    {
      title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
      fileSize: "PDF"
    },
    {
      title: "SWIFT Transfers (20.03.2026)",
      fileSize: "PDF"
    },
    {
      title: "SWIFT переводы в РФ (20.03.2026)",
      fileSize: "PDF"
    }
  ];

  return (
    <div className="w-full bg-[#F8F9FA] font-['MontserratARM',sans-serif] py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        
        <h2 className="text-[28px] md:text-[36px] font-black text-[#1C1C1E] mb-8 tracking-tight">
          Փաստաթղթեր
        </h2>

        <div className="flex flex-col gap-4">
          {documents.map((doc, index) => (
            <a
              key={index}
              href="#"
              className="bg-[#F8F5FF] hover:bg-[#F3EEFE] border border-[#EBE3FE] rounded-2xl p-5 md:p-6 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-5">
                {/* Ներբեռնման իկոնկա (SVG) */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5E1EEB]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Փաստաթղթի անվանում */}
                <span className="text-[16px] md:text-[18px] font-bold text-[#1C1C1E] group-hover:text-[#5E1EEB] transition-colors leading-snug">
                  {doc.title}
                </span>
              </div>

              {/* Աջ կողմի սլաք */}
              <div className="hidden sm:flex items-center text-[#5E1EEB] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DocumentsList;