 import React from 'react';
import ParentHeader from '../../Components/ParentHeader';
import Hero from './Components/Hero';
import BiometricSection from './Components/BiometricSection';
import BestFromEvoca from './Components/BestFromEvoca';
import CardSlider from './Components/CardSlider';
import Calculators from './Components/Calculators';
import OnlineBankingBanner from './Components/BankingBanner';
import PartnersSection from './Components/FamousBrands';
import FirebaseNewsSection from './Components/NewsSection';
import CurrencyAndBranchesSection from './Components/CurrencyAndBranchesSection';
import TestimonialSection from './Components/TestimontalSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ParentHeader />
      <Hero />
      <BiometricSection></BiometricSection>
      <BestFromEvoca></BestFromEvoca>
      <CardSlider></CardSlider>
      <Calculators></Calculators>
      <OnlineBankingBanner></OnlineBankingBanner>
      <PartnersSection></PartnersSection>
      <FirebaseNewsSection></FirebaseNewsSection>
      <CurrencyAndBranchesSection></CurrencyAndBranchesSection>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default HomePage;