import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

export default function InternalAudit() {
  const [hoveredId, setHoveredId] = useState(null);
  const [auditMembers, setAuditMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում ոչինչ չկա)
  const defaultMembers = [
    {
      id: "1",
      name: "ՆԱԶԵԼԻ ԷՂՈՅԱՆ, CIA",
      role: "Ներքին աուդիտի ստորաբաժանման ղեկավար",
      image: "https://www.evoca.am/images-cache/team_members/1/16282549740688/230x230.png"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "internal_audit_members");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե դատարկ է, լրացնում ենք default տվյալներով
          for (const member of defaultMembers) {
            await setDoc(doc(colRef, member.id), member);
          }
          setAuditMembers(defaultMembers);
        } else {
          setAuditMembers(snapshot.docs.map(doc => doc.data()));
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
        <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E] mb-10">
          Բանկի ներքին աուդիտ
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {auditMembers.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <div 
                key={member.id}
                className="flex flex-col items-center text-center cursor-pointer group"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative w-full max-w-[240px] h-[280px] flex items-end justify-center mb-4">
                  <div className="absolute top-2 w-full flex justify-center">
                    <svg viewBox="0 0 200 170" className="w-[85%] h-auto transition-colors duration-300">
                      <polygon 
                        points="100,160 190,10 10,10" 
                        className={`transition-colors duration-300 ${
                          isHovered ? "fill-[#5E1EEB]" : "fill-[#F2F3F5]"
                        }`} 
                      />
                    </svg>
                  </div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative z-10 w-full h-[250px] object-cover object-top rounded-2xl"
                  />
                </div>

                <h4 className={`text-sm font-bold mb-2 transition-colors duration-300 max-w-[240px] ${
                  isHovered ? "text-[#5E1EEB]" : "text-[#1C1C1E]"
                }`}>
                  {member.name}
                </h4>

                <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[240px]">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}