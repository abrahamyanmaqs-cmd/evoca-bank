import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

export default function Orenqner() {
  const [lawsList, setLawsList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultLaws = [
    { id: "1", title: "Կենտրոնական բանկի մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "2", title: "ՀՀ քաղաքացիական օրենսգիրք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "3", title: "Բանկերի և բանկային գործունեության մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { 
      id: "4", 
      title: "Բանկերի, վարկային կազմակերպությունների, ներդրումային ընկերությունների, ներդրումային ֆոնդի կառավարիչների և ապահովագրական ընկերությունների սնանկության մասին ՀՀ օրենք", 
      href: "https://www.arlis.am/hy/acts/121585" 
    },
    { id: "5", title: "Բանկային գաղտնիքի մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "6", title: "Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "7", title: "Սպառողական կրեդիտավորման մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "8", title: "Բանկային ավանդների ներգրավման մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "9", title: "Բնակարանային հիփոթեքային կրեդիտավորման մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" },
    { id: "10", title: "Անձնական տվյալների պաշտպանության մասին ՀՀ օրենք", href: "https://www.arlis.am/hy/acts/121585" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "laws");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե հավաքածուն դատարկ է, լրացնում ենք default տվյալներով
          for (const law of defaultLaws) {
            await setDoc(doc(colRef, law.id), law);
          }
          setLawsList(defaultLaws);
        } else {
          setLawsList(snapshot.docs.map(doc => doc.data()));
        }
      } catch (error) {
        console.error("Firebase error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;

  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Հիմնական վերնագիր՝ Իրավական ակտեր */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1E] mb-8">
          Իրավական ակտեր
        </h1>

        {/* Ենթավերնագիր՝ Օրենքներ */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1E] mb-6">
          Օրենքներ
        </h2>

        {/* Օրենքների ցանկ */}
        <div className="flex flex-col gap-4">
          {lawsList.map((law) => (
            <a 
              key={law.id}
              href={law.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 md:p-5 bg-[#F8F8FA] hover:bg-[#F2EDFF] border border-transparent hover:border-[#5E1EEB]/20 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-4">
                {/* Օրենքի անվանում */}
                <span className="text-base md:text-lg font-bold text-[#1C1C1E] group-hover:text-[#5E1EEB] transition-colors leading-relaxed">
                  {law.title}
                </span>
              </div>

              {/* Աջ կողմի սլաք */}
              <div className="text-gray-400 group-hover:text-[#5E1EEB] transition-colors pr-2 flex-shrink-0">
                <svg className="w-5 h-5 transform -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}