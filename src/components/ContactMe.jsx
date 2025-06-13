import React from "react";
import telephone from "../images/telephone.png"
import linkedIn from "../images/social.png"
import mail from "../images/mail.png"


const ContactMe = () =>{
    return(
        <div  id="contact" className="text-black bg-[#f8f8f8] w-full h-[650px] pt-20 pl-11 pb-20">
            <div className="flex justify-center mb-20"> 
                <h1 className="font-mont text-4xl">Contact Me</h1>
            </div>

            <div className="relative max-w-[1500px] mx-auto grid md:grid-cols-2 ">
                <div className="relative h-[420px] items-center">
                    <h1 className=" text-black text-3xl font-mont "> E-mail Me </h1>
                        <input id="mail" class="mt-10 block resize-none p-4 w-[90%] text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:text-black font-mont" placeholder="Write your E-mail address here.."></input> 
                        <textarea id="message" class="mt-10 block resize-none p-4 w-[90%] h-[150px] text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:text-black font-mont" placeholder="Write your message here..."></textarea> 
                      <div className="absolute right-6 bottom-0">
                        <button className="bg-[#B8EADD] w-[120px] rounded-3xl font-mont font-medium my-6 py-3 text-black text-s hover:bg-[#7cdac4] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out">
                           Send
                        </button>
                      </div>
                </div>
                
                <div className="absolute inset-y-0 left-1/2 w-[2.5px] bg-white"></div>

                <div className="relative ml-20">
                    <h1 className="text-black text-3xl font-mont mb-10">Contacts</h1>
                    <div className="flex gap-4 items-center mb-6">
                        <img  className="w-8" src={mail} alt="Linked In" />
                        <p className="font-mont text-xl ">meriemeaitchabane04@gmail.com</p>
                    </div>
                    <div className="flex gap-4 items-center mb-6">
                        <img  className="w-8" src={linkedIn} alt="Linked In" />
                        <p className="font-mont text-xl ">Merieme Ait Chabane</p>
                    </div>
                    <div className="flex gap-4 items-center mb-6">
                        <img  className="w-8" src={telephone} alt="Linked In" />
                        <p className="font-mont text-xl">0552 69 72 87</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactMe;