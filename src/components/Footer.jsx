import React from "react";
import telephone from "../images/telephone.png"
import linkedIn from "../images/social.png"
import mail from "../images/mail.png"



const Footer = () =>{
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
    
    
    return(
        <div className="relative flex flex-col gap-10 bg-[#E6DFEB] text-black h-[460px] items-center">
            <div className="flex justify-center">
                <h1 className="font-cevat text-4xl pt-10">Mery's Portfolio</h1>
            </div>
            <div className="flex flex-col items-center gap-5">
                <a onClick={scrollToHero} className="font-mont font-normal text-l">Home</a>
                <a onClick={scrollToSkills} className="font-mont font-normal text-l"> My Skills</a>
                <a onClick={scrollToAboutMe} className="font-mont font-normal text-l"> About Me</a>
                <a onClick={scrollToContact} className="font-mont font-normal text-l"> Contact Me</a>
            </div>
            <div className="w-[80%] mx-auto my-4 h-[0.5px] bg-black"></div>
            <h2 className="font-mont font-light">
            © {new Date().getFullYear()} Mery's Portfolio. All rights reserved.
            </h2>
        </div>
    )
}

export default Footer;