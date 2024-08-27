import React from "react";
import certificate from "/home/mery1412/webProjects/portfolio/src/images/certificate.png"
import projects from "/home/mery1412/webProjects/portfolio/src/images/project-management.png"
import links from "/home/mery1412/webProjects/portfolio/src/images/link.png"

const Skills = () =>{
    return(
    <div id="skills" className="relative w-full bg-[#f8f8f8] text-black py-32 p-11 ">
        <div className="flex justify-center">
            <h1 className="font-mont text-4xl ">My Skills</h1>
        </div>

         {/* Cards*/ }
        <div className="flex justify-center align-center space-x-11 mt-10">
       
        <a href="/cert" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mt-11 transition-transform duration-500 ease-in-out transform hover:scale-105 group">
            <div className="absolute inset-0 bg-[#FEE1E9]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-600 via-gray-1000/40 transition-transform duration-500 ease-in-out group-hover:from-[#e095a8] group-hover:to-[#ffeef2]"></div>
            <img src={certificate} alt="SKILL NAME" class="absolute inset-0 w-full h-full p-4 object-contain"/>
            <h3 class="z-10 mt-3 text-xl font-mont font-bold text-white">Certificates</h3>
        </a>

        <a href="/projects" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mt-11 transition-transform duration-500 ease-in-out transform hover:scale-105 group">
            <div className="absolute inset-0 bg-[#BAE7DC]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-600 via-gray-1000/40 transition-transform duration-500 ease-in-out group-hover:from-[#43c2a2] group-hover:to-[#d4f7ee]"></div>
            <img src={projects} alt="SKILL NAME" class="absolute inset-0 w-full h-full p-4 object-contain"/>
            <h3 class="z-10 mt-3 text-xl font-mont font-bold text-white">Projects</h3>
        </a>

        <a href="/links" className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-1/4 mt-11 transition-transform duration-500 ease-in-out transform hover:scale-105 group">
            <div className="absolute inset-0 bg-[#E4CDF6]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-500 via-gray-1000/40 transition-transform duration-500 ease-in-out group-hover:from-[#ad7bd3] group-hover:to-[#eadbf7]"></div>
            <img src={links} alt="SKILL NAME" class="absolute inset-0 w-full h-full p-2 object-contain"/>
            <h3 class="z-10 mt-3 text-xl font-mont font-bold text-white">Career</h3>
        </a>

        </div>
       
    </div>


    )
 
      
}

export default Skills;