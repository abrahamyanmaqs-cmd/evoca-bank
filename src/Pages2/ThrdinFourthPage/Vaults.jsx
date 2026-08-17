 import VaultsBox from "./VaultsBox";
 import VaultsTable1 from "./vaultsTable1";
  import VaultsTable2 from "./vaultsTable2";
  import VaultsDocument from "./vaultsDocument";
  import VaultsBanner from "./VaultsBanner";
 const Vaults = () => {
  return (
    <div className="w-full font-sans min-h-screen py-6">
      <VaultsBox />
      <VaultsTable1 />
      <VaultsTable2 />
      <VaultsDocument />
      <VaultsBanner />
    </div>
  );
};
 export default Vaults;