 import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentCategories, setPaymentCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialCategories = [
    {
      id: 1,
      title: "EVOCABANK",
      image: "https://resource.evoca.am/images/WebPayment/evoca.png",
      path: "evocabank",  
    },
    {
      id: 2,
      title: "Միջազգային բջջային օպերատորներ",
      image: "https://resource.evoca.am/images/WebPayment/international.png",
      path: "international",
    },
    {
      id: 3,
      title: "Կոմունալ վճարումներ",
      image: "https://resource.evoca.am/images/WebPayment/utility.png",
      path: "utility",
    },
    {
      id: 4,
      title: "Ինտերնետ և TV",
      image: "https://resource.evoca.am/images/WebPayment/internettv.png",
      path: "internet-tv",
    },
    {
      id: 5,
      title: "ՃՈ վճարներ",
      image: "https://resource.evoca.am/images/WebPayment/roadpolice.png",
      path: "road-police",
    },
    {
      id: 6,
      title: "Վարկային կազմակերպություններ",
      image: "https://resource.evoca.am/images/WebPayment/loan.png",
      path: "loans",
    },
    {
      id: 7,
      title: "Միջոցառումներ",
      image: "https://resource.evoca.am/images/WebPayment/event.png",
      path: "events",
    },
  ];

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const colRef = collection(db, "payments");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          for (const item of initialCategories) {
            await addDoc(colRef, item);
          }
          const newSnapshot = await getDocs(colRef);
          setPaymentCategories(newSnapshot.docs.map(doc => ({ firebaseId: doc.id, ...doc.data() })));
        } else {
          setPaymentCategories(snapshot.docs.map(doc => ({ firebaseId: doc.id, ...doc.data() })));
        }
      } catch (error) {
        console.error("Սխալ Firebase-ի հետ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) return <div className="text-center py-20">Բեռնվում է...</div>;

  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#1C1C1E] text-center mb-14 tracking-tight">
          Գլխավոր
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {paymentCategories.map((item) => (
            <div
              key={item.firebaseId || item.id}
              // Անցնում ենք ըստ item.path-ի, կամ ստուգում ենք title-ը
              onClick={() => {
                if (item.path) {
                  navigate(`/payments/${item.path}`);
                } else {
                  navigate(`/payments/${item.id}`);
                }
              }}
              className="bg-white rounded-[28px] p-8 shadow-sm transition-all duration-300 flex flex-col items-center justify-between text-center h-[260px] cursor-pointer relative border border-transparent hover:border-[#5E1EEB]/30 hover:shadow-md"
            >
              <div className="flex-grow flex items-center justify-center pt-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>

              <h3 className="text-[#1C1C1E] font-semibold text-[15px] md:text-[16px] leading-snug mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Payment;