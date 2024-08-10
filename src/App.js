import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Hero/>
   <Skills/>
    <AboutMe/>
   </Router>
   </>
  );
}

export default App;
