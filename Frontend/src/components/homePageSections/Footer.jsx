import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/navLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 md:py-8 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:relative">
          
          {/* Main Content Section - Centered on large screens */}
          <div className="flex flex-col items-center space-y-3 md:space-y-4">
            {/* Logo */}
            <img 
              src={logo} 
              alt="Social Turtle" 
              className="h-12 md:h-16 lg:h-20 w-auto" 
            />

            {/* Copyright */}
            <p
              className="text-sm md:text-base lg:text-[19px] leading-[1.65] text-white text-center"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#ffffff",
              }}
            >
              © 2025 Social Turtle. All rights reserved.
            </p>

            {/* Description */}
            <p
              className="text-xs md:text-sm lg:text-[15px] tracking-[0.5px] leading-[1.65] text-white text-center max-w-md lg:max-w-3xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#ffffff",
              }}
            >
              Social Turtle is a digital marketing agency offering SEO, paid ads, AI
              content, and social media strategies across India.
            </p>
          </div>

          {/* Social Icons Section - Right side on large screens */}
          <div className="flex justify-center lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2">
            <div className="flex flex-row space-x-4 md:space-x-6">
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A0CB3A] transition-colors duration-200 p-2"
                aria-label="Visit our Instagram"
              >
                <FaInstagram className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A0CB3A] transition-colors duration-200 p-2"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </Link>
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A0CB3A] transition-colors duration-200 p-2"
                aria-label="Visit our Facebook"
              >
                <FaFacebookF className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
