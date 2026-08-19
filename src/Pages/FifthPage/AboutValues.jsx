import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const AboutValues = () => {
  const [valuesData, setValuesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialValues = [
    {
      title: "Human-first",
      text: "Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը: Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից՝ մարդկանց համար:",
    },
    {
      title: "Նորարարություն",
      text: "Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է: Մենք բաց ենք և պատրաստակամ զարգանալու համար:",
    },
    {
      title: "Դրական ազդեցություն",
      text: "Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն:",
    },
  ];

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const colRef = collection(db, "values");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          for (const item of initialValues) {
            await addDoc(colRef, item);
          }
          const newSnapshot = await getDocs(colRef);
          setValuesData(newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setValuesData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchValues();
  }, []);

  if (loading) return <div className="text-center py-20">Բեռնվում է...</div>;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16">
      
      {/* Գլխավոր Վերնագիր */}
      <h2 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1E] mb-14 tracking-tight">
        Արժեքներ և առաջնայնություններ
      </h2>

      {/* 3 Սյունակների Ցանց (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {valuesData.map((item) => (
          <div key={item.id} className="flex flex-col">
            {/* Վերնագիր (Մանուշակագույն) */}
            <h3 className="text-[#5E1EEB] text-[24px] md:text-[28px] font-bold mb-4">
              {item.title}
            </h3>
            {/* Տեքստ */}
            <p className="text-[#3A3A3C] text-[16px] md:text-[17px] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutValues;