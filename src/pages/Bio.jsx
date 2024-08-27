import React from "react";
import exe from "/home/mery1412/webProjects/portfolio/src/images/5409687.jpg"


const Bio =  ()=>{
    return(
        <div className="bg-white w-full h-full">
        <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${exe})`,
           } }
        ></div>
        <div className="grid md:grid-cols-2 h-screen">
            <div className="col-span-1 h-full top-0 left-0">
                <div className="fixed w-1/2 h-full flex flex-col m-32 pl-52">
                    <h1 className="font-mont font-medium text-5xl pl-4 pb-0"> BIOGRAPHY</h1>                   
                    <h3 className="font-mont font-regular text-2xl p-4"> Ait Chabane Merieme</h3>
                    <p className="font-mont font-light text-l p-4 mb-24"> Back-End developer & Computer Science Student</p>
                        <div className="flex flex-col justify-start p-4 rounded-lg w-[250px]">
                           <ul className="space-y-4 " >
                                <li><a href="" className="font-mont font-regular transition duration-300 hover:text-gray-500">Academic Experience</a></li>
                                <li><a href="" className="font-mont font-regular transition duration-300 hover:text-gray-500">Job Experience</a></li>
                                <li><a href="" className="font-mont font-regular transition duration-300 hover:text-gray-500">Self Experience</a></li>
                          </ul>
                       </div>
                </div>

            </div>

            {/* Vertical line */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80%] w-[1px] bg-gray-200"></div>

            <div className="col-span-1 h-full overflow-y-scroll bg-white text-black">
                 <div className="flex flex-col justify-start m-32 ">
                    <p className="font-mont font-light text-m pb-11 z-10">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex flex-row mt-11 mb-11 justify-start gap-24 p-11 rounded-xl backdrop-blur-lg bg-opacity-30 border border-white/20 shadow-lg transition duration-300 hover:bg-opacity-50 hover:backdrop-blur-2xl hover:shadow-xl">
                         <h1>2021-2022</h1>
                          <p>Got the BAC exams  </p>
                    </div>
                    <div className="flex flex-row  mb-11 justify-start gap-24 p-11 rounded-xl backdrop-blur-lg bg-opacity-30 border border-white/20 shadow-lg transition duration-300 hover:bg-opacity-50 hover:backdrop-blur-2xl hover:shadow-xl ">
                        <h1>2022-2023</h1>
                        <p>1 ere esi sba</p>
                    </div>
                 </div>
            </div>

        </div>
        </div>
    )
}

export default Bio