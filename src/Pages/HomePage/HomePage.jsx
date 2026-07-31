 import React from 'react';
import ParentHeader from '../../Components/ParentHeader';
import Hero from './Components/Hero';
import BiometricSection from './Components/BiometricSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ParentHeader />
      <Hero />
      <BiometricSection></BiometricSection>
    </div>
  );
};

export default HomePage;