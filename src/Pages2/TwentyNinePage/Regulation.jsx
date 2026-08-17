import RegulationText from "./RegulationText";
import RegulationDocument from "./RegulationDocument";


const Regulation = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
       <RegulationText />
       <RegulationDocument />
    </div>
  );
};
 export default Regulation;