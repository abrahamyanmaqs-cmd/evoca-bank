import TeamSection from "./TeamSection";
import ManagementBoard from "./ManagementBoard";
import InternalAudit from "./InternalAudit";

const Managment = () => {

  return (
    <div className="w-full bg-white font-sans min-h-screen">
     
<TeamSection />
<ManagementBoard />
<InternalAudit />
    </div>
  );
};

export default Managment;