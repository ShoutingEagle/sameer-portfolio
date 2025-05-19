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
        className="min-h-screen flex flex-col md:gap-5 xl:gap-10 items-center justify-center text-center px-6 py-20 bg-[#e0e0e0] text-gray-500 font-barlow">
            {/* Welcome Tagline */}
            <p className="text-xs md:text-lg font-normal leading-tight font-light">
                Fronend Developer | MERN Stack Enthusiast
            </p>

            {/* Main Name */}
            <h1 className="flex flex-row justify-center items-center gap-3 md:gap-10 font-normal">
                <span className='text-xl text-lg sm:text-2xl font-light'>Hi, I'm</span>
                <span className="text-black font-light text-[3rem] md:text-[5rem] xl:text-[7rem] font-barlow tracking-widest">Sameer Paul</span>
            </h1>

        </div>
    );
};

export default Hero;
