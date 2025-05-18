import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 sm:px-10 font-barlow">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Info */}
        <div className="space-y-4 md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-3 ">
            <FaEnvelope className="text-red-800"/> sameerpaul58@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-yellow-500"/> 6206382019 
          </p>
          <p className="flex items-center gap-3">
            <BsWhatsapp className="text-green-700"/> 6206382019 
          </p>
          <p className="flex items-center gap-3">
            <FaLinkedin className="text-blue-800"/>
            <a
              href="https://www.linkedin.com/in/sameerpaul239421233"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              linkedin.com/in/sameerpaul239421233
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
