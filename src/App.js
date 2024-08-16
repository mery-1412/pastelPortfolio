import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Certificates from "./pages/Certificates";
import Home from "./pages/Home";

function App() {
  return (
  <>
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cert" element={<Certificates />} />  
    </Routes>
  </Router>
  </>
  );
}

export default App;
