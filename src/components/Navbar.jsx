import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
              <NavLink
                to="/"
                exact
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-5 border-b border-gray-100 md:dark:hover:text-white"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cert"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-5 border-b border-gray-100 md:dark:hover:text-white"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                }
              >
                Certificates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-5 border-b border-gray-100 md:dark:hover:text-white"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/links"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold p-5 border-b border-gray-100 md:dark:hover:text-white"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                }
              >
                Biography
              </NavLink>
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
            <NavLink
              to="/"
              exact
              className="p-5 border-b border-gray-100 md:dark:hover:text-white"
              activeClassName="text-blue-500 border-b-2 border-blue-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="p-5 border-b border-gray-100 md:dark:hover:text-white"
              activeClassName="text-blue-500 border-b-2 border-blue-500"
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className="p-5 border-b border-gray-100 md:dark:hover:text-white"
              activeClassName="text-blue-500 border-b-2 border-blue-500"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="p-5 border-b border-gray-100 md:dark:hover:text-white"
              activeClassName="text-blue-500 border-b-2 border-blue-500"
            >
              Contact me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
