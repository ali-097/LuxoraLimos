import React from "react";

const WhyUsSection = () => (
  <section id="why-us" className="py-24 bg-white relative">
    <div className="absolute left-0 top-0 w-40 h-40 bg-[#c8a97e]/5 rounded-br-full"></div>
    <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#c8a97e]/5 rounded-tl-full"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block mb-2 bg-[#c8a97e]/10 px-3 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
          Our Advantages
        </div>
        <h2 className="text-4xl font-bold mb-4 section-title text-[#1c2331] ml-5">
          Why Choose Our Limo Services in NYC?
        </h2>
        <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience transportation excellence with our commitment to luxury,
          reliability, and exceptional customer service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c8a97e] group">
          <div className="flex items-center justify-center mb-6 h-20 w-20 mx-auto bg-[#c8a97e]/10 rounded-full group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c8a97e]"
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
          <h3 className="text-xl font-bold mb-3 text-center text-[#1c2331]">
            24 Hour Customer Support
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            When you travel with us, you can have peace of mind that someone
            will answer your call when you needed, any time of day or night.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c8a97e] group">
          <div className="flex items-center justify-center mb-6 h-20 w-20 mx-auto bg-[#c8a97e]/10 rounded-full group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center">
            On-Time Arrival
          </h3>
          <p className="text-gray-600 text-center">
            We understand time is very important for our clients, so we always
            arrive before the scheduled time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c8a97e] group">
          <div className="flex items-center justify-center mb-6 h-20 w-20 mx-auto bg-[#c8a97e]/10 rounded-full group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center text-[#1c2331]">
            Professional Chauffeurs
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Our Chauffeurs are highly skilled, vetted, and professional,
            dedicated to offering you excellent service with style.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c8a97e] group">
          <div className="flex items-center justify-center mb-6 h-20 w-20 mx-auto bg-[#c8a97e]/10 rounded-full group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-.565M8 3.935l-6 5.848V21"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center text-[#1c2331]">
            Global Reach
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            With operations in over 150 cities, Worldwide Chauffeurs Service
            delivers consistent excellence across continents.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c8a97e] group">
          <div className="flex items-center justify-center mb-6 h-20 w-20 mx-auto bg-[#c8a97e]/10 rounded-full group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center text-[#1c2331]">
            Exceptional Fleet
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Sleek sedans for VIP car service. Spacious SUVs for small groups.
            Elegant stretch limos for weddings and special events.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#c8a97e] group">
          <div className="flex items-center justify-center mb-6 h-20 w-20 mx-auto bg-[#c8a97e]/10 rounded-full group-hover:bg-[#c8a97e]/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[#c8a97e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center text-[#1c2331]">
            Tailored Experiences
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Whether you need hourly town car rental, VIP chauffeur service for a
            special event, or seamless airport transfers, our services are
            tailored to meet your needs.
          </p>
        </div>
      </div>
      <div className="text-center mb-16 mt-20">
        <div className="inline-block mb-2 bg-[#c8a97e]/10 px-3 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
          Premier Options
        </div>
        <h3 className="text-3xl font-bold mb-4 section-title text-[#1c2331] ml-5">
          Popular Services in New York
        </h3>
        <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#c8a97e] text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#c8a97e]/10 mb-6">
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
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-3 text-[#1c2331]">
            Special Events
          </h4>
          <p className="text-gray-600 leading-relaxed">
            From weddings to anniversaries and proms, our private limo services
            make every event unforgettable.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#c8a97e] text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#c8a97e]/10 mb-6">
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
          <h4 className="text-xl font-bold mb-3 text-[#1c2331]">
            Group Transportation
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Explore the city or attend multiple events with the flexibility of
            hourly rentals.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#c8a97e] text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#c8a97e]/10 mb-6">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-3 text-[#1c2331]">
            Corporate Transfer
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Elevate your professional image with our town car service and
            corporate limo options.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#c8a97e] text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#c8a97e]/10 mb-6">
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-3 text-[#1c2331]">
            Airport Transfers
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Avoid the hassle of airport transportation with our premium
            limousine services.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
