import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Individuals from "./Pages/SecondPage/Individuals";
import Business from "./Pages/ThirdPage/Business";  
import Payment from "./Pages/FourthPage/Payment";  
import About from "./Pages/FifthPage/About"; 
import News from "./Pages/SixthPage/News";  
import Blog from "./Pages/SeventPage/Blog";
import Career from "./Pages/EigthinPage/Carier";
import Individualss from "./Pages/NinthPage/Individualss";
import Cardss from "./Pages/TenthPage/Cardss";
import Avandner from "./Pages/EleventhPage/Avandner";  
import Acount from "./Pages/TvelfthPage/Acounts";
import Transfers from "./Pages/ThirteenthP/ Transfers";
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
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="blog" element={<Blog />} /> 
          <Route path="career" element={<Career />} />
          <Route path="loans" element={<Individualss />} />  
          <Route path="cards" element={<Cardss />} />  
          <Route path="deposits" element={<Avandner />} />  
          <Route path="accounts" element={<Acount />} />  
          <Route path="transfers" element={<Transfers />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;