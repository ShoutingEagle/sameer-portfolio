import { useContext, useEffect } from 'react';
import { ComponentContext } from '../App';

const About = () => {
  const { state, dispatch } = useContext(ComponentContext);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      const top = element.getBoundingClientRect().top;
      if (top >= 0 && top < window.innerHeight / 2) {
        dispatch({ type: "SET_IN_VIEW", payload: "about" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-[#e0e0e0] py-20 px-4 sm:px-6 md:px-10 font-abel border-t border-gray-300"
    >
      <div className="max-w-5xl mx-auto text-gray-500">
        <h2 className="text-2xl sm:text-3xl mb-10 text-center text-black font-light tracking-wide">
          About Me
        </h2>

        <div className="space-y-8 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
          <p>
            <span className="font-semibold text-black">Hi, I'm Sameer Paul</span> — a frontend developer with a deep passion for creating interactive and meaningful web experiences using{" "}
            <span className="text-blue-600 font-medium text-xl sm:text-2xl">React</span> and the{" "}
            <span className="text-green-600 font-medium text-xl sm:text-2xl">MERN stack</span>.
          </p>

          <p>
            My journey into tech wasn’t conventional. I graduated with a{" "}
            <span className="font-medium text-black">B.Tech in Mechanical Engineering</span> from B.A. College of Engineering & Technology in 2019. I spent two years working at{" "}
            <span className="font-medium text-black">Tata Steel</span> as a high-risk supervisor, where I learned discipline, leadership, and how to solve real-world problems under pressure.
          </p>

          <p>
            But something kept calling me — the world of the web. What started as a curiosity turned into a daily pursuit. I began self-learning{" "}
            <span className="text-yellow-600 font-medium text-xl sm:text-2xl">HTML</span>,{" "}
            <span className="text-pink-600 font-medium text-xl sm:text-2xl">CSS</span>, and{" "}
            <span className="text-blue-500 font-medium text-xl sm:text-2xl">JavaScript</span>, eventually discovering the joy of building apps with{" "}
            <span className="text-purple-700 font-medium text-xl sm:text-2xl">React</span>. Since then, I’ve been on a mission to become a full-stack developer.
          </p>

          <p>
            Today, I’m focused on developing scalable, responsive apps and continuously improving my skills in{" "}
            <span className="text-green-700 font-medium text-xl sm:text-2xl">Node.js</span>,{" "}
            <span className="text-black font-medium text-xl sm:text-2xl">Express</span>, and{" "}
            <span className="text-teal-700 font-medium text-xl sm:text-2xl">MongoDB</span>. I believe my engineering background gives me a structured approach to problem-solving that strengthens my code.
          </p>

          <p>
            When I’m not coding, I’m probably exploring new technologies, contributing to open-source, or connecting with developers across communities. I’m always excited to collaborate, learn, and build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
