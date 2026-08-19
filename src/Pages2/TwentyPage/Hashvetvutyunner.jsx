import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc, query, orderBy } from "firebase/firestore";

export default function Hashvetvutyunner() {
  const [auditReports, setAuditReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultReports = [
    { id: "2025", year: 2025, title: "2025 Աուդիտորական եզրակացություն", href: "#" },
    { id: "2024", year: 2024, title: "2024 Աուդիտորական եզրակացություն", href: "#" },
    { id: "2023", year: 2023, title: "2023 Աուդիտորական եզրակացություն", href: "#" },
    // ... մնացած տարեթվերը
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "audit_reports");
        // Տվյալները վերցնում ենք ըստ տարեթվի՝ նվազման կարգով
        const q = query(colRef, orderBy("year", "desc"));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          for (const report of defaultReports) {
            await setDoc(doc(colRef, report.id), report);
          }
          setAuditReports(defaultReports);
        } else {
          setAuditReports(snapshot.docs.map(doc => doc.data()));
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
        
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1C1C1E] mb-10">
          Աուդիտորական եզրակացություն
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {auditReports.map((report) => (
            <div key={report.id} className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#1C1C1E]">
                {report.year}
              </h2>

              <a 
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 md:p-5 bg-[#F8F8FA] hover:bg-[#F2EDFF] border border-transparent hover:border-[#5E1EEB]/20 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="text-[#5E1EEB] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H13M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="15" r="4" fill="#5E1EEB" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 13V17M12 17L10.5 15.5M12 17L13.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm md:text-base font-bold text-[#1C1C1E] group-hover:text-[#5E1EEB] transition-colors">
                  {report.title}
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}