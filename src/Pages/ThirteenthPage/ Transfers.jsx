import React from 'react';
import TransferMain from './TransferMain';
import TransferGeneralRules from './TransferGeneralRules';
const Transfers = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
      <TransferMain  />
      <TransferGeneralRules  />
    </div>
  );
};

export default Transfers;