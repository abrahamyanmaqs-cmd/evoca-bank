 import React, { useState } from "react";
import AboutHero from "./AboutHero";
import AboutVision from "./AboutVision";
import AboutMission from "./AboutMission";
import AboutHistory from "./AboutHistory";
import AboutValues from "./AboutValues";
import AboutCSR from "./AboutCSR";
import AboutLogo from "./AboutLogo";         
import AboutBrandbook from "./AboutBrandbook"; 
import AboutColors from "./AboutColors";     
import AboutVideo from "./AboutVideo";


const About = () => {
 

   

  return (
    <div className="w-full bg-white font-sans min-h-screen">
      
    
      

     
      <AboutHero />
      <AboutVision />
      <AboutMission />
      <AboutHistory />
      <AboutValues />
      <AboutCSR />
      <AboutLogo />
      <AboutBrandbook />
      <AboutColors />
      <AboutVideo/>

    </div>
  );
};

export default About;