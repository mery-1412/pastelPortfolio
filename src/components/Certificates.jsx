import React from "react";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import cert1 from "/home/mery1412/webProjects/portfolio/src/images/certs/AIT CHABANE Meriem_GDSC-1.png"
import cert2 from "/home/mery1412/webProjects/portfolio/src/images/certs/certificate-of-completion-for-getting-started-with-spring-boot-1.png"
import cert3 from "/home/mery1412/webProjects/portfolio/src/images/certs/Python_Essentials_1_Badge20230926-28-2i2kzs-1.png"


const Certificates = () =>{
        const navigate = useNavigate();
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
      <button
        onClick={() => navigate('/')} // Navigate to home on click
        className="bg-[#B8EADD] w-[200px] rounded-3xl font-mont font-medium my-6 py-3 ml-11 text-black hover:bg-[#7cdac4] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Back to Home
      </button>
      
            <div className="flex justify-center items-center min-h-screen p-11 ">
              <div className="w-full max-w-[60%]">
              <h1 className="text-3xl font-mont font-medium mb-6 p-11">Certificates</h1> {/* Heading added */}
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
            </div>
          );
}

export default Certificates;