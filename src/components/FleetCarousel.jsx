import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FleetCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const modalRef = useRef(null);
  const autoPlayRef = useRef(null);
  const timeoutRef = useRef(null);

  const fleetItems = [
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2017/11/Lincoln-front.jpg",
      name: "Lincoln Continental",
      subtitle: "Executive Luxury Sedan",
      capacity: "3",
      luggage: "2",
      description:
        "The Lincoln Continental offers a perfect blend of classic American luxury and modern sophistication. Ideal for corporate executives, airport transfers, and elegant special occasions requiring comfortable travel for up to 3 passengers.",
      features: [
        "Bridge of Weir Leather Seats",
        "30-Way Perfect Position Seats",
        "Revel® Audio System",
        "Panoramic Sunroof",
        "Adaptive LED Headlights",
      ],
    },
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2022/05/Mercedes-S-Class-front.jpg",
      name: "Mercedes-Benz S-Class",
      subtitle: "Ultimate Luxury Sedan",
      capacity: "3",
      luggage: "2",
      description:
        "Experience the epitome of luxury transportation with our Mercedes-Benz S-Class. This flagship luxury sedan offers an unparalleled combination of refinement, cutting-edge technology, and exceptional comfort for discerning clients.",
      features: [
        "Nappa Leather Upholstery",
        "MBUX Infotainment System",
        "Burmester® 3D Sound",
        "Air Balance Cabin Fragrance",
        "ENERGIZING Comfort Control",
      ],
    },
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2017/11/Escalade-front.jpg",
      name: "Cadillac Escalade",
      subtitle: "Luxury American SUV",
      capacity: "6",
      luggage: "6",
      description:
        "The iconic Cadillac Escalade delivers sophisticated American luxury with commanding presence and exceptional comfort for up to 6 passengers. Perfect for VIP transportation, corporate groups, and special events requiring elegant spacious travel.",
      features: [
        "Semi-Aniline Leather Seating",
        "AKG™ Studio Reference Sound",
        "38-inch OLED Curved Display",
        "Hands-Free Super Cruise™",
        "Magnetic Ride Control",
      ],
    },
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2022/05/Suburban-front.jpg",
      name: "Chevrolet Suburban",
      subtitle: "Spacious Premium SUV",
      capacity: "6",
      luggage: "6",
      description:
        "Our Chevrolet Suburban offers generous space and premium comfort for groups up to 6 passengers with substantial luggage capacity. Ideal for airport transfers, corporate events, and family outings requiring both luxury and practicality.",
      features: [
        "Leather-Appointed Seating",
        "Tri-Zone Climate System",
        "10.2-inch Touchscreen",
        "Advanced Trailering System",
        "Independent Rear Suspension",
      ],
    },
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2017/11/Sprinter-front.jpg",
      name: "Mercedes-Benz Sprinter",
      subtitle: "First-Class Group Transport",
      capacity: "14",
      luggage: "8",
      description:
        "Experience ultimate group transportation with our Mercedes-Benz Sprinter. This premium executive van combines elegance and functionality with exceptional interior space, perfect for corporate teams, wine tours, and special event transportation.",
      features: [
        "Premium Captain's Chairs",
        "High Roof Design",
        "MBUX Multimedia System",
        "Active Distance Assist",
        "LED Performance Lighting",
      ],
    },
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2022/06/Minibus-front.jpg",
      name: "Executive Minibus",
      subtitle: "Premium Group Transportation",
      capacity: "38",
      luggage: "16",
      description:
        "Our Executive Minibus offers first-class accommodations for larger groups of up to 38 passengers. Perfect for corporate events, shuttle services, and special occasions requiring comfortable transportation with significant luggage capacity.",
      features: [
        "Reclining Plush Seats",
        "Individual Air Controls",
        "Integrated A/V System",
        "Onboard Restroom",
        "Luggage Compartments",
      ],
    },
    {
      image:
        "https://sunnylimo.com/wp-content/uploads/2022/04/Executive-Coach-front-2.jpg",
      name: "Executive Coach",
      subtitle: "Luxury Large Group Travel",
      capacity: "56",
      luggage: "30",
      description:
        "The Executive Coach represents the pinnacle of large group luxury transportation, accommodating up to 56 passengers with extensive luggage capacity. Ideal for corporate events, tours, weddings, and any occasion requiring comfortable travel for large groups.",
      features: [
        "Premium Ergonomic Seating",
        "Individual Power Outlets",
        "DVD/Media Entertainment",
        "Onboard Lavatory",
        "Undercarriage Storage Bays",
      ],
    },
  ];

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isZoomModalOpen) {
      timeoutRef.current = setTimeout(play, 7000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isZoomModalOpen]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) =>
        prev === fleetItems.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) =>
        prev === 0 ? fleetItems.length - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && currentSlide !== index) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const openZoomModal = (imageUrl) => {
    setZoomedImage(imageUrl);
    setIsZoomModalOpen(true);
  };

  const closeZoomModal = () => {
    setIsZoomModalOpen(false);
    setZoomedImage(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsZoomModalOpen(false);
      }
    };

    if (isZoomModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isZoomModalOpen]);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12">
      <div className="absolute -top-4 left-0 bg-[#1c2331] text-white px-4 py-2 text-sm uppercase tracking-wider font-medium z-10">
        Luxury Vehicles
      </div>

      <div className="overflow-hidden rounded-lg shadow-2xl border border-gray-200">
        <div className="relative bg-white rounded-lg overflow-hidden">
          <div className="relative">
            <div
              onClick={() => openZoomModal(fleetItems[currentSlide].image)}
              className="cursor-zoom-in relative group"
              aria-label="Click to zoom image"
            >
              <img
                src={fleetItems[currentSlide].image}
                alt={fleetItems[currentSlide].name}
                className="w-full h-72 md:h-[28rem] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
                  <path
                    fillRule="evenodd"
                    d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-xs font-medium">Zoom</span>
              </div>
            </div>

            <div className="md:hidden absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-3 z-10">
              <button
                onClick={prevSlide}
                className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none border border-white/20"
                aria-label="Previous vehicle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10 shadow-md">
                <span className="font-medium">
                  <span className="text-[#c8a97e]">{currentSlide + 1}</span> /{" "}
                  {fleetItems.length}
                </span>
              </div>

              <button
                onClick={nextSlide}
                className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none border border-white/20"
                aria-label="Next vehicle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
              <span className="inline-block bg-[#c8a97e] text-white text-xs uppercase tracking-wider py-1 px-2 mb-2">
                {fleetItems[currentSlide].subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {fleetItems[currentSlide].name}
              </h2>
            </div>

            <div className="absolute top-6 right-6 flex flex-col space-y-2">
              <div className="bg-black/70 text-white px-3 py-2 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-[#c8a97e]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>{fleetItems[currentSlide].capacity} Passengers</span>
              </div>

              <div className="bg-black/70 text-white px-3 py-2 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-[#c8a97e]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{fleetItems[currentSlide].luggage} Luggage</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-white">
            <p className="text-gray-700 mb-6 leading-relaxed">
              {fleetItems[currentSlide].description}
            </p>

            {/* <div className="mb-8">
              <h4 className="font-bold mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#c8a97e]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Premium Features:
              </h4>
              <div className="flex flex-wrap gap-2">
                {fleetItems[currentSlide].features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c8a97e] rounded-full mr-2"></span>
                    {feature}
                  </span>
                ))}
              </div>
            </div> */}

            <div className="flex justify-center md:justify-start">
              <Link
                className="bg-[#c8a97e] hover:bg-[#a38147] text-white px-8 py-3 rounded-md transition-all duration-300 font-medium flex items-center shadow-md hover:shadow-lg"
                to="/book"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Book This Vehicle
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/3 -left-5 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none z-10"
        aria-label="Previous vehicle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#1c2331]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/3 -right-5 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none z-10"
        aria-label="Next vehicle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#1c2331]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="hidden md:flex justify-center mt-8 space-x-3">
        {fleetItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#c8a97e] w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hidden lg:grid grid-cols-7 gap-3 mt-6">
        {fleetItems.map((item, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer overflow-hidden rounded-lg transition-all duration-300 border ${
              currentSlide === index
                ? "ring-2 ring-[#c8a97e] scale-105 shadow-lg border-[#c8a97e]"
                : "opacity-80 hover:opacity-100 hover:scale-105 border-gray-200 hover:border-[#c8a97e]/50"
            }`}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-24 object-cover cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  openZoomModal(item.image);
                }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 ${
                  currentSlide === index ? "opacity-70" : "opacity-80"
                } transition-opacity duration-300`}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <span className="text-white text-xs font-medium text-center">
                  {item.name}
                </span>
                <div className="flex items-center mt-1 justify-center space-x-3 text-[10px] text-white/80">
                  <div className="flex items-center">
                    <svg
                      className="h-3 w-3 text-[#c8a97e] mr-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M12 14a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                    {item.capacity}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-3 w-3 text-[#c8a97e] mr-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                      <path
                        fillRule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.luggage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="hidden md:flex absolute bottom-4 right-4 bg-[#1c2331]/90 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-md border-l-2 border-[#c8a97e] shadow-md items-center">
        <svg
          className="h-3 w-3 text-[#c8a97e] mr-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-medium">
          Vehicle <span className="text-[#c8a97e]">{currentSlide + 1}</span> of{" "}
          {fleetItems.length}
        </span>
      </div> */}

      {isZoomModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative max-w-5xl w-full mx-auto rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10 transition-all duration-300"
              aria-label="Close zoom view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="absolute top-4 left-4 bg-black/60 text-white py-1 px-3 rounded-md border-l-2 border-[#c8a97e]">
              <span className="text-sm font-medium">
                {fleetItems[currentSlide].name}
              </span>
            </div>

            <div className="overflow-auto max-h-[85vh]">
              <div className="relative modal-image-container">
                <img
                  src={zoomedImage}
                  alt="Zoomed vehicle view"
                  className="w-full h-auto object-contain shadow-2xl"
                />
              </div>
            </div>

            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                  setZoomedImage(
                    fleetItems[
                      currentSlide === 0
                        ? fleetItems.length - 1
                        : currentSlide - 1
                    ].image
                  );
                }}
                className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 focus:outline-none border border-white/20"
                aria-label="Previous vehicle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                  setZoomedImage(
                    fleetItems[
                      currentSlide === fleetItems.length - 1
                        ? 0
                        : currentSlide + 1
                    ].image
                  );
                }}
                className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 focus:outline-none border border-white/20"
                aria-label="Next vehicle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FleetCarousel;
