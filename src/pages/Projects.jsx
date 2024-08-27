import React from "react";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects =() =>{
    return(
        <>
        <div className="h-full w-full">
        <div className="fixed w-full z-50">
            <Navbar/>
        </div>
        <div className="flex">
            <div className="pl-11 mt-32">
                <h1 className="font-mont font-regular text-black text-3xl">My Projects</h1>
            </div>  
        </div>
        <Blog/>
        </div>
        <Footer/>
        </>
    )
}


export default Projects