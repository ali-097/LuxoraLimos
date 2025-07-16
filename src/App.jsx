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

const WhatsAppButton = () => {
  const phoneNumber = "+19179246101";
  const message = encodeURIComponent(
    "Hello! I'm interested in your limousine services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
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
      <WhatsAppButton />
    </>
  );
};

export default App;
