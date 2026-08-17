import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Individuals from "./Pages/SecondPage/Individuals";
import Business from "./Pages/ThirdPage/Business";  
import Payment from "./Pages/FourthPage/Payment";  
import Managment from "./Pages2/EighteenthPage/Managment";
import AboutUs from "./Pages2/SeventeenthPage/AboutUs";
import Shareholders from "./Pages2/NinteenthPage/Bajneterer";
import Hasvetvutyunner from "./Pages2/TwentyPage/Hashvetvutyunner";
import Laws from "./Pages2/TwentyOnethPage/Laws";
import Tariff from "./Pages2/TwentyTwothPage/tarifs";
import Property from "./Pages2/TwentyThreePage/Property";
import Builders from "./Pages2/TwentyFourthPage/Builders";
import Auto from "./Pages2/TwentyFifthPage/Auto";
import Arxive from "./Pages2/TwentySixthPage/Arxive";
import Rights from "./Pages2/TwentySeventhPage/Rights";
import Text from "./Pages2/TwenyEightPage/Text";
import Regulation from "./Pages2/TwentyNinePage/Regulation";
 import Aml from "./Pages2/ThrdinOnethPage/Aml";
import Privacy from "./Pages2/ThirdinthPage/Privacy";
import CardsRules from "./Pages2/ThirdinTwothPage/CardsRules";
import Online from "./Pages2/ThrdinThreethPage/Online";
import Vaults from "./Pages2/ThrdinFourthPage/Vaults";
import Faq from "./Pages2/ThrdinFivePage/Faq";
import Announcements from "./Pages2/ThrdinSIxPage/Announcements";
import Dibrary from "./Pages2/ThrdinSeventhPage/Dibrary";
import Bukletner from "./Pages2/ThrdinEighthPage/Bukletner";
import Kap from "./Pages2/ThirdinNinePage/Kap";
import Map from "./Pages2/FourtinthPage/Map";
import AboutCard from "./Pages3/FourthinOnePage/AboutCard";
import AboutCard1 from "./Pages3/FourtinTwothPage/AboutCard1";
import AboutCard2 from "./Pages3/FourteentTreethPage/AboutCard2";
import AboutCard3 from "./Pages3/FourtinFourthPage/AboutCard3";
import AboutCard4 from "./Pages3/FourthinFifthPage/AboutCard4";
//2
import News from "./Pages/SixthPage/News";  
import Blog from "./Pages/SeventPage/Blog";
import Career from "./Pages/EigthinPage/Carier";
import Individualss from "./Pages/NinthPage/Individualss";
import Cardss from "./Pages/TenthPage/Cardss";
import Avandner from "./Pages/EleventhPage/Avandner";  
import Acount from "./Pages/TvelfthPage/Acounts";
import Transfers from "./Pages/ThirteenthP/ Transfers";
import Arjetghter from "./Pages/FourthinthPage/Arjetghter";
import EvocaSALARY from "./Pages/FiftheenthPage/EvocaSALARY";
import EvocaTouch from "./Pages/SixtheenthPage/EvocaTouch";
import Layout from "./Components/Layout"; 
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="individuals" element={<Individuals />} />
          <Route path="business" element={<Business />} />
          <Route path="payments" element={<Payment />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="management" element={<Managment />} />
          <Route path="shareholders" element={<Shareholders />} />
          <Route path="reports" element={<Hasvetvutyunner />} />
          <Route path="laws" element={<Laws />} />
          <Route path="tariffs" element={<Tariff />} />
          <Route path="property" element={<Property />} />
          <Route path="builders" element={<Builders />} />
          <Route path="archive" element={<Arxive />} />
          <Route path="rights" element={<Rights />} />
          <Route path="criteria" element={<Text />} />
          <Route path="regulation" element={<Regulation />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="/aml" element={<Aml />} />
          <Route path="/cards-rules" element={<CardsRules />} />
          <Route path="/online" element={<Online />} />
          <Route path="/vaults" element={<Vaults />} />
           <Route path="/faq" element={<Faq />} />
          <Route path="/announcements" element={< Announcements/>} />
          <Route path="/dibrary" element={<Dibrary />} />
           <Route path="/booklets" element={<Bukletner/>} />
           <Route path="/feedback" element={<Kap/>} />
            <Route path="/map" element={<Map/>} />
             <Route path="/about-card" element={<AboutCard/>} />
            <Route path="/salary-project" element={<AboutCard1/>} />
            <Route path="/contact" element={<AboutCard2/>} />
             <Route path="/visa-vision" element={<AboutCard3/>} />
               <Route path="/visa-infinite" element={<AboutCard4/>} />





          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} /> 
          <Route path="career" element={<Career />} />
          <Route path="loans" element={<Individualss />} />  
          <Route path="cards" element={<Cardss />} />  
          <Route path="deposits" element={<Avandner />}  />  
          <Route path="accounts" element={<Acount />} />  
          <Route path="transfers" element={<Transfers />} />  
          <Route path="securities" element={<Arjetghter />} />
          <Route path="evocasalary" element={<EvocaSALARY />} />
          <Route path="evocatouch" element={<EvocaTouch />} />
          <Route path="partners" element={<Auto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;