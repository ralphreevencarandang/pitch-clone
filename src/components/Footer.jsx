import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import ReadyToPitch from "../sections/ReadyToPitch"; 

const Footer = () => {
  return (
    <footer className="bg-[#827745] border-t-5 border-double border-white">
      {/* Call-to-Action Section */}
          <section className="w-full bg-secondary">
              <ReadyToPitch/>
            </section> 

      {/* Scroll to Top Button with Orange Line */}
      <div className="relative w-full flex justify-center mt-[-20px]">
        <div className="absolute top-1/2 w-full h-1 bg-[#f4983c] z-0"></div>
        <a 
          href="#site-header" 
          className="relative z-10 w-10 h-10 flex items-center justify-center bg-[#827745] text-white text-lg rounded-full cursor-pointer shadow-md hover:bg-[#6b6233] transition border-3 border-[#f4983c]"
        >
          ↑
        </a>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto py-6 px-6 mt-6 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-between items-center text-center md:text-left">
          {/* Logo */}
          <div className="footer-logo mb-4 md:mb-0">
            <img
              src="https://pitch-tents.co.uk/wp-content/themes/pitchtents/dist/images/logo-combined.png"
              alt="Pitch Tents"
              className="w-32 mx-auto md:mx-0"
            />
          </div>

          {/* Navigation Links (Hidden on small screens) */}
          <nav className="footer-menu text-white w-full md:w-auto mt-6 md:mt-0">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-center md:text-left max-lg:hidden">
              <li><a href="/" className="hover:text-[#f4983c] transition-all duration-250">Home</a></li>
              <li><a href="/about" className="hover:text-[#f4983c] transition-all duration-250">About</a></li>
              <li><a href="/stories" className="hover:text-[#f4983c] transition-all duration-250">Stories</a></li>
              <li><a href="/our-tents" className="hover:text-[#f4983c] transition-all duration-250">Our Tents</a></li>
              <li><a href="/packages" className="hover:text-[#f4983c] transition-all duration-250">Packages</a></li>
              <li><a href="/booking" className="hover:text-[#f4983c] transition-all duration-250">Booking</a></li>
              <li><a href="/contact" className="hover:text-[#f4983c] transition-all duration-250">Contact</a></li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <ul className="social flex justify-center md:justify-start space-x-4 text-white text-3xl mt-4 md:mt-0">
            <li>
              <a href="http://twitter.com/pitch_tents" target="_blank" rel="noopener noreferrer" className="hover:text-[#f4983c] transition-all duration-250" >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/pitch.belltents/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f4983c] transition-all duration-250">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/pitch_tents" target="_blank" rel="noopener noreferrer" className="hover:text-[#f4983c] transition-all duration-250">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
