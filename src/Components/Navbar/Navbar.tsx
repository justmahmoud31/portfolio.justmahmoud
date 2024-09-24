import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="mb-4">
      <nav className="bg-transparent mb-4 w-full fixed top-0 left-0 z-0">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <div className="text-3xl font-bold text-white">
            <a href="#">
              <span className="page-title">Just Mahmoud ;</span>
            </a>
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
              to={'/'}
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
             to={'/projects'}
              className="text-white fw-bold text-xl hover:text-yellow-500 transition-colors duration-300"
            >
              Projects
            </Link>
            <a
              href="#footer-section"
              className="text-white fw-bold text-xl hover:text-yellow-500 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute top-16 left-0 w-full bg-transparent bg-opacity-80 text-center`}
          >
            <a
              href="#"
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              Home
            </a>
            <a
              href="#about-section"
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              About
            </a>
            <a
              href="#services-section"
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              Projects
            </a>
            <a
              href="#footer-section"
              className="block text-white fw-bold py-2 hover:text-yellow-500 transition-colors duration-300"
              onClick={handleToggle}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
