import EvocaSalaryHero from "./EvocaSalaryHero";
import EvocaSalaryContent from "./EvocaSalaryContent";
import EvocasNews from "./EvocasNewss";


const EvocaSALARY = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-6">
    <EvocaSalaryHero />
    <EvocaSalaryContent />
    <EvocasNews />
    </div>
  );
};

export default  EvocaSALARY;