import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto relative">
        {/* Logo */}
        <div className="text-xl font-bold text-green-500 cursor-pointer">
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Energie Flow
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link
              to="/a-propos"
              className="hover:text-green-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/seances"
              className="hover:text-green-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Séances
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-green-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop button */}
        <button className="hidden md:inline-block bg-green-500 rounded-full px-4 py-2 shadow text-white hover:bg-green-400 transition">
          Prendre rendez-vous
        </button>

        {/* Custom Hamburger */}
        <div
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 w-6 bg-green-700 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-green-700 rounded transition-opacity duration-150 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-green-700 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute bg-white w-full left-0 top-full -mt-px shadow-md px-6 pb-4 z-10 ">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/a-propos" onClick={() => setMenuOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="/seances" onClick={() => setMenuOpen(false)}>
                Séances
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="mt-4 w-full bg-green-500 rounded-full px-4 py-2 shadow text-white hover:bg-green-400 transition">
            Prendre rendez-vous
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
