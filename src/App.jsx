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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;