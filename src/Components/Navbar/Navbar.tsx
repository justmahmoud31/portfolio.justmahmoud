import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setNavbarBg("backg-white");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${navbarBg} w-full fixed top-0 left-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <div className="text-3xl font-bold text-white">
            <Link to={"/"}>
              <span className="page-title">Just Mahmoud ;</span>
            </Link>
          </div>
          <button
            className="text-white focus:outline-none md:hidden"
            type="button"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden md:flex space-x-6" id="nav-tabs">
            <Link
              to={"/"}
              className="text-white fw-bold text-xl hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-white fw-bold text-xl hover:text-yellow-500 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to={"/projects"}
              className="text-white fw-bold text-xl hover:text-yellow-500 transition-colors duration-300"
            >
              Projects
            </Link>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute top-16 left-0 w-full bg-[#333] bg-opacity-80 text-center`}
          >
            <Link
              to={"/"}
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              About
            </Link>
            <Link
              to={"/projects"}
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
