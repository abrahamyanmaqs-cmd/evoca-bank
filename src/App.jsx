import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Individuals from "./Pages/SecondPage/Individuals";
import Business from "./Pages/ThirdPage/Business";  
import Payment from "./Pages/FourthPage/Payment";  

import Managment from "./Pages2/EighteenthPage/Managment";
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
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="individuals" element={<Individuals />} />
          <Route path="business" element={<Business />} />
          <Route path="payments" element={<Payment />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="management" element={<Managment   />} />
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