import React from "react";
import projet from "/home/mery1412/webProjects/portfolio/src/images/pexels-ifreestock-585752.jpg";

const Blog = () => {
    return (
        <div className="max-w-[1700px] mx-auto my-16 p-8 grid gap-11 text-black sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="relative bg-[#BAE7DC] h-[380px] rounded-2xl overflow-hidden">
                <div className="p-4">
                    <p className="font-mont font-bold text-black text-xl">Project 1</p>
                </div>
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={projet}
                    alt="Project 1"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-950 to-transparent p-11 rounded-b-2xl">
                    <div className="absolute bottom-4 right-4 bg-transparent">
                    <button className="font-mont font-medium text-[#BAE7DC] text-2xl">Read more</button>
                     </div>
                </div>

            </div>
            <div className="relative bg-[#E4CDF6] h-[380px] rounded-2xl overflow-hidden">
                <div className="p-4">
                    <p className="font-mont font-bold text-black text-xl">Project 1</p>
                </div>
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={projet}
                    alt="Project 1"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-950 to-transparent p-11 rounded-b-2xl">
                    <div className="absolute bottom-4 right-4 bg-transparent">
                    <button className="font-mont font-medium text-[#E4CDF6] text-2xl">Read more</button>
                     </div>
                </div>

            </div>
            <div className="relative bg-[#FEE1E9] h-[380px] rounded-2xl overflow-hidden">
                <div className="p-4">
                    <p className="font-mont font-bold text-black text-xl">Project 1</p>
                </div>
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={projet}
                    alt="Project 1"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-950 to-transparent p-11 rounded-b-2xl">
                    <div className="absolute bottom-4 right-4 bg-transparent">
                    <button className="font-mont font-medium text-[#FEE1E9] text-2xl">Read more</button>
                     </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;
