import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/navLogo.png";

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/ourwork", label: "Our Work" },
  { to: "/blogs", label: "Blog" },
  { to: "/careers", label: "Careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 lg:bg-black bg-black backdrop-blur:4xl lg:backdrop-blur-2xl py-3 lg:py-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-0 lg:h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/home">
            <img
              src={navLogo}
              alt="Social Turtle Logo"
              className="h-10 w-auto md:h-12 lg:h-14"
            />
          </NavLink>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>

        {/* Links container */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col absolute top-full left-0 w-full z-50 bg-black/90 lg:bg-transparent lg:static lg:items-center lg:gap-6 xl:gap-8 lg:ml-8 lg:w-auto lg:flex-row`}
        >
          {/* Links */}
          <div className="flex items-center flex-col lg:flex-row lg:items-center gap-6 lg:gap-6 xl:gap-8 px-6 py-4 lg:p-0">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-white text-lg lg:text-[19px] xl:text-[19px] font-light transition-colors whitespace-nowrap ${
                    isActive ? "text-[#bada55]" : "hover:text-[#bada55]"
                  }`
                }
                style={{ fontFamily: "Montserrat, sans-serif" }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Contact button - Centered on mobile */}
          <div className="flex justify-center mb-5 lg:mb-0 lg:p-0">
            <NavLink
              to="/contact"
              className="bg-[#A0CB3A] text-base xl:text-[17px] font-medium px-4 xl:px-6 py-4 lg:py-2 rounded-full text-[#232323] hover:bg-[#a7c84d] transition-colors whitespace-nowrap"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
