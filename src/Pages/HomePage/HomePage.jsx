 import React from 'react';
import ParentHeader from '../../Components/ParentHeader';
import Hero from './Components/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ParentHeader />
      <Hero />
    </div>
  );
};

export default HomePage;