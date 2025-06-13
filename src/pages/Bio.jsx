import React from "react";
import exe from "../images/5409687.jpg"
import Navbar from "../components/Navbar";


const Bio = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image - Full Screen */}
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
                style={{
                    backgroundImage: `url(${exe})`,
                    opacity: 0.8,
                }}
            />
            
            {/* Overlay to ensure readability */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] -z-5"></div>
            
            <Navbar />
            
            <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 min-h-screen relative">
                {/* Left Column */}
                <div className="col-span-1 backdrop-blur-sm">
                    <div className="md:sticky md:top-0 h-screen w-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 pt-20 md:pt-32 pb-10">
                        <h1 className="font-mont font-medium text-3xl md:text-4xl lg:text-5xl pb-0"> BIOGRAPHY</h1>                   
                        <h3 className="font-mont font-regular text-xl md:text-2xl py-2 md:py-4"> Ait Chabane Merieme</h3>
                        <p className="font-mont font-light text-md md:text-l mb-8 md:mb-16"> Back-End developer & Computer Science Student</p>
                        <div className="flex flex-col justify-start rounded-lg max-w-[250px]">
                           <ul className="space-y-3 md:space-y-4" >
                                <li><a href="" className="font-mont font-regular transition duration-300 hover:text-gray-500">Academic Experience</a></li>
                                <li><a href="" className="font-mont font-regular transition duration-300 hover:text-gray-500">Job Experience</a></li>
                                <li><a href="" className="font-mont font-regular transition duration-300 hover:text-gray-500">Self Experience</a></li>
                           </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-span-1backdrop-blur-sm">
                    <div className="flex flex-col justify-start px-4 sm:px-8 md:px-12 lg:px-16 pt-8 md:pt-32 pb-20">
                        <p className="font-mont font-light text-sm md:text-m pb-6 md:pb-11">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="flex flex-col md:flex-row mt-6 md:mt-11 mb-6 md:mb-11 justify-start md:gap-8 lg:gap-24 p-4 md:p-8 lg:p-11 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg transition duration-300 hover:bg-white/50 hover:backdrop-blur-2xl hover:shadow-xl">
                             <h1 className="font-bold mb-2 md:mb-0 whitespace-nowrap">2021-2022</h1>
                             <p>Got the BAC exams</p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-6 md:mb-11 justify-start md:gap-8 lg:gap-24 p-4 md:p-8 lg:p-11 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg transition duration-300 hover:bg-white/50 hover:backdrop-blur-2xl hover:shadow-xl">
                            <h1 className="font-bold mb-2 md:mb-0 whitespace-nowrap">2022-2023</h1>
                            <p>Computer Science college student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;