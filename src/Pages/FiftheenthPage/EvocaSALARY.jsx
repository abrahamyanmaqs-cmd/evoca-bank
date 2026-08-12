import EvocaSalaryHero from "./EvocaSalaryHero";
import EvocaSalaryContent from "./EvocaSalaryContent";
import EvocasNews from "./EvocasNewss";
import EvocaSalaryFAQ from "./EvocaSalaryFAQ";


const EvocaSALARY = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-6">
    <EvocaSalaryHero />
    <EvocaSalaryContent />
    <EvocasNews />
    <EvocaSalaryFAQ />
    </div>
  );
};

export default  EvocaSALARY;