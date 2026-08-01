 import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Քո էջերն ու ընդհանուր Layout-ը
import HomePage from "./Pages/HomePage/HomePage";
import Individuals from "./Pages/SecondPage/Individuals";
import Layout from "./Components/Layout"; // Սա այն ֆայլն է, որի մեջ Header-ներն ու Footer-ն են

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
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;