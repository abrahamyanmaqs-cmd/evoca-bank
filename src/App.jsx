import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Individuals from "./Pages/SecondPage/Individuals";
import Business from "./Pages/ThirdPage/Business";  
import Payment from "./Pages/FourthPage/Payment";  

// Եթե ձեր ֆայլը գտնվում է Pages2/SeventeenPage թղթապանակում, ուղին ուղղեք այսպես.
import AboutUs from "./Pages2/SeventeenthPage/AboutUs";

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
        {/* Layout-ը ապահովում է, որ վերևում լինի Header-ը, մեջտեղում փոխվող էջերը (<Outlet />), ներքևում՝ Footer-ը */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="individuals" element={<Individuals />} />
          <Route path="business" element={<Business />} />
          <Route path="payments" element={<Payment />} />
          
          {/* Սա այն routing-ն է, որը բացում է ձեր նոր AboutUs էջը Layout-ի մեջտեղում */}
          <Route path="about" element={<AboutUs />} />

          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} /> 
          <Route path="career" element={<Career />} />
          <Route path="loans" element={<Individualss />} />  
          <Route path="cards" element={<Cardss />} />  
          <Route path="deposits" element={<Avandner />} />  
          <Route path="accounts" element={<Acount />} />  
          <Route path="transfers" element={<Transfers />} />  
          <Route path="securities" element={<Arjetghter />} />
          <Route path="evocasalary" element={<EvocaSALARY />} />
          <Route path="evocatouch" element={<EvocaTouch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;