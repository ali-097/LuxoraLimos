import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <div
        className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[var(--color-primary)] transition-all duration-300 cursor-pointer hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-[var(--color-secondary)]">
            {question}
          </h3>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-secondary)]">
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-700 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What areas do you service?",
      answer:
        "We proudly provide luxury car services in New York and worldwide. We cover Manhattan, Brooklyn, Queens, Long Island, Suffolk County, Southern Westchester, The Bronx, Staten Island, North Jersey, Fairfield County (CT), and all major cities globally.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "For the best availability and to ensure we can meet your specific requirements, we recommend booking at least 24-48 hours in advance. For special events like weddings or large group transportation, booking several weeks ahead is advisable but at the very least, we require 4 hours before the pick up time, but please give us a call we will accommodate you sooner as we can.",
    },
    {
      question: "Are your rates all-inclusive?",
      answer:
        "Yes, our transparent pricing structure ensures you receive all-inclusive rates that are confirmed before you book. There are no hidden fees or surprises with Luxora Limos.",
    },
    {
      question: "What if my flight is delayed?",
      answer:
        "We always  monitor your flight status and change the pickup time accordingly to guarantee a smooth experience. Our stuff has extensive expertise dealing with such circumstances and will make the appropriate arrangements to handle any changes in your itinerary caused by aircraft delays.",
    },
    {
      question: "What is your procedure pick up at the airport?",
      answer:
        "We have 2 type of pick up at the airport (1) 'MEET AND GREET' which driver will wait for you at the baggage claim or customs exit door. With  your name sign. (2) 'CURBSIDE' which driver will pick up from the passengers pick up area, we will send you get driver track link so, you can see your driver location.",
    },
    {
      question: "What is your reservation cancellation policy?",
      answer:
        "f you booked Sedans and SUVs, you can cancel the ride 24 hours before the reservation time. However, for Luxury Vans, and other vehicles cancellation requests should be made 72 hours before the reservation time. A 50% cancellation fee will apply for eligible cancellations. You are suggested to contact our customer support team at info@luxoralimos.com to claim your refund.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our premium limousine services. If
            you have additional questions, please don't hesitate to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center">
            Contact Us
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
