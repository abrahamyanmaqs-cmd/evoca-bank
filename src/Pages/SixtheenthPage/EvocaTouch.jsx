import EvocaTouchHero from "./EvocaTouchHero"
import DocumentsList from "./DocumentsList";
import Animation from "./Animation";



   const EvocaTouch = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
       <EvocaTouchHero />
       <DocumentsList />
       <Animation />
    </div>
  );
};
 export default  EvocaTouch;