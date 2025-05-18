import { useContext, useEffect } from 'react';
import { ComponentContext } from '../App';
import cryptoTracker from "../assets/asset-project-crypto-tracker.png"

const projects = [
  {
    title: "Blogging App",
    description: "A full-stack blogging platform where users can write, post, and comment on articles.",
    builtWith: "React, Node.js, MongoDB",
    status: "Completed",
    codeLink: "https://github.com/your-blog-repo",
    liveLink: "https://your-blog-live.com",
    screenshot: "/blog-project.jpg",
  },
  {
    title: "Crypto Tracker",
    description: "A real-time cryptocurrency tracker with interactive charts and watchlists.",
    builtWith: "React, Chart.js, CoinGecko API",
    status: "Completed",
    codeLink: "https://github.com/your-crypto-repo",
    liveLink: "https://your-crypto-live.com",
    screenshot: cryptoTracker,
  },
  {
    title: "ShopCart",
    description: "An e-commerce platform with cart, filters, and Stripe integration.",
    builtWith: "React, Redux, Node.js, Stripe",
    status: "In Progress",
    codeLink: "https://github.com/your-shop-repo",
    liveLink: "https://your-shop-live.com",
    screenshot: "/shopcart-project.jpg",
  },
];

const Projects = () => {
const {state,dispatch} = useContext(ComponentContext)
useEffect(() => {
  const handleScroll = () => {
    const element = document.getElementById("projects");
    const top = element.getBoundingClientRect().top;

    if (top >=0 && top < window.innerHeight / 2) {
      dispatch({ type: "SET_IN_VIEW", payload: "projects" });
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section 
    id='projects'
    className="min-h-screen bg-[#e0e0e0] flex justify-start items-center font-abel border-t border-gray-300 px-6">


      <div className='flex flex-col justify-center items-center'>
        <h2 className="xl:text-3xl 2xl:text-4xl font-semibold mb-10 text-gray-800">Projects</h2>

        <div className="flex overflow-x-auto space-x-8 scrollbar-thin scrollbar-thumb-gray-400 py-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="xl:w-xs 2xl:w-sm bg-[#c0c0c0] shadow-lg p-6 flex-shrink-0 "
            >
              {/* Project Screenshot */}
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full xl:h-42 2xl:h-52 object-cover rounded-lg mb-5"
              />

              {/* Content */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="md:text-xl 2xl:text-2xl font-bold text-gray-900">{project.title}</h3>
                  <span
                    className={`text-sm font-semibold px-4 py-1 ${
                      project.status === "Completed"
                        ? "bg-green-600 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="md:text-sm 2xl:text-base text-gray-700">{project.description}</p>

                <p className="md:text-sm 2xl:text-base text-gray-900 font-medium">
                  Built with: <span className="font-normal">{project.builtWith}</span>
                </p>

                <div className="flex gap-4 pt-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
