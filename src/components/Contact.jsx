import { useContext, useEffect, useRef, useState } from 'react';
import { ComponentContext } from '../App';
import emailjs from "@emailjs/browser"
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
const {state,dispatch} = useContext(ComponentContext)
const [isloading,setIsLoading] = useState(false)
const formRef = useRef() 
useEffect(() => {
  const handleScroll = () => {
    const element = document.getElementById("contact");
    const top = element.getBoundingClientRect().top;

    if (top >=0 && top < window.innerHeight / 2) {
      dispatch({ type: "SET_IN_VIEW", payload: "contact" });
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);




const contactDetails = [
  {
    label: "Email",
    component: <AiOutlineMail />,
    value: "sameerpaul58@gmail.com",
    href: "mailto:sameerpaul58@gmail.com",
    type: "email",
  },
  {
    label: "Contact",
    component: <LuPhoneCall />,
    value: "6206382019",
    href: "tel:6206382019",
    type: "phone",
  },
  {
    label: "WhatsApp",
    component: <BsWhatsapp />,
    value: "6206382019",
    href: "tel:6206382019",
    type: "whatsapp",
  },
  {
    label: "LinkedIn",
    component: <GrLinkedin />,
    value: "linkedin.com/in/sameerpaul239421233",
    href: "https://www.linkedin.com/in/sameerpaul239421233",
    type: "linkedin",
  }
];


const sendEmail = async(e) => {
  setIsLoading(true)
  e.preventDefault()
  try {
    await emailjs.sendForm("service_hsi7w5w","template_2brg88d",formRef.current,"W2KVX2ijUclZtGu84")
    formRef.current.reset()
    
  } catch (error) {
    alert(`Failed to send message, Please try again. ${error.message}`)
  }
  setIsLoading(false)
} 

  return (
    <section
      id="contact"
      className="bg-[#e0e0e0] py-20 px-6 sm:px-10 font-abel border-t border-gray-300 font-barlow"
    >
      <h2 className="text-4xl font-normal text-center mb-12 text-gray-400 ">
        Get In Touch
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-30 md:gap-12">
        {/* Left: Contact Details */}
        
        <div className="flex text-gray-500 text-lg ">
          <div className='flex flex-col gap-10 w-fit'>
            <p className='text-2xl text-gray-800'>Contact Information</p>
            <div className='flex flex-col gap-5'>
              {
                contactDetails.map((details,index) => {
                  return (
                    <a href={details.href} className={`flex items-center gap-5 text-gray-500 ${details.type}`} key={index}>
                      <p className={`border rounded-full p-2 sm:p-4 text-md sm:text-xl ${details.type}-outline`}>{details.component}</p>
                      <div className='flex flex-col'>
                        <span className=''>{details.label}</span>{" "}
                        <p  className="text-md xss:text-xl">
                          {details.value}
                        </p>
                      </div>
                    </a>
                  )
                })
              }
            </div>
        </div>

        </div>

        {/* Right: Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <p className='text-2xl text-gray-800'>Write me an Email</p>
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
          <input
            type="text"
            placeholder="Your Name"
            name='name'
            required
            disabled={isloading}
            className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            name='email'
            required
            disabled={isloading}
            className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            name='message'
            required
            disabled={isloading}
            className="w-full px-4 py-2 border border-gray-400  resize-none focus:outline-none focus:ring-1 focus:ring-gray-700"
          ></textarea>
          <button
            type="submit"
            disabled={isloading}
            className="flex flex-row justify-center items-center gap-3 bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
          >
            <span>
              <FaPaperPlane />
            </span>
            <span>
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
