import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" }, // Added Experience to match your sections
    { id: 4, link: "projects" },
    { id: 5, link: "contact" },
  ];

  // Detect scroll to change navbar appearance
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
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-gray-900/20 border-b border-gray-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        {/* Logo Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold ml-2 tracking-wider cursor-pointer font-signature text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 duration-200">
            <Link to="home" smooth duration={500}>
              Portfolio.
            </Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="relative group cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy={true} // Highlights the link when section is in view
                offset={-80} // Adjusts for navbar height
                activeClass="!text-accent font-bold" // Class applied when active
              >
                {link}
              </Link>

              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-400 hover:text-accent transition-colors md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu Overlay */}
        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400 z-40 animate-fadeIn">
            <ul className="flex flex-col gap-6 text-center">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize text-4xl py-2 hover:scale-110 hover:text-white duration-200"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-80}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="absolute bottom-10 text-xs text-gray-600 uppercase tracking-widest">
              Portfolio v2.0
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
