import { useContext, useEffect } from 'react';
import { ComponentContext } from '../App';

const Contact = () => {
const {state,dispatch} = useContext(ComponentContext)
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
  return (
    <section
      id="contact"
      className="bg-[#e0e0e0] py-20 px-6 sm:px-10 font-abel border-t border-gray-300"
    >
      <h2 className="text-4xl font-semibold mb-12 text-center text-gray-800">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Details */}
        <div className="space-y-6 text-gray-800 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sameerpaul58@gmail.com"
              className="text-blue-600 underline"
            >
              sameerpaul58@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone / WhatsApp:</strong>{" "}
            <a href="tel:6206382019" className="text-blue-600 underline">
              6206382019
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sameerpaul58"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              linkedin.com/in/sameerpaul58
            </a>
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-400 rounded resize-none focus:outline-none focus:ring-2 focus:ring-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
