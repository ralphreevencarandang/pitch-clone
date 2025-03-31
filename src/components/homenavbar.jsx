import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import logo2 from "../assets/logo2.png";
import logo from "../assets/logo.png";


export default function HomeNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.nav className="absolute top-0 left-0 w-full z-50 bg-[#827745] md:bg-transparent">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-5 pt-3 md:pt-12">
                {/* Left-side menu items (Hidden in Mobile) */}
                <div className="hidden md:flex space-x-5 mb-7 text-lg text-[#FAF8F5]">
                    <a href="/" className="hover:text-[#F4983C]">Home</a>
                    <a href="/about" className="hover:text-[#F4983C]">About</a>
                    <a href="/ourtents" className="hover:text-[#F4983C]">Our Tents</a>
                    <a href="/packages" className="hover:text-[#F4983C]">Packages</a>
                </div>

                {/* Logo centered */}
                <a href="/" className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
                    <AnimatePresence mode="wait">
                        {isLargeScreen ? (
                            <motion.img 
                                key="large-logo"
                                src={logo} 
                                className="h-55 hidden md:block pt-15" 
                                alt="Large Screen Logo" 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        ) : (
                            <motion.img 
                                key="small-logo"
                                src={logo2} 
                                className="h-6 block md:hidden" 
                                alt="Small Screen Logo" 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Luxury Tent Hire (Hidden in Mobile View) */}
                    <motion.span 
                        className="text-[#FAF8F5] text-sm mt-2 hidden md:block"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Luxury Tent Hire
                    </motion.span>
                </a>

                {/* Right-side menu items (Hidden in Mobile) */}
                <div className="hidden md:flex space-x-5 mb-7 text-[#FAF8F5] text-lg">
                    <a href="/stories" className="hover:text-[#F4983C]">Stories</a>
                    <a href="/booking" className="hover:text-[#F4983C]">Booking</a>
                    <a href="/contact" className="hover:text-[#F4983C]">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden ml-auto p-2 w-10 h-10 text-[#FAF8F5] rounded-lg focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Border with Centered Text (Only in Mobile View) */}
            <div className="relative border-b-4 border-[#F4983C] z-51 md:hidden">
                <span className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-[#F4983C] px-4 text-[#FAF8F5] text-sm rounded-full flex justify-center text-center">
                    Luxury Tent Hire
                </span>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-19 left-0 w-full bg-[#827745] shadow-md p-3 z-50"
                    >
                        <ul className="flex flex-col space-y-3 items-center justify-center pb-2 w-full">
                            {[  
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Our Tents", path: "/ourtents" },
                                { name: "Packages", path: "/packages" },
                                { name: "Stories", path: "/stories" },
                                { name: "Booking", path: "/booking" },
                                { name: "Contact", path: "/contact" }
                            ].map((item, index) => (
                                <li key={index} className={`w-full pt-3 text-center ${index !== 0 ? 'border-t border-dotted border-[#FAF8F5]' : ''}`}>
                                    <a href={item.path} className="text-lg text-[#FAF8F5] hover:text-[#F4983C]">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
