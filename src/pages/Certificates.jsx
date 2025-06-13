import React from "react";
import Slider from 'react-slick';
import cert1 from "../images/certs/cert.jpg"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import certVec from "../images/certsVec.png"


const Certificates = () =>{
        const settings = {
          dots: true,  // Show dots below the carousel
          infinite: true,  // Infinite loop sliding
          speed: 500,  // Transition speed in milliseconds
          slidesToShow: 1,  // Number of slides to show at a time
          slidesToScroll: 1,  // Number of slides to scroll at a time
          autoplay: true,  // Enable autoplay
          autoplaySpeed: 3000,  // Delay between slides
          centerMode: true,  // Center the active slide
          centerPadding: '0px',  // Remove padding around the center slide
        };
    
    
        return (
      <div>
        <div className="fixed w-full z-50 bg-transparent">
           <Navbar/>
        </div>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover h-[100%]"
        style={{
          backgroundImage: `url(${certVec})`,
        }}
      ></div>
            <div className="flex justify-center items-center min-h-screen ">
              <div className="w-full  h-[600px] p-20 md:max-w-[70%] xl:max-w-[50%]">
                 <div className="relative">
                    <img src={cert1} alt="Certificate 1" className="object-cover w-full h-auto rounded-lg " />
                  </div>
              </div>
            </div>
        <Footer/> 
      </div>
          );
}

export default Certificates;