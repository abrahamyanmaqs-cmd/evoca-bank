import EvocaTouchHero from "./EvocaTouchHero"
import DocumentsList from "./DocumentsList";
import Animation from "./Animation";
import TestimonialSectionn from "./NaxaFooter";



   const EvocaTouch = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
       <EvocaTouchHero />
       <DocumentsList />
       <Animation />
       <TestimonialSectionn />
    </div>
  );
};
 export default  EvocaTouch;