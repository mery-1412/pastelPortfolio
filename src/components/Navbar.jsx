import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const scrollToAboutMe = () => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHero = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  }; 

  const scrollToSkills = () => {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  }; 

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }; 


  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-[#E6DFEB] relative z-50 top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-cevat whitespace-nowrap dark:text-black">Mery's Portfolio</span>
        </div>

        <div className="hidden md:block w-full md:w-auto">
          <ul className="font-mont flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a onClick={scrollToHero} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                Home
              </a>
            </li>
            <li>
              <a onClick={scrollToAboutMe} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                About me
              </a>
            </li>
            <li>
              <a onClick={scrollToSkills} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                Skills
              </a>
            </li>
         
            <li>
              <a onClick={scrollToContact} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">
                Contact me
              </a>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="block md:hidden p-4 cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[50%] md:w-[25%] h-full border-r border-r-gray-200 bg-[#E6DFEB] ease-in-out duration-500 z-50"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-500 z-50"
        }
      >
        <h1 className="text-4xl font-cevat mt-6 dark:text-black p-5">Mery's Portfolio</h1>
        <ul className="pt-24 uppercase space-y-10">
          <li>
            <a href="#" className="p-5 border-b border-gray-100 md:dark:hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="p-5 border-b border-gray-100 md:dark:hover:text-white">
              About me
            </a>
          </li>
          <li>
            <a href="#" className="p-5 border-b border-gray-100 md:dark:hover:text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="p-5 border-b border-gray-100 md:dark:hover:text-white">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
