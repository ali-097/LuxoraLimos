import React from "react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block mb-2 bg-[#c8a97e]/10 px-1 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
          Our Story
        </div>
        <h2 className="text-4xl font-bold mb-4 section-title text-[#1c2331] ml-5">
          About Luxora Limos
        </h2>
        <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          For over 15 years, we've been setting the standard for luxury
          transportation in New York and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-[#c8a97e] z-0 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1511207538754-e8555f2bc187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Luxurious limousine"
              className="rounded-lg shadow-xl object-cover h-180 w-full relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-2 border-[#c8a97e] z-0 hidden md:block"></div>
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#1c2331]">
            Premier Limousine Services Since 2010
          </h3>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Welcome to Luxora Limos — the premier limousine service provider
            across the globe. With a fleet of over 200 luxury limousines, we
            have been offering top-notch transportation services since 2010,
            catering to all your travel needs.
          </p>

          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-[#c8a97e] flex items-center text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              We specialize in:
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c8a97e] rounded-full mr-3"></span>
                Airport transportation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c8a97e] rounded-full mr-3"></span>
                Private tour limo services
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c8a97e] rounded-full mr-3"></span>
                Wedding and event limousine services
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#c8a97e] rounded-full mr-3"></span>
                Corporate transportation solutions
              </li>
            </ul>
          </div>

          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Our professional chauffeurs ensure a luxurious, safe, and
            comfortable journey every time, making your experience truly
            memorable.
          </p>

          <a
            href="#fleet"
            className="inline-flex items-center text-[#c8a97e] font-semibold hover:text-[#a38147] transition-colors"
          >
            Explore Our Fleet
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-gray-50 p-8 lg:p-12 rounded-xl shadow-sm mb-16">
        <h3 className="text-2xl font-bold mb-6 text-center text-[#1c2331]">
          Our Service Areas
        </h3>
        <p className="text-lg mb-6 text-gray-700">
          Luxora Limos proudly provides luxury car services in New York and
          worldwide. From Manhattan, Brooklyn, Queens, Long Island, Suffolk
          County, Southern Westchester, The Bronx, Staten Island, and North
          Jersey to Fairfield County (CT), we've got you covered. We also extend
          our services to all major cities globally.
        </p>
        <p className="text-lg mb-6 font-medium text-[#1c2331]">
          Our premier NYC limousine services include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow-sm rounded-lg flex items-center">
            <div className="w-2 h-8 bg-[#c8a97e] mr-4 rounded-md"></div>
            <span>Wedding limo service</span>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg flex items-center">
            <div className="w-2 h-8 bg-[#c8a97e] mr-4 rounded-md"></div>
            <span>Long-distance limo service</span>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg flex items-center">
            <div className="w-2 h-8 bg-[#c8a97e] mr-4 rounded-md"></div>
            <span>Corporate limo service</span>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg flex items-center">
            <div className="w-2 h-8 bg-[#c8a97e] mr-4 rounded-md"></div>
            <span>Airport limo transfers</span>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg flex items-center">
            <div className="w-2 h-8 bg-[#c8a97e] mr-4 rounded-md"></div>
            <span>Bus rental services</span>
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg flex items-center">
            <div className="w-2 h-8 bg-[#c8a97e] mr-4 rounded-md"></div>
            <span>Group transportation</span>
          </div>
        </div>
        <p className="text-lg text-center font-medium text-[#1c2331]">
          Book your premium limo rental in New York with Luxora Limos today.
          <span className="text-[#c8a97e]">
            {" "}
            Rated as one of the best limousine companies in the U.S.
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-8 mt-8">
        <div className="luxury-card flex-1 flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 bg-[#c8a97e]/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#c8a97e]"
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
          <h3 className="text-3xl font-bold mb-2 text-[#1c2331]">15</h3>
          <p className="text-lg font-medium mb-1">Years Experience</p>
          <p className="text-gray-500 text-center">
            Providing exceptional limousine services since 2010
          </p>
        </div>

        <div className="luxury-card flex-1 flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 bg-[#c8a97e]/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-2 text-[#1c2331]">6000+</h3>
          <p className="text-lg font-medium mb-1">Satisfied Clients</p>
          <p className="text-gray-500 text-center">
            Serving clients across the United States and globally
          </p>
        </div>

        <div className="luxury-card flex-1 flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 bg-[#c8a97e]/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#c8a97e]"
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
          <h3 className="text-3xl font-bold mb-2 text-[#1c2331]">24/7</h3>
          <p className="text-lg font-medium mb-1">Customer Service</p>
          <p className="text-gray-500 text-center">
            Always available to assist with your transportation needs
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
