import React from "react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block mb-2 bg-[#c8a97e]/10 px-3 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
          Reach Out
        </div>
        <h2 className="text-4xl font-bold mb-4 section-title text-[#1c2331] ml-5">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're here to answer any questions about our services and help you
          book your perfect luxury transportation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#c8a97e] -mt-6 -ml-6 z-0"></div>

          <div className="bg-white shadow-xl p-8 lg:p-10 rounded-lg relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-[#1c2331] flex items-center">
              <span className="w-10 h-1 bg-[#c8a97e] mr-3"></span>
              Get in Touch
            </h3>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed">
              Ready to elevate your journey? Book your luxury limousine with
              Luxora Limos today. Whether you're impressing a client,
              celebrating a milestone, or simply indulging in high-end travel,
              we're here to deliver a seamless and elegant experience.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-[#c8a97e]/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#c8a97e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                    Our Address
                  </h4>
                  <p className="text-gray-600">
                    123 Luxury Lane, New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-[#c8a97e]/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#c8a97e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                    Phone
                  </h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-[#c8a97e]/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#c8a97e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                    Email
                  </h4>
                  <p className="text-gray-600">info@luxoralimos.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-[#c8a97e]/10 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#c8a97e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                    Hours
                  </h4>
                  <p className="text-gray-600">
                    24/7 - We're always here for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-xl p-8 lg:p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#1c2331] flex items-center">
              <span className="w-10 h-1 bg-[#c8a97e] mr-3"></span>
              Send Us a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-600 mb-2 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]"
                  rows="2"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8a97e] hover:bg-[#a38147] text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-md"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Message
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-6 text-[#1c2331]">
          Experience Luxury Limo Transportation{" "}
          <span className="text-[#c8a97e]">Anywhere</span>
        </h3>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-600">
          Our dedication to excellence, exceptional service, and nationwide
          availability have made Luxora Limos a leading name in luxury
          transportation across the United States.
        </p>
        <a
          href="#book"
          className="bg-[#c8a97e] hover:bg-[#a38147] text-white px-10 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Book Your Limousine Today
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
