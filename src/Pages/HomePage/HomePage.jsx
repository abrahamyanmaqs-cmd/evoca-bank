 import React from 'react';
 
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
import Footer from '../../Components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
       
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
      <Footer></Footer>
    </div>
  );
};

export default HomePage;