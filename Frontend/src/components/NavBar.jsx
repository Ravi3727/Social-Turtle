import React from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/navLogo.png"; // Updated the import to your filename

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/ourwork", label: "Our Work" },
  { to: "/blogs", label: "Blog" },
  { to: "/careers", label: "Careers" },
];

const Navbar = () => {
  return (
    <nav className="bg-[#000000]  fixed z-50 w-screen">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 py-10 px-1">
        {/* Logo */}
        <div className="flex relative right-10 items-center">
          <NavLink to="/home">
            <img
              src={navLogo}
              alt="Social Turtle Logo"
              className="h-18 w-auto"
              style={{ objectFit: "contain" }}
            />
          </NavLink>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-18">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-white font-medium transition-colors ${
                  isActive ? 'text-[#bada55]' : 'hover:text-[#bada55]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-4 bg-[#bada55] font-semibold px-7 py-2 rounded-full text-[#232323] hover:bg-[#a7c84d] transition-colors"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
