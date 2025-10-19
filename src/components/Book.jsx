import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import Call from "./Call";

const Book = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <NavBar />
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"></div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        <div className="absolute top-0 left-0 right-0 h-1 bg-[#c8a97e] z-20"></div>

        <div className="container mx-auto px-4 relative z-20 text-white">
          <div
            className="max-w-4xl mx-auto text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? "0" : "30px"})`,
              transition: "all 1.2s ease-out",
            }}
          >
            <div className="inline-block mb-6 bg-[#c8a97e] px-4 py-2 text-sm uppercase tracking-wider font-semibold text-white rounded-md">
              Luxury Transportation Booking
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Reserve Your <span className="text-[#c8a97e]">Premium</span>{" "}
              <br />
              <span className="italic">Experience</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-100 leading-relaxed">
              Book your luxury transportation with ease. Our streamlined process
              ensures you get the perfect vehicle for your journey with
              professional service every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-[#c8a97e] bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
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
                <span className="font-medium">3-Minute Booking Process</span>
              </div>
              <div className="flex items-center text-[#c8a97e] bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3"
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
                <span className="font-medium">Secure & Confidential</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 bg-[#c8a97e]/10 px-4 py-2 text-sm text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
                Start Your Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1c2331]">
                Complete Your Reservation
              </h2>
              <div className="w-24 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Fill out our secure booking form below. Our team will confirm
                your reservation within minutes and provide all the details you
                need for a seamless experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <BookingForm />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1c2331] mb-2">
                  Secure Booking
                </h4>
                <p className="text-gray-600 text-sm">
                  Your information is protected with enterprise-grade security
                </p>
              </div>

              <div className="flex flex-col items-center">
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
                <h4 className="font-semibold text-[#1c2331] mb-2">
                  Instant Confirmation
                </h4>
                <p className="text-gray-600 text-sm">
                  Receive immediate booking confirmation via email and SMS
                </p>
              </div>

              <div className="flex flex-col items-center">
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
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1c2331] mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Our customer service team is available around the clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Call />
    </div>
  );
};

export default Book;
