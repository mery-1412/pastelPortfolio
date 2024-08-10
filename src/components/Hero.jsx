import React from 'react';
import heroVec from '/home/mery1412/webProjects/portfolio/src/images/hero5.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  const scrollToAboutMe = () => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroVec})`,
        }}
      ></div>

      {/* Text and Button */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-black p-6">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-mont md:py-6 text-[#7A87B8]">
          Welcome
        </h1>
        <div className="flex justify-center items-center mt-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-mont py-4">
            Here is Mery's Portfolio
          </p>
        </div>
        <p className="md:text-2xl text-xl font-mont text-gray-500 mt-4">
          Want to know more about her?
        </p>
        <button onClick={scrollToAboutMe} className="bg-[#B8EADD] w-[200px] rounded-3xl font-mont my-6 py-3 text-black">
          About me
        </button>
      </div>
    </div>
  );
};

export default Hero;
