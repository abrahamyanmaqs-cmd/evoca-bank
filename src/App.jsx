 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Քո էջերն ու ընդհանուր Layout-ը
import HomePage from "./Pages/HomePage/HomePage";
import Individuals from "./Pages/SecondPage/Individuals";
import Business from "./Pages/ThirdPage/Business"; // Երրորդ էջը
import Payment from "./Pages/FourthPage/Payment"; // Չորրորդ էջը
import About from "./Pages/FifthPage/About"; // Հինգերորդ էջը (ստուգիր ֆոլդերիդ ճիշտ անունը)
import Layout from "./Components/Layout"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout-ը գլխավորն է, որը միշտ ցույց կտա Header-ը և Footer-ը */}
        <Route path="/" element={<Layout />}>
          
          {/* index-ը նշանակում է գլխավոր էջ (երբ հասցեն ուղղակի / է) */}
          <Route index element={<HomePage />} />
          
          {/* Անհատների էջը */}
          <Route path="individuals" element={<Individuals />} />
          
          {/* Բիզնեսի էջը */}
          <Route path="business" element={<Business />} />
          
          {/* Վճարումների էջը (Չորրորդ) */}
          <Route path="payments" element={<Payment />} />

          {/* Մեր մասին էջը (Հինգերորդ) */}
          <Route path="about" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;