import React from "react";
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
  return (
    <nav className="sticky top-0 z-50 bg-[#000000]/78 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 py-11 px-1">
        {/* Logo */}
        <div className="flex bottom-1 relative left-[-25px] items-center">
          <NavLink to="/home">
            <img
              src={navLogo}
              alt="Social Turtle Logo"
              className="h-44 w-50"
              style={{ objectFit: "contain" }}
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-14">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-white text-[19px] font-light transition-colors ${
                  isActive ? "text-[#bada55]" : "hover:text-[#bada55]"
                }`
              }
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="ml-4 bg-[#A0CB3A] text-[19px] font-[450] px-9 py-4 rounded-full text-[#232323] hover:bg-[#a7c84d] transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
