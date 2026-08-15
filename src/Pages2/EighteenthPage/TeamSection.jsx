import React, { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "ՎԱՐՈՒԺԱՆ ԱՎԵՏԻՔՅԱՆ, LL.M., MPA",
    role: "Խորհրդի նախագահ",
    image: "https://www.evoca.am/images-cache/team_members/1/16776012013335/230x230.png"
  },
  {
    id: 2,
    name: "ՄԱՐՏԱ ԷԶԱՌՐԻ",
    role: "Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
    image: "https://www.evoca.am/images-cache/team_members/1/17544805530896/230x230.png"
  },
  {
    id: 3,
    name: "ՎԱԶԳԵՆ ԳԵՎՈՐԳՅԱՆ, MBA, PhD",
    role: "Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ",
    image: "https://www.evoca.am/images-cache/team_members/1/17550915579199/230x230.png"
  },
  {
    id: 4,
    name: "ՄԱՐԻՆԱ ԲՈՒԿԻ, MBA",
    role: "Խորհրդի անդամ Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
    image: "https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png"
  },
  {
    id: 5,
    name: "ԽՈՍԵ ՄԱՐԻԱ ՄՈՐԵՆՈ ԴԵ ԲԱՐՐԵԳԱ, LL.M., MBA, PhD",
    role: "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
    image: "https://www.evoca.am/images-cache/team_members/1/1675080847328/230x230.png"
  },
  {
    id: 6,
    name: "ՏԱԹԵՎԻԿ ԶԱՆՈՅԱՆ, MBA",
    role: "Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ",
    image: "https://www.evoca.am/images-cache/team_members/1/16602030046225/230x230.png"
  },
  {
    id: 7,
    name: "ՊԻԵՐ ԿԱԶԻՅԱԿ, MBA",
    role: "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
    image: "https://www.evoca.am/images-cache/team_members/1/17544805424545/230x230.png"
  }
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full py-10 px-4 md:px-16 bg-white font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Վերնագիր */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1C1C1E] mb-2">
          Ղեկավարություն
        </h1>
        <h3 className="text-base md:text-lg font-bold text-[#1C1C1E] mb-10">
          Բանկի խորհուրդ
        </h3>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
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
                  
                  {/* Եռանկյունը հետևում (շրջված վիճակով՝ սուրը ներքև, լայնը վերև) */}
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