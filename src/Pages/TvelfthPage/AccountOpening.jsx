import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին
import { doc, getDoc, setDoc } from "firebase/firestore";

const AccountOpening = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultData = {
    title: "Հաշիվների բացում և սպասարկում",
    description: "Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձիք:",
    image: "https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg",
    footerText: "Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում։ Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ այստեղ։"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "account_opening", "main_info");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          await setDoc(docRef, defaultData);
          setData(defaultData);
        }
      } catch (error) {
        console.error("Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) return null;

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-12">
          
          {/* Վերին հատված (նկար և հիմնական տեքստ) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[40px] font-black text-[#1C1C1E] mb-6 tracking-tight">
                {data.title}
              </h2>
              <p className="text-[#6B7280] text-[16px] md:text-[17px] leading-relaxed mb-8">
                {data.description}
              </p>
              <div>
                <button className="bg-[#F3F0FD] text-[#5E1EEB] font-semibold px-6 py-3 rounded-full hover:bg-[#5E1EEB] hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  Մանրամասն
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex-shrink-0">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-auto object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>

          {/* Ստորին տեքստային հատված */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">
            <p className="text-[#6B7280] text-[14px] md:text-[15px] leading-relaxed">
              {data.footerText.split("Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ")[0]}
              <span className="font-semibold text-[#1C1C1E]">ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</span>
              {data.footerText.split("ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ")[1].split("այստեղ")[0]}
              <a href="#" className="text-[#5E1EEB] font-semibold underline hover:text-[#4a15bc]">
                այստեղ
              </a>
              {data.footerText.split("այստեղ")[1]}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountOpening;