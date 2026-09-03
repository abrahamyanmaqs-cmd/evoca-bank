import React from 'react';
import { useNavigate } from 'react-router-dom';

const internetTvCategories = [
  {
    id: 1,
    title: "HyperNet",
    path: "hypernet",
    image: "https://resource.evoca.am/images/WebPayment/hypernet.png",
  },
  {
    id: 2,
    title: "Team ինտերնետ",
    path: "team-internet",
    image: "https://resource.evoca.am/images/WebPayment/beeline.png",
  },
  {
    id: 3,
    title: "VivaCell MTS Internet",
    path: "vivacell-internet",
    image: "https://resource.evoca.am/images/webPayment/vivacell.png",
  },
  {
    id: 4,
    title: "Rostelekom",
    path: "rostelecom",
    image: "https://resource.evoca.am/images/WebPayment/rostelecom.png",
  },
  {
    id: 5,
    title: "Interactive TV",
    path: "interactive-tv",
    image: "https://resource.evoca.am/images/webPayment/interactive.png",
  },
  {
    id: 6,
    title: "CTV",
    path: "ctv",
    image: "https://resource.evoca.am/images/WebPayment/ctv.png",
  },
  {
    id: 7,
    title: "YOURnet",
    path: "yournet",
    image: "https://resource.evoca.am/images/WebPayment/yournet.png",
  },
  {
    id: 8,
    title: "Arpinet",
    path: "arpinet",
    image: "https://resource.evoca.am/images/WebPayment/arpinet.png",
  },
  {
    id: 9,
    title: "Ղարաբաղ տելեկոմ",
    path: "karabakh-telecom",
    image: "https://resource.evoca.am/images/webPayment/karabakh.png",
  },
  {
    id: 10,
    title: "armcom",
    path: "armcom",
    image: "https://resource.evoca.am/images/WebPayment/armcom.png",
  },
  {
    id: 11,
    title: "Interlink",
    path: "interlink",
    image: "https://resource.evoca.am/images/webPayment/interlinknew.png",
  },
];

export default function InternetTvSubCategories() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Վերադառնալու կոճակ */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-[#5E1EEB] font-semibold cursor-pointer hover:underline"
        >
          ← Վերադառնալ
        </button>

        {/* Գլխավոր Վերնագիր */}
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#1C1C1E] text-center mb-14 tracking-tight">
          Ինտերնետ և TV
        </h1>

        {/* Քարտերի Ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {internetTvCategories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/payments/internet-tv/${item.path}`)}
              className="bg-white rounded-[28px] p-8 shadow-sm transition-all duration-300 flex flex-col items-center justify-between text-center h-[260px] cursor-pointer relative border border-transparent hover:border-[#5E1EEB]/30 hover:shadow-md"
            >
              {/* Նկար */}
              <div className="flex-grow flex items-center justify-center pt-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>

              {/* Վերնագիր */}
              <h3 className="text-[#1C1C1E] font-semibold text-[15px] md:text-[16px] leading-snug mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}