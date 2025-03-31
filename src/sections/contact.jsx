import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-12 bg-dirty-white text-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4 font-display text-[#282433]">
                    Contact
                </h1>
                <p className="text-center text-secondary mb-8 text-md mx-12">
                    To speak to one of our team about a Pitch you can submit your enquiry using the form below or alternatively you can call us on{" "}
                    <a href="tel:07850454071" className="font-semibold">
                        07850 454071
                    </a>.
                </p>

                <h2 className="text-3xl font-semibold text-center mb-6 font-display text-[#F4983C]">
                    Send us a message
                </h2>

                {/* Contact Form */}
                
                <form className="bg-secondary text-white shadow-lg rounded-2xl mx-7 px-16 py-18 grid grid-cols-1 md:grid-cols-2 gap-16 border-6 border-double border-white">
                    {/* Left Panel: Name, Phone, Email */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 py-1 bg-white text-[#333333] placeholder-gray-500 focus:ring-white focus:border-white border border-gray-300"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-medium">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="w-full px-3 py-1 bg-white text-[#333333] placeholder-gray-500 focus:ring-white focus:border-white border border-gray-300"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-1 bg-white text-[#333333] placeholder-gray-500 focus:ring-white focus:border-white border border-gray-300"
                            />
                        </div>
                    </div>

                    {/* Right Panel: Message */}
                    <div>
                        <label htmlFor="message" className="block font-medium">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="7"
                            className="w-full px-3 py-1 bg-white text-[#333333] placeholder-gray-500 focus:ring-white focus:border-white border border-gray-300 resize-none"
                        ></textarea>
                    </div>
                </form>


                {/* Centered Button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="inline-block text-white bg-primary py-3 px-6 text-lg font-semibold rounded-2xl border-6 border-double border-white font-display cursor-pointer transition duration-300 hover:bg-[#d87c2a] min-w-[170px]"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}
