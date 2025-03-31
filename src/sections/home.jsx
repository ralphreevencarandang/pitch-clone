import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import desktop images

import logo3 from "../assets/home/logo3.png";
import {desktopImg1, desktopImg2, desktopImg3} from "../assets/images";

import BorderImage from "../assets/home/rope-border.png";

// Import mobile images
import mobileImg1 from "../assets/home/mobile_DadsWeekender_01.png";
import mobileImg2 from "../assets/home/mobile_Wedding_02.png";
import mobileImg3 from "../assets/home/mobile_Festival_03.png";

// Import background image for "How to Pitch"
import howToPitchBg from "../assets/home/bg-how-to-pitch.png";

const desktopImages = [desktopImg1, desktopImg2, desktopImg3];
const mobileImages = [mobileImg1, mobileImg2, mobileImg3];

export default function Home() {
    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    // Auto-rotate images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % desktopImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const currentImages = isMobile ? mobileImages : desktopImages;

    return (
        <div id="default-carousel" className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative overflow-hidden h-[400px] md:h-[780px]">
                {currentImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            index === current ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}

                {/* Slider indicators (fixed inside the image) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {currentImages.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-[#F4983C] ${
                                index === current ? "bg-[#F4983C]" : "bg-[#FAF8F5]"
                            }`}
                            onClick={() => setCurrent(index)}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Welcome Section */}
            <div className="flex flex-col items-center justify-center bg-[#F4983C] py-12 text-center px-6">
                <h2 className="text-2xl mb-5 md:text-3xl">Welcome to</h2>
                <img src={logo3} alt="Logo" className="h-13 mb-5" />
                <p className="text-[#FAF8F5] text-1xl max-w-2xl md:text-md">
                    Pitch provides memorable outdoor glamping experiences for festivals,
                    weddings, corporate events, private parties… and everything in
                    between! The only limit is your imagination…
                </p>
            </div>

            {/* How to Pitch Section */}
            <section className="py-12 bg-[#FAF8F5] text-center">
                <div className="container mx-auto px-6">
                    {/* Background Image Wrapper (Hidden in Mobile) */}
                <div className="relative hidden md:block w-full overflow-hidden">
                    <img 
                        src={howToPitchBg} 
                        alt="How to Pitch" 
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center text-center px-6 py-5 md:py-10 lg:py-12">
                        <h2 className="md:text-3xl lg:text-4xl text-[#F4983C] mb-6">
                            How to Pitch
                        </h2>

                        <div className="relative max-w-2xl p-6">
                            {/* Border Image */}
                            <img
                                src={BorderImage}
                                alt="Border"
                                className="absolute inset-0 w-[850px] h-[1350px] object-contain pb-280"
                                
                            />

                            {/* Text Content */}
                            <div className="relative text-lg text-gray-700p-6 border-36 border-transparent">
                                Every great adventure requires planning - luckily, it couldn’t be easier.
                                Follow our simple steps to start planning your event.
                                <p className="mt-4 font-semibold">Happy (and luxurious) camping!</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                {/* Mobile View (Without Background) */}
                <h2 className="text-3xl font-display font-semibold text-[#F4983C] md:hidden">
                    How to Pitch
                </h2>

                <br></br>

                <div className="relative max-w-2xl p-8">
                    {/* Border Image */}
                    <img
                        src={BorderImage}
                        alt="Border"
                        className="absolute inset-0 w-[600px] h-[1350px] object-contain pb-300 md:hidden"
                                
                    />

                    <div className="max-w-1xl mx-auto text-md text-gray-700 mb-8 md:hidden">
                        <p>
                            Every great adventure requires planning - luckily, it couldn’t be easier.
                            Follow our simple steps to start planning your event.
                        </p>
                        <p className="mt-1 font-semibold">Happy (and luxurious) camping!</p>
                    </div>
                </div>    

                    <div>
                        <h1 className="text-3xl text-[#F4983C] pb-10 pt-5">Three easy steps</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://pitch-tents.co.uk/wp-content/uploads/2016/03/CheckList.png"
                                alt="Step 1"
                                className="w-54 h-54 md:w-58 md:h-58 object-contain"
                            />
                            <h3 className="text-xl font-medium mt-4 font-display">Step 1</h3>
                            <p className="text-gray-600">Tell us what you need</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://pitch-tents.co.uk/wp-content/uploads/2016/03/Map.png"
                                alt="Step 2"
                                className="w-54 h-54 md:w-58 md:h-58 object-contain"
                            />
                            <h3 className="text-xl font-medium  mt-4 font-display">Step 2</h3>
                            <p className="text-gray-700">Tell us where you want it</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://pitch-tents.co.uk/wp-content/uploads/2016/03/SitBack.png"
                                alt="Step 3"
                                className="w-54 h-54 md:w-58 md:h-58 object-contain"
                            />
                            <h3 className="text-xl font-medium mt-4 font-display">Step 3</h3>
                            <p className="text-gray-600">We'll handle the rest!</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <button 
                            className="mt-14 mb-8 inline-block text-white bg-[#F4983C] py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]"
                        >
                            Start Booking
                        </button>
                    </div>
                </div>
            </section>

            {/* Interested in Pitching? Section */}
            <section className="bg-[#282433] py-12 text-center text-[#FAF8F5]">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#F4983C] mb-6">Interested in Pitching?</h2>
                    <h3 className="text-2xl md:text-3xl font-semibold font-display mb-8">Check out our tents and packages!</h3>

                    {/* Responsive Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Package Item */}
                        <div className="flex flex-col items-center">
                            <figure>
                                <a href="https://pitch-tents.co.uk/packages/">
                                    <img
                                        src="https://pitch-tents.co.uk/wp-content/uploads/2016/03/packages.png"
                                        alt="Packages"
                                        className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                                    />
                                </a>
                            </figure>
                            <div className="mt-6">
                                <a href="https://pitch-tents.co.uk/packages/" className="inline-block text-white bg-[#F4983C] py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]">
                                    View our packages
                                </a>
                            </div>
                        </div>

                        {/* Tent Item */}
                        <div className="flex flex-col items-center">
                            <figure>
                                <a href="https://pitch-tents.co.uk/our-tents/">
                                    <img
                                        src="https://pitch-tents.co.uk/wp-content/uploads/2016/03/tents.png"
                                        alt="Tents"
                                        className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
                                    />
                                </a>
                            </figure>
                            <div className="mt-6">
                                <button href="https://pitch-tents.co.uk/our-tents/" className="inline-block text-white bg-[#F4983C] py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]">
                                    View our tents
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                
                {/* Stories Section */}
                <section className="content stories py-12">
                <div className="mx-auto px-6 text-center">
                    {/* Section Title */}
                    <img
                        src="https://pitch-tents.co.uk/wp-content/themes/pitchtents/svg/campfire.svg"
                        className="w-30 h-30 mx-auto mb-8"
                        alt="Campfire Icon"
                    />
                    <h2 className="text-3xl font-bold text-[#F4983C] mb-6">Campfire Stories</h2>

                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1} // Show one slide at a time
                        autoplay={{ delay: 5000 }}
                        className="w-full max-w-2xl mx-auto"
                    >
                        {/* Story 1 */}
                        <SwiperSlide className="p-6 rounded-lg">
                            <blockquote className="text-gray-700 italic mb-5">
                                <p>
                                    "Pitch provided a service for us at our small private festival (affiliated to
                                    Secret Garden Party) in 2021. Although the event was arranged at short notice
                                    (due to Covid) they were so organized and capable. When we needed flexibility
                                    they provided it..."
                                </p>
                            </blockquote>
                            <button
                                href="https://pitch-tents.co.uk/stories/mistress-mary-festival-2021/"
                                className="inline-block text-white bg-[#F4983C] py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]"
                            >
                                Read this story
                            </button>
                        </SwiperSlide>

                        {/* Story 2 */}
                        <SwiperSlide className="p-6">
                            <blockquote className="text-gray-700 italic mb-5">
                                <p>
                                    "We used Pitch for our wedding in September and they were absolutely amazing!
                                    The tents were beautiful and the guests absolutely loved them..."
                                </p>
                            </blockquote>
                            <button
                                href="https://pitch-tents.co.uk/stories/devon-wedding/"
                                className="inline-block text-white bg-[#F4983C] py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]"
                            >
                                Read this story
                            </button>
                        </SwiperSlide>

                        {/* Story 3 */}
                        <SwiperSlide className="p-6">
                            <blockquote className="text-gray-700 italic mb-5">
                                <p>
                                    "My fiancé and I hired Pitch for our guest accommodation at our glamping
                                    wedding in April 2019. Chris and his team were just fabulous..."
                                </p>
                            </blockquote>
                            <button
                                href="https://pitch-tents.co.uk/stories/south-wales-wedding/"
                                className="inline-block text-white bg-[#F4983C] py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]"
                            >
                                Read this story
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
}
