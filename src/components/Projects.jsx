import { useContext, useEffect, useState } from 'react';
import { ComponentContext } from '../App';
import brokenImage from "../assets/broken-image.png"
import cryptoTrackerPc from "../assets/asset-project-crypto-tracker.jpg";
import cryptoTrackerMobile from "../assets/asset-crypto-tracker-wide.jpg";
import { SlSocialGithub } from "react-icons/sl";
import { FaEarthAsia } from "react-icons/fa6";


const projects = [
  {
    title: "Blogging App",
    description: "A full-stack blogging platform where users can write, post, and comment on articles.",
    builtWith: "React, Node.js, MongoDB",
    status: "Completed",
    codeLink: "https://github.com/your-blog-repo",
    liveLink: "https://your-blog-live.com",
    screenshot: "na",
    mobile: "na",
    timeline: "March25 - May25"
  },
  {
    title: "Crypto Tracker",
    description: "A real-time cryptocurrency tracker with interactive charts and watchlists.",
    builtWith: "React, Chart.js, CoinGecko API",
    status: "Completed",
    codeLink: "https://github.com/your-crypto-repo",
    liveLink: "https://your-crypto-live.com",
    screenshot: cryptoTrackerPc,
    mobile: cryptoTrackerMobile,
    timeline: "April24 - May25"
  },
  {
    title: "ShopCart",
    description: "An e-commerce platform with cart, filters, and Stripe integration.",
    builtWith: "React, Redux, Node.js, Stripe",
    status: "In Progress",
    codeLink: "https://github.com/your-shop-repo",
    liveLink: "https://your-shop-live.com",
    screenshot: "na",
    mobile: "na",
    timeline: "February25 - Live"
  },
];


const Projects = () => {
  const { state, dispatch } = useContext(ComponentContext);
    const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("resize",handleResize)
    }
  },[])

  useEffect(() => {
    

    const handleScroll = () => {
      const element = document.getElementById("projects");
      const top = element.getBoundingClientRect().top;
      if (top >= 0 && top < window.innerHeight / 2) {
        dispatch({ type: "SET_IN_VIEW", payload: "projects" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
    <section id='projects' className="w-full bg-[#e0e0e0] md:pl-[3rem] xl:pl-[10rem] border-t border-gray-300 py-20">
      {
        screenSize?.width>640 ? 
        <div className="">
          <h2 className="text-3xl md:text-3xl xl:text-4xl font-normal text-center mb-12 text-gray-400 font-barlow">Projects</h2>
          <div className="flex flex-col gap-40 md:gap-20 xl:gap-40">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-row p-5 gap:5 md:gap-10 xl:gap-20">
                {/* Left - Image */}
                <div className="w-[350px] md:w-[250px] rounded-xl overflow-hidden bg-gray-500">
                  {
                    project.screenshot==="na"?
                    <div className='flex flex-col justify-center items-center gap-5 w-full h-full text-gray-800'>
                      <img
                        src={brokenImage}
                        alt={project.title}
                        className={`w-[50px]`}
                      />
                      <p>
                        Preview Currently Unavailable
                      </p>
                    </div>:
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className={`w-full h-full object-cover`}
                  />
                  }
                </div>

                {/* Right - Details */}
                <div className="md:w-1/2 p-6 flex flex-col gap-10 font-barlow text-gray-500">
                  <div>
                    <div className="flex flex-col items-start md:flex-row gap-3 md:gap-10 items-center mb-2">
                      <h3 className="text-4xl font-normal text-black">{project.title}</h3>
                      <span className={`text-md px-0 md:px-3 py-1 `}>
                        <span>Status: </span><span className={` ${project.status === "Completed"?"text-green-600":"text-red-500"}`}>{project.status}</span> 
                      </span>
                    </div>

                    <p className="flex flex-col mb-4">
                      <span className="text-xl text-gray-800">At a Glance</span>
                      <span className="">{project.description}</span>
                    </p>
                    <p className="text-md mb-4">
                      <span className="text-gray-800">Built with:</span> {project.builtWith}
                    </p>
                    <div className="flex flex-col md:flex-row gap-5 xl:gap-20 text-black">
                      <p>Solo Project</p>
                      <p className="flex md:flex-col gap-5">
                        <span>My Role</span>
                        <span className="text-gray-400">Product Design | Virtual Design | User Research</span>
                      </p>
                      <p className="flex md:flex-col gap-5">
                        <span>Timeline</span>
                        <span className="text-gray-400">{project.timeline}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-10">
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row justify-center items-center gap-2 group"
                    >
                      <span className="group-hover:text-blue-600 transition-colors duration-200"><SlSocialGithub /></span>
                      <span className="group-hover:text-blue-600 transition-colors duration-200">Source Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-row justify-center items-center gap-2 group ${project.status === "Completed"?"flex":"hidden"}`}
                    >
                      <span className="group-hover:text-red-500 transition-colors duration-200"><FaEarthAsia /></span>
                      <span className="group-hover:text-red-500 transition-colors duration-200">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        :
        <div className="">
          <h2 className="text-3xl font-normal text-center mb-12 text-gray-400 font-barlow">Projects</h2>
          <div className="flex flex-col gap-40">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col justify-center items-start gap-10 p-5">
                  {/* top - Image */}
                  <div className="w-full rounded-sm overflow-hidden">
                    <img
                      src={screenSize?.width<=640 ? project.mobile :project.screenshot}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* bottom - Details */}
                  <div className="flex flex-col gap-10 font-barlow text-gray-500">
                    <div>
                      <div className="flex flex-col items-start md:flex-row gap-3 md:gap-10 items-center mb-2">
                        <h3 className="text-4xl font-normal text-black">{project.title}</h3>
                        <span className={`text-sm  py-1 `}>
                          <span>Status: </span><span className={` ${project.status === "Completed"?"text-green-600":"text-red-500"}`}>{project.status}</span> 
                        </span>
                      </div>

                      <p className="flex flex-col mb-4">
                        <span className="text-lg text-gray-800">At a Glance</span>
                        <span className="text-sm">{project.description}</span>
                      </p>
                      <p className="text-sm mb-4">
                        <span className="text-gray-800">Built with:</span> {project.builtWith}
                      </p>
                      <div className="flex flex-col md:flex-row gap-5 xl:gap-20 text-black text-sm">
                        <p>Solo Project</p>
                        <p className="flex md:flex-col gap-5">
                          <span>My Role</span>
                          <span className="text-gray-400">Product Design | Virtual Design | User Research</span>
                        </p>
                        <p className="flex md:flex-col gap-5">
                          <span>Timeline</span>
                          <span className="text-gray-400">{project.timeline}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-10">
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row justify-center items-center gap-2 group"
                      >
                        <span className="group-hover:text-blue-600 transition-colors duration-200"><SlSocialGithub /></span>
                        <span className="group-hover:text-blue-600 transition-colors duration-200">Source Code</span>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-row justify-center items-center gap-2 group ${project.status === "Completed"?"flex":"hidden"}`}
                      >
                        <span className="group-hover:text-red-500 transition-colors duration-200"><FaEarthAsia /></span>
                        <span className="group-hover:text-red-500 transition-colors duration-200">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
        </div>

      }

      
        

      <div>

      </div>

    </section>
  );
};

export default Projects;
