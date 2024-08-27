import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Bio from "./pages/Bio";

function App() {
  return (

  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cert" element={<Certificates />} />  
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/links" element={<Bio/>}/>
  
    </Routes>
  </Router>
  );
}

export default App;
