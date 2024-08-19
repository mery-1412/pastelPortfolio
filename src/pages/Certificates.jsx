import React from "react";
import Slider from 'react-slick';
import cert1 from "/home/mery1412/webProjects/portfolio/src/images/certs/AIT CHABANE Meriem_GDSC-1.png"
import cert2 from "/home/mery1412/webProjects/portfolio/src/images/certs/certificate-of-completion-for-getting-started-with-spring-boot-1.png"
import cert3 from "/home/mery1412/webProjects/portfolio/src/images/certs/Python_Essentials_1_Badge20230926-28-2i2kzs-1.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import certVec from "/home/mery1412/webProjects/portfolio/src/images/certsVec.png"


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
                <Slider {...settings}>
                  <div className="relative">
                    <img src={cert1} alt="Certificate 1" className="object-cover w-full h-auto rounded-lg " />
                  </div>
                  <div className="relative">
                    <img src={cert2} alt="Certificate 2" className="object-cover w-full h-auto rounded-lg" />
                  </div>
                  <div className="relative">
                    <img src={cert3} alt="Certificate 3" className="object-cover w-full h-auto rounded-lg" />
                  </div>
                </Slider>
              </div>
            </div>
        <Footer/> 
      </div>
          );
}

export default Certificates;