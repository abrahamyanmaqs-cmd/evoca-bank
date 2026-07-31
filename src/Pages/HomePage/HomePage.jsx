 import React from 'react';
import ParentHeader from '../../Components/ParentHeader';
import Hero from './Components/Hero';
import BiometricSection from './Components/BiometricSection';
import BestFromEvoca from './Components/BestFromEvoca';
import CardSlider from './Components/CardSlider';
import Calculators from './Components/Calculators';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ParentHeader />
      <Hero />
      <BiometricSection></BiometricSection>
      <BestFromEvoca></BestFromEvoca>
      <CardSlider></CardSlider>
      <Calculators></Calculators>
    </div>
  );
};

export default HomePage;