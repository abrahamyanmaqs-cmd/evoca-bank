import React from "react";
import CareerHero from "./CareerHero";
import CareerWhyEvoca from "./CareerWhyEvoca";
import CareerCultureSlider from "./CareerCultureSlider";
import CareerTeamQuotes from "./CareerTeamQuotes";
import CareerJoinForm from "./CareerJoinForm";
const Career = () => {
  return (
    <div className="w-full bg-[#F8F9FA] font-sans min-h-screen py-6">
       <CareerHero />
       <CareerWhyEvoca />
       <CareerCultureSlider />
       <CareerTeamQuotes />
       <CareerJoinForm />

    </div>
  );
};

export default Career;