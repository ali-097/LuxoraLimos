import { useEffect } from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import FleetCarousel from "./FleetCarousel";
import AboutSection from "./AboutSection";
import WhyUsSection from "./WhyUsSection";
import ClientSection from "./ClientSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CallButton from "./Call";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop - 90,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

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
      <ClientSection />
      {/* <ServingCities /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
      <CallButton />
    </>
  );
};

export default Home;
