import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ճշգրտիր ուղին ըստ քո նախագծի
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

export default function ManagementBoard() {
  const [hoveredId, setHoveredId] = useState(null);
  const [managementMembers, setManagementMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Սկզբնական տվյալներ (եթե Firebase-ում դատարկ է)
  const defaultMembers = [
    {
      id: "1",
      name: "ԿԱՐԵՆ ԵՂԻԱԶԱՐՅԱՆ, MBA, PhD",
      role: "Վարչության նախագահ",
      image: "https://www.evoca.am/images-cache/team_members/1/1660202833495/230x230.png"
    },
    {
      id: "2",
      name: "ԱՐՄԵՆ ՀԱԿՈԲՅԱՆ, PhD",
      role: "Վարչության նախագահի առաջին տեղակալ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602027630068/230x230.png"
    },
    {
      id: "3",
      name: "ՏԱԹԵՎԻԿ ԽԱՉԱՏՐՅԱՆ, MBA, PMP",
      role: "Վարչության նախագահի տեղակալ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602030244095/230x230.png"
    },
    {
      id: "4",
      name: "ՀԱՅԿ ՊԵՏՐՈՍՅԱՆ",
      role: "Վարչության նախագահի տեղակալ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602028118681/230x230.png"
    },
    {
      id: "5",
      name: "ԼԻԼԻԹ ԳԱԲՈՅԱՆ, MBA",
      role: "Վարչության նախագահի տեղակալ ֆինանսական գծով",
      image: "https://www.evoca.am/images-cache/team_members/1/16602028538342/230x230.png"
    },
    {
      id: "6",
      name: "ԷՄՄԱ ԶԱՆԻՆՅԱՆ, MBA, PhD, FCCA",
      role: "Վարչության անդամ, Գլխավոր հաշվապահ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602027917723/230x230.png"
    },
    {
      id: "7",
      name: "ՍՄԲԱՏ ՄԱՐՏԻՐՈՍՅԱՆ",
      role: "Վարչության անդամ, Իրավաբանական վարչության պետ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602029763987/230x230.png"
    },
    {
      id: "8",
      name: "ՄՀԵՐ ՍԱՀԱԿՅԱՆ",
      role: "Վարչության անդամ, Ծրագրավորման և գործառնական համակարգերի վարչության պետ",
      image: "https://www.evoca.am/images-cache/team_members/1/16602028738374/230x230.png"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "management_board_members");
        const snapshot = await getDocs(colRef);

        if (snapshot.empty) {
          // Եթե հավաքածուն դատարկ է, լրացնում ենք default տվյալներով
          for (const member of defaultMembers) {
            await setDoc(doc(colRef, member.id), member);
          }
          setManagementMembers(defaultMembers);
        } else {
          setManagementMembers(snapshot.docs.map(doc => doc.data()));
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
        
        {/* Վերնագիր */}
        <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1E] mb-10">
          Բանկի վարչություն
        </h3>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {managementMembers.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <div 
                key={member.id}
                className="flex flex-col items-center text-center cursor-pointer group"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Նկար և Եռանկյուն */}
                <div className="relative w-full max-w-[240px] h-[280px] flex items-end justify-center mb-4">
                  
                  {/* Եռանկյունը հետևում (սուրը ներքև, լայնը վերև) */}
                  <div className="absolute top-2 w-full flex justify-center">
                    <svg 
                      viewBox="0 0 200 170" 
                      className="w-[85%] h-auto transition-colors duration-300"
                    >
                      <polygon 
                        points="100,160 190,10 10,10" 
                        className={`transition-colors duration-300 ${
                          isHovered ? "fill-[#5E1EEB]" : "fill-[#F2F3F5]"
                        }`} 
                      />
                    </svg>
                  </div>

                  {/* Անձի նկար՝ կլորացված եզրերով */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative z-10 w-full h-[250px] object-cover object-top rounded-2xl"
                  />
                </div>

                {/* Անուն Ազգանուն */}
                <h4 className={`text-sm font-bold mb-2 transition-colors duration-300 max-w-[240px] ${
                  isHovered ? "text-[#5E1EEB]" : "text-[#1C1C1E]"
                }`}>
                  {member.name}
                </h4>

                {/* Պաշտոն */}
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