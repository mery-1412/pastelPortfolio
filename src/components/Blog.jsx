import React from "react";
import projet from "/home/mery1412/webProjects/portfolio/src/images/mpm.png";

const Blog = () => {
    return (
        <div className="max-w-[1650px] mx-auto my-16 p-8 grid gap-11 text-black sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative bg-[#BAE7DC] h-[750px] rounded-2xl overflow-hidden">
                <div className="p-4">
                    <p className="font-mont font-medium text-black text-xl p-2">Mery's Portfolio</p>
                </div>
                <div className="relative h-[400px] px-6">
                <img
                    className="w-full h-full object-cover rounded-xl"
                    src={projet}
                    alt="Project 1"
                />
                <div className="pt-11 pl-2">
                    <p className="font-mont font-light">A personal portfolio static website, made with React and tailwind CSS. </p>
                </div>
                </div>

                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-500 to-transparent p-11 rounded-b-2xl">
                    <div className="absolute bottom-4 right-4 bg-transparent">
                    <button className="font-mont font-medium text-[#BAE7DC] text-2xl hover:text-white transition-all ease-in-out">Read more</button>
                     </div>
                </div>

            </div>
            <div className="relative bg-[#E4CDF6] h-[750px] rounded-2xl overflow-hidden">
                <div className="p-4">
                    <p className="font-mont font-medium text-black text-xl p-2">Project 1</p>
                </div>
                <div className="relative h-[400px] px-6">
                <img
                    className="w-full h-full object-cover rounded-xl"
                    src={projet}
                    alt="Project 1"
                />
                <div className="pt-11 pl-2">
                    <p className="font-mont font-light">DESCRIPTION</p>
                </div>
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-500 to-transparent p-11 rounded-b-2xl ">
                    <div className="absolute bottom-4 right-4 bg-transparent">
                    <button className="font-mont font-medium text-[#E4CDF6] text-2xl  hover:text-white transition-all ease-in-out">Read more</button>
                     </div>
                </div>

            </div>
            <div className="relative bg-[#FEE1E9] h-[750px] rounded-2xl overflow-hidden">
                <div className="p-4">
                    <p className="font-mont font-medium text-black text-xl p-2">Project 1</p>
                </div>
                <div className="relative h-[400px] px-6">
                <img
                    className="w-full h-full object-cover rounded-xl"
                    src={projet}
                    alt="Project 1"
                />
                <div className="pt-11 pl-2">
                    <p className="font-mont font-light">DESCRIPTION</p>
                </div>
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-500 to-transparent p-11 rounded-b-2xl">
                    <div className="absolute bottom-4 right-4 bg-transparent">
                    <button className="font-mont font-medium text-[#FEE1E9] text-2xl  hover:text-white transition-all ease-in-out">Read more</button>
                     </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
