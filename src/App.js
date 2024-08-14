import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Hero/>
    <Skills/>
    <AboutMe/>
    <ContactMe/>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
