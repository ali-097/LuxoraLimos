import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Fleet", link: "#fleet" },
    { name: "Why Us", link: "#why-us" },
    { name: "Book Now", link: "#book" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);

      const sections = navItems.map((item) => item.link.substring(1));
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    setScrolled(true);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 py-4 px-6 md:px-10 w-full fixed top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="Luxora Limos"
              className="h-12 w-auto mr-2 rounded-md shadow-sm"
            />
            <span className={`text-xl font-bold text-[#1c2331] tracking-wider`}>
              LUXORA <span className="text-[#c8a97e]">LIMOS</span>
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.link.substring(1);

            return (
              <a
                key={item.name}
                href={item.link}
                className={`text-gray-700 hover:text-[#c8a97e] ${
                  isActive
                    ? "font-medium border-b-2 border-[#c8a97e] text-[#c8a97e]"
                    : ""
                } text-sm uppercase tracking-wider py-2 transition-all duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.link);
                  if (element) {
                    const offsetTop =
                      element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: offsetTop - 90,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href="tel:+12345678900"
            className={`flex items-center ${
              scrolled ? "text-[#c8a97e]" : "text-[#c8a97e]"
            }`}
          >
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-medium">+1 (234) 567-8900</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#1c2331] focus:outline-none z-50 relative"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div
              className={`p-1 rounded-full ${isMenuOpen ? "bg-gray-100" : ""}`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-white shadow-xl overflow-y-auto">
          <div className="flex flex-col px-6 py-4 h-full">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.link.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.link}
                  className={`${
                    isActive ? "text-[#c8a97e] font-medium" : "text-gray-700"
                  } text-lg font-medium transition-colors duration-300 py-4 border-b border-gray-200`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.querySelector(item.link);
                    if (element) {
                      const offsetTop =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({
                        top: offsetTop - 80, // Offset for fixed header
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {item.name}
                </a>
              );
            })}

            <a
              href="tel:+12345678900"
              className="flex items-center text-[#c8a97e] py-4 border-b border-gray-200 mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
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
              <span className="font-medium">+1 (234) 567-8900</span>
            </a>

            <div className="mt-auto py-6 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Luxora Limos</p>
              <p className="mt-1">Premium Transportation Services</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
