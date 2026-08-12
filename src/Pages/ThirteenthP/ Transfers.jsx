import React from 'react';
import TransferMain from './TransferMain';
import TransferGeneralRules from './TransferGeneralRules';
import TransferBanner from './TransferBanner';
import TransferAccordion from './TransferAccordion';
import TransferDocuments from './TransferDocuments';
import AcountBankingBannerrr from './NaxaFooter';
const Transfers = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
      <TransferMain  />
      <TransferGeneralRules  />
      <TransferBanner  />
      <TransferAccordion />
      <TransferDocuments />
      <AcountBankingBannerrr />
    </div>
  );
};

export default Transfers;