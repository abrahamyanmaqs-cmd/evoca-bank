import React from 'react';
import TransferMain from './TransferMain';
import TransferGeneralRules from './TransferGeneralRules';
import TransferBanner from './TransferBanner';
import TransferAccordion from './TransferAccordion';
const Transfers = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
      <TransferMain  />
      <TransferGeneralRules  />
      <TransferBanner  />
      <TransferAccordion />
    </div>
  );
};

export default Transfers;