import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/navLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto flex flex-col items-center space-y-1">
        
        {/* Logo - Centered */}
        <img 
          src={logo}
          alt="Social Turtle" 
          className="h-16 md:h-27 mx-auto"
        />

        {/* Copyright */}
        <p className="text-sm text-white mt-4 text-center" 
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "19x",
          lineHeight: 1.65,
          color: "#ffffff",
        }}>
          © 2025 Social Turtle. All rights reserved.
        </p>

        {/* Description */}
        <p className="text-sm text-white text-center max-w-4xl" 
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "15x",
          lineHeight: 1.65,
          color: "#ffffff",
          letterSpacing: "0.5px",
        }}>
          Social Turtle is a digital marketing agency offering SEO, paid ads, AI content, and social media strategies across India.
        </p>
      </div>

      {/* Social Icons - Fixed to Right Side */}
      <div className="absolute top-23 right-40 flex space-x-6">
        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          <FaInstagram size={45} />
        </Link>
        <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          <FaLinkedinIn size={45} />
        </Link>
        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          <FaFacebookF size={45} />
        </Link>
      </div>
    </footer>
  );
}
