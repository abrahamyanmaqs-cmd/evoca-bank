import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

export default function Bukletner() {
  const [bookletsData, setBookletsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultBooklets = [
    { id: "1", image: "https://www.evoca.am/file_manager/Booklets/Images/Car%20Parking_Web_Visual.png" },
    { id: "2", image: "https://www.evoca.am/file_manager/Booklets/Images/%D4%B1%D5%BE%D5%BF%D5%B8%D5%B4%D5%A5%D6%84%D5%A5%D5%B6%D5%A1%D5%B5%D5%AB-%D5%B1%D5%A5%D5%BC%D6%84%D5%A2%D5%A5%D6%80%D5%BC%D5%A1%D5%B6-%D5%B6%D5%BA%D5%A1%D5%BF%D5%A1%D5%BA%D5%B8%D5%B5-%D5%BE%D5%A1%D6%80%D5%AF.png" },
    { id: "3", image: "https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%86%D5%87%D4%B1%D5%90%D4%BA-%D4%B5%D5%8E-%D5%87%D4%B1%D5%90%D4%BA%D4%B1%D4%BF%D4%B1%D5%86-%D4%B3%D5%88%D5%92%D5%85%D5%94%D4%BB-%D4%B3%D5%90%D4%B1%D5%8E%D5%88%D5%8F-%D5%8E%D4%B1%D5%90%D4%BF%D4%B5%D5%90.png" },
    { id: "4", image: "https://www.evoca.am/file_manager/Booklets/Images/5-mortgage-loans.jpg" },
    { id: "5", image: "https://www.evoca.am/file_manager/Booklets/Images/6-business-loans.jpg" },
    { id: "6", image: "https://www.evoca.am/file_manager/Booklets/Images/10-gold-secured-loans.jpg" },
    { id: "7", image: "https://www.evoca.am/file_manager/Booklets/Images/11-safe-deposit-boxes.jpg" },
    { id: "8", image: "https://www.evoca.am/file_manager/Booklets/Images/12-factoring.jpg" },
    { id: "9", image: "https://www.evoca.am/file_manager/Booklets/Images/%D4%B4%D6%80%D5%A1%D5%B4%D5%A1%D6%80%D5%AF%D5%B2%D5%A1%D5%B5%D5%B6-%D5%A3%D5%B8%D6%80%D5%AE%D5%A1%D5%BC%D5%B6%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B5%D5%B6%D5%A5%D6%86%D5%B0-%D5%BD%D5%A1%D5%AF%D5%A1%D5%A3%D5%B6%D5%A5%D6%86.png" },
    { id: "10", image: "https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%B6%D5%A3%D6%80%D5%A1%D5%BE-%D5%BD%D5%BA%D5%A1%D5%BC%D5%B8%D5%B2%D5%A1%D5%AF%D5%A1%D5%B6-%D5%BE%D5%A1%D6%80%D5%AF.png" },
    { id: "11", image: "https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%BE%D5%A1%D5%B6%D5%A4%D5%AB-%D4%B5%D5%8E-%D5%BA%D5%A1%D6%80%D5%BF%D5%A1%D5%BF%D5%B8%D5%BBD%D5%B6-%D5%AA%D6%80%D5%A1%D5%BD%D5%BE-%D5%BE%D5%A1%D6%80%D5%AF%D5%A5%D6%86.png" },
    { id: "12", image: "https://www.evoca.am/file_manager/Booklets/Images/%D4%BC%D5%AB%D5%A6%D5%AB%D5%B6%D5%A3.png" },
    { id: "13", image: "https://www.evoca.am/file_manager/Booklets/Images/%D5%B8%D6%82%D5%BD%D5%A1%D5%B6%D5%B8%D5%B2%D5%A1%D5%AF%D5%A1%D5%B6.png" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "booklets");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե հավաքածուն դատարկ է, լրացնում ենք default տվյալներով
          for (const booklet of defaultBooklets) {
            await setDoc(doc(colRef, booklet.id), booklet);
          }
          setBookletsData(defaultBooklets);
        } else {
          setBookletsData(snapshot.docs.map(doc => doc.data()));
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
    <section className="w-full bg-white py-12 px-4 md:px-12 font-sans">
      <div className="max-w-[800px] mx-auto">
        
        {/* Էջի Վերնագիր */}
        <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] mb-12">
          Բուկլետներ
        </h1>

        {/* Բուկլետների Ցանկ */}
        <div className="flex flex-col gap-6">
          {bookletsData.map((item, index) => (
            <div 
              key={item.id || index}
              className="bg-[#FAFAFA] rounded-3xl p-4 md:p-6 flex items-center justify-center shadow-sm border border-[#F0EDF5] hover:shadow-md transition-shadow overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={`Booklet ${index + 1}`} 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}