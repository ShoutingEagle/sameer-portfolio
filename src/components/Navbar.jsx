import { useContext, useEffect, useState } from "react";
import { ComponentContext } from "../App";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { state, dispatch } = useContext(ComponentContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const navItems = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white px-6 py-4 flex justify-between items-center z-50 md:hidden shadow ">
        <p className="text-lg font-semibold text-gray-800">Sameer</p>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-600"
        >
          <FaBars />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-14 left-0 w-full bg-white shadow-md flex flex-col items-center z-50 md:hidden ">
          {navItems.map(({ id, label }) => (
            <p
              key={id}
              className={`py-3 text-lg cursor-pointer w-full text-center hover:bg-gray-100 ${
                state.inView === id ? "text-black font-semibold" : "text-gray-500"
              }`}
              onClick={() => handleClick(id)}
            >
              {label}
            </p>
          ))}
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="hidden md:fixed md:top-0 md:right-0 md:h-screen md:pr-5 md:flex md:flex-col md:items-end md:justify-center md:space-y-6 text-xl text-gray-400 z-50 ">
        {navItems.map(({ id, label }) => (
          <p
            key={id}
            className={`cursor-pointer transition-all duration-200 ${
              state.inView === id ? "text-2xl text-black" : ""
            }`}
            onClick={() => handleClick(id)}
          >
            {label}
          </p>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
