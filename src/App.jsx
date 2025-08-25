import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FleetCarousel from "./components/FleetCarousel";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import BookNowSection from "./components/BookNowSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

const CallButton = () => {
  const phoneNumber = "+19179246101";
  const telUrl = `tel:${phoneNumber}`;

  return (
    <a
      href={telUrl}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Call us now"
    >
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
      </svg>
    </a>
  );
};

const App = () => {
  return (
    <>
      <NavBar />
      <section id="home" className="pt-20">
        <HeroSection />
      </section>
      <AboutSection />
      <section id="fleet" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2 bg-[#c8a97e]/10 px-3 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
              Exceptional Vehicles
            </div>
            <h2 className="text-4xl font-bold mb-4 section-title text-[#1c2331] ml-5">
              Our Luxurious Fleet
            </h2>
            <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
            <p className="text-lg mb-6 text-gray-600 max-w-4xl mx-auto">
              At Luxora Limos, we are dedicated to delivering a premium range of
              transportation services, including airport transfers, general
              pickup and drop-off, and corporate travel solutions. Our luxurious
              fleet, professional chauffeurs, transparent pricing, and seamless
              booking process make us the ideal choice for both tourists and
              business travelers.
            </p>
            <p className="text-lg mb-12 text-gray-600 max-w-4xl mx-auto">
              Whether you're heading to a meeting or catching a flight, we offer
              reliable, tailored services to meet your specific needs with
              elegance and efficiency.
            </p>
          </div>

          <FleetCarousel />
        </div>
      </section>
      <WhyUsSection />
      <BookNowSection />
      {/* <ServingCities /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
      <CallButton />
    </>
  );
};

export default App;
