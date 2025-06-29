import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      content:
        "Luxora Limos exceeded all our expectations for our wedding day. The chauffeur arrived early, was extremely professional, and the limousine was immaculate. It truly made our special day even more memorable.",
      author: "Michael & Sarah Johnson",
      role: "Wedding Clients",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      content:
        "As a business executive who travels frequently, I rely on consistent, high-quality transportation. Luxora Limos delivers every time with their punctual service and professional chauffeurs. Their airport transfer service is unmatched.",
      author: "Amanda Chen",
      role: "Corporate Client",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      content:
        "We booked a party bus for my daughter's sweet sixteen celebration. The vehicle was stunning, equipped with all the features the kids loved. The driver was patient and professional. Worth every penny!",
      author: "Robert Williams",
      role: "Special Event Client",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
    },
    {
      id: 4,
      content:
        "Our family trip to NYC was enhanced by the exceptional service from Luxora Limos. Having a dedicated chauffeur made touring the city stress-free. I highly recommend their day tour service.",
      author: "Jessica Martinez",
      role: "Tourist",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
  ];

  const changeTestimonial = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial(
        activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
      );
    }, 8000); // Auto rotate every 8 seconds

    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length, isAnimating]);

  return (
    <div className="bg-[var(--color-secondary)] py-24 px-4 relative">
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)]"></div>
      <div className="absolute top-24 left-8 w-20 h-20 border-t-2 border-l-2 border-[var(--color-primary)]/30"></div>
      <div className="absolute bottom-24 right-8 w-20 h-20 border-b-2 border-r-2 border-[var(--color-primary)]/30"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 bg-[var(--color-primary)]/10 px-3 py-1 text-xs text-[var(--color-primary)] uppercase tracking-wider font-semibold rounded-md">
            Client Experiences
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover what our clients have to say about their exceptional
            experiences with Luxora Limos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div
            className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-500 border border-[var(--color-primary)]/20 relative overflow-hidden ${
              isAnimating ? "opacity-80" : "opacity-100"
            }`}
            style={{
              transform: `translateY(${isAnimating ? "10px" : "0"})`,
            }}
          >
            <div className="absolute top-0 left-0 w-16 h-16 bg-[var(--color-primary)]/5"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary)]"></div>

            <div className="mb-4 flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--color-primary)] mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>

            <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent"></div>

            <blockquote className="italic text-[var(--color-secondary)] mb-6 text-lg leading-relaxed relative pl-6">
              <svg
                className="absolute left-0 top-0 h-5 w-5 text-[var(--color-primary)]"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8c-2.2 0-4 1.8-4 4v12h12v-8h-8c0-3.3 2.7-6 6-6v-2c-3.3 0-6 2.7-6 6zm14-6c-2.2 0-4 1.8-4 4v12h12v-8h-8c0-3.3 2.7-6 6-6v-2c-3.3 0-6 2.7-6 6z" />
              </svg>
              {testimonials[activeIndex].content}
            </blockquote>

            <div className="flex items-center pt-4 border-t border-gray-100">
              <div>
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-[var(--color-primary)] p-0.5"
                />
              </div>
              <div>
                <p className="font-bold text-[var(--color-secondary)]">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-[var(--color-primary)] text-sm font-medium">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-500 border border-[var(--color-primary)]/20 relative overflow-hidden ${
              isAnimating ? "opacity-80" : "opacity-100"
            }`}
            style={{
              transform: `translateY(${isAnimating ? "10px" : "0"})`,
            }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--color-primary)]/5"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-primary)]"></div>

            <div className="mb-4 flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--color-primary)] mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>

            <div className="mb-6 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent"></div>

            <blockquote className="italic text-[var(--color-secondary)] mb-6 text-lg leading-relaxed relative pl-6">
              <svg
                className="absolute left-0 top-0 h-5 w-5 text-[var(--color-primary)]"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8c-2.2 0-4 1.8-4 4v12h12v-8h-8c0-3.3 2.7-6 6-6v-2c-3.3 0-6 2.7-6 6zm14-6c-2.2 0-4 1.8-4 4v12h12v-8h-8c0-3.3 2.7-6 6-6v-2c-3.3 0-6 2.7-6 6z" />
              </svg>
              {testimonials[(activeIndex + 1) % testimonials.length].content}
            </blockquote>

            <div className="flex items-center pt-4 border-t border-gray-100">
              <div>
                <img
                  src={
                    testimonials[(activeIndex + 1) % testimonials.length].image
                  }
                  alt={
                    testimonials[(activeIndex + 1) % testimonials.length].author
                  }
                  className="w-14 h-14 rounded-full mr-4 border-2 border-[var(--color-primary)] p-0.5"
                />
              </div>
              <div>
                <p className="font-bold text-[var(--color-secondary)]">
                  {testimonials[(activeIndex + 1) % testimonials.length].author}
                </p>
                <p className="text-[var(--color-primary)] text-sm font-medium">
                  {testimonials[(activeIndex + 1) % testimonials.length].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => changeTestimonial(index)}
              className={`mx-2 group relative`}
              disabled={isAnimating}
              aria-label={`View testimonial ${index + 1}`}
            >
              <span
                className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ||
                  (activeIndex + 1) % testimonials.length === index
                    ? "bg-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/30"
                    : "bg-white/30 group-hover:bg-white/50"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
