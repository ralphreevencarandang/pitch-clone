import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./sections/home";
import Contact from "./sections/contact";
import OurTents from "./sections/OurTents";
import Packages from "./sections/Packages";
import Booking from "./sections/Booking";
import HomeNavbar from "./components/homenavbar";
import Navbar from "./components/navbar";
import About from "./sections/About";
import Stories from "./sections/Stories";
import Footer from "./components/Footer";
import NotFound from "./sections/404";

function Layout() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="sticky top-0 left-0 w-full z-50">
                {location.pathname === "/" && !scrolled ? <HomeNavbar /> : <Navbar />}
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ourTents" element={<OurTents />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/about" element={<About />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}
