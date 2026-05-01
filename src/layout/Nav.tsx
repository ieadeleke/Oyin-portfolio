import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between md:grid grid-cols-3 items-center py-6 px-5 md:px-24 fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent"
      }`}
    >
      <Link to="/" className="text-2xl font-bold text-white uppercase">
        Oyin
      </Link>
      <ul className="hidden md:flex space-x-12 uppercase text-sm">
        <li>
          <Link to="/" className="text-white/60 hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="text-white/60 hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white/60 hover:text-white">
            Services
          </a>
        </li>
        <li>
          <Link to="/contact" className="text-white/60 hover:text-white">
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <Link
          to="/contact"
          className="py-3 px-5 w-max ml-auto block cursor-pointer bg-white text-black text-sm"
        >
          Start a Project
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
