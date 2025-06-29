import React from "react";
import BookingForm from "./BookingForm";
import Testimonials from "./Testimonials";

const BookNowSection = () => (
  <section id="book" className="py-24 relative">
    <div className="absolute inset-0 bg-[#1c2331] opacity-95 z-0"></div>
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        backgroundAttachment: "fixed",
      }}
    ></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block mb-2 bg-[#c8a97e]/20 px-3 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
          Reserve Your Ride
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white section-title ml-5">
          Book Your Premium Experience
        </h2>
        <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Experience luxury limousine transportation in New York City. We offer
          200+ luxury vehicles, ensuring that you can find the perfect option to
          suit your needs and preferences for any occasion.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-10 relative z-20 h-full flex flex-col">
            <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
              <div className="bg-[#c8a97e] rotate-45 transform origin-bottom-left w-28 h-28 -translate-y-14 -translate-x-14"></div>
            </div>

            <div className="relative flex-grow">
              <h3 className="text-2xl font-bold mb-8 text-[#1c2331] text-center">
                Request a Quote
              </h3>
              <BookingForm />

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-6 text-[#1c2331]">
                  Additional Benefits
                </h4>

                <div className="bg-[#c8a97e]/5 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#c8a97e]/20 mr-4">
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
                    <h4 className="font-semibold text-[#1c2331] text-lg">
                      Quick Booking Process
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Complete your reservation in under 3 minutes. Our
                    streamlined booking process ensures you can secure your
                    luxury transportation quickly and efficiently.
                  </p>
                </div>

                <div className="bg-[#c8a97e]/5 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#c8a97e]/20 mr-4">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#1c2331] text-lg">
                      Secure & Confidential
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Your information is protected with industry-standard
                    encryption. We respect your privacy and maintain strict
                    confidentiality with all client details.
                  </p>
                </div>

                <div className="bg-[#c8a97e]/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-[#c8a97e]/20 mr-4">
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
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#1c2331] text-lg">
                      Instant Confirmation
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Receive immediate booking confirmation via email and text
                    message. Rest assured your luxury transportation is secured
                    with real-time reservation tracking.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center justify-center text-[#c8a97e] font-semibold">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    Satisfaction Guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 lg:p-10 h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[#1c2331] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#c8a97e]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Why Book With Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#c8a97e]/10 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#c8a97e]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c2331]">
                      Transparent Pricing
                    </h4>
                    <p className="text-gray-600">
                      All-inclusive rates confirmed before booking - no hidden
                      fees
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#c8a97e]/10 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#c8a97e]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c2331]">
                      Professional Chauffeurs
                    </h4>
                    <p className="text-gray-600">
                      Highly trained, experienced drivers ensuring a smooth
                      journey
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#c8a97e]/10 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#c8a97e]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c2331]">
                      Best Rate Guarantee
                    </h4>
                    <p className="text-gray-600">
                      We guarantee the best NYC limo service at the most
                      competitive rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#c8a97e]/10 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#c8a97e]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c2331]">
                      24/7 Availability
                    </h4>
                    <p className="text-gray-600">
                      Service available any time, day or night, 365 days a year
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold mb-4 text-[#1c2331]">
                What Our Clients Say
              </h3>
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BookNowSection;
