import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import { ComponentContext } from '../App';


const Hero = () => {
const {state,dispatch} = useContext(ComponentContext)
useEffect(() => {
  const handleScroll = () => {
    const element = document.getElementById("hero");
    const top = element.getBoundingClientRect().top;


    if (top >= 0 && top < window.innerHeight / 2) {
      dispatch({ type: "SET_IN_VIEW", payload: "hero" });
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return (
        <div
        id='hero'
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-[#e0e0e0] text-gray-500">
            {/* Welcome Tagline */}
            <p className="text-xl sm:text-2xl font-semibold leading-tight font-light">
                Welcome to my portfolio
            </p>

            {/* Main Name */}
            <h1 className="gap-4 items-end font-semibold mt-4">
                <span className='text-xl sm:text-2xl font-semibold leading-tight font-light'>Hi, I'm</span>
                <span className="text-black text-4xl font-light sm:text-9xl font-barlow ">Sameer Paul</span>
            </h1>

            {/* Role Tags */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-2xl font-medium mt-4 ">
                <p className='font-light font-semibold'>Frontend Developer</p>
                <span className="text-black hidden sm:inline font-semibold">|</span>
                <p className='font-light font-semibold'>MERN Stack Enthusiast</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-3xl text-gray-600">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:your.email@example.com"
                    className="hover:text-red-500 transition-colors"
                >
                    <FaEnvelope />
                </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 text-xl">
                <button className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition font-medium cursor-pointer">
                    View Projects
                </button>
                <button className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition font-medium cursor-pointer">
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default Hero;
