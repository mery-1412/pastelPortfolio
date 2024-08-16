import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const Home = () => {
  return (
  <>  
    <Navbar/>
    <Hero/>
    <Skills/>
    <AboutMe/>
    <ContactMe/>
    <Footer/>
  </>
  );
}

export default Home;
