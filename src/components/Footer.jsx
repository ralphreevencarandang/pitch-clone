import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#827745] border-t-4">
      {/* Call-to-Action Section */}
      <div 
        className="bg-[#282433] text-white text-center py-15 sm:bg-[url('/assets/stories/cta-bg.png')] sm:bg-center sm:bg-no-repeat">
        <h3 className="text-2xl font-display font-semibold">Ready to Pitch?</h3>
        <div className="flex justify-center items-center ">
            <button className="text-white bg-primary py-3 px-5 border-6 border-double border-amber-50 rounded-2xl font-semibold cursor-pointer hover:bg-orange-500 min-w-[170px] font-display">START PLANNING YOUR TRIP</button>
        </div>
      </div>

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
