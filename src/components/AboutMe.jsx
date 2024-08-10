import React from "react";
import amv from "/home/mery1412/webProjects/portfolio/src/images/aboutmeVec.png"



const AboutMe = () => {
    return(
        <div id="about-me" className='w-full bg-white py-16 px-4'>
        <div className='max-w-[2000px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={amv} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-mont py-2 mb-4'>About me</h1>
            <p className="font-mont w-[70%] mt-4 text-lg">
            Computer science 4th year student, specialized in computer systems engineering, willing to share my experience and projects on this Portfolio website.
            </p>
          </div>
        </div>
      </div>
    )
}

export default AboutMe;