import React from "react";
import Testimonials from "./Testimonials";

const ClientSection = () => (
  <section id="testimonial" className="py-24 relative">
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
          Customer Reviews
        </div>
        <h2 className="text-4xl font-bold mb-4 text-white section-title">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Don't just take our word for it. Read what our satisfied customers
          have to say about their luxury transportation experience with Luxora
          Limos.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 lg:p-10 h-full">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClientSection;
