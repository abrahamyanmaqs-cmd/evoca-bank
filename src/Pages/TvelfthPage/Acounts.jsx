import AccountOpening from "./AccountOpening";
import AccountBanner from "./AccountBanner";
import AccountAccordion from "./AccountAccordion";

const Acount = () => {
  return (
    <div className="w-full  font-sans min-h-screen py-6">
   <AccountOpening />
   <AccountBanner />
   <AccountAccordion />
    </div>
  );
};

export default Acount;