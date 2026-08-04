import React from "react";

const AboutVideo = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 bg-[#F8F9FA]">
      
      {/* Տեսանյութի բոնտեյներ (Responsive 16:9 հարաբերակցությամբ) */}
      <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-sm bg-black aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/QTuqGz3USRE?si=BEMS3KnQR9tnLftR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default AboutVideo;