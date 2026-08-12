   import ArjetghterMain from "./ArjetghterMain";
   import ArjetghterDetails from "./ArjetghterDetails";
   import ArjetghterAccordion from "./ArjetghterAccordion";
   import ArjetghterNews from "./ArjetghterNews";



   const Arjetghter = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
      <ArjetghterMain />
      <ArjetghterDetails />
      <ArjetghterAccordion />
      <ArjetghterNews />
    </div>
  );
};
 export default Arjetghter;