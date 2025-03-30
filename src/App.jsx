import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./sections/home";
import Contact from "./sections/contact";
import OurTents from "./sections/OurTents";
import Packages from "./sections/Packages";
import Booking from "./sections/Booking";
import HomeNavbar from "./components/homenavbar";
import Navbar from "./components/navbar";

// 404 Not Found Component
function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="px-6 py-3 bg-[#F4983C] text-white rounded-lg hover:bg-[#d87c2a] transition">
                Go Back Home
            </a>
        </div>
    );
}

function Layout() {
    const location = useLocation(); // Get the current route

    return (
        <>
            {location.pathname === "/" ? <HomeNavbar /> : <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ourTents" element={<OurTents />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="*" element={<NotFound />} /> {/* 404 Page */}
            </Routes>
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
