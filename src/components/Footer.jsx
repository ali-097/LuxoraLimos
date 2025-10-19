import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNewsletterError("Email is required");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setNewsletterError("Email is invalid");
      return;
    }

    setNewsletterError("");
    setIsSubmitting(true);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #1c2331; border-bottom: 2px solid #c8a97e; padding-bottom: 10px;">New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p style="font-size: 12px; color: #666; margin-top: 30px;">This email was added to the newsletter subscription list from the Luxor Limos website footer.</p>
      </div>
    `;

    const templateParams = {
      to_email: "info@luxoralimos.com",
      to_name: "Luxor Limos Admin",
      from_name: "Luxor Limos Website",
      from_email: email,
      subject: "New Newsletter Subscription",
      message_html: htmlContent,
      type: "newsletter",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_SHARED_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(
            "Newsletter subscription email sent successfully:",
            result.text
          );
          setSubscribed(true);
          setEmail("");
          setIsSubmitting(false);

          setTimeout(() => {
            setSubscribed(false);
          }, 5000);
        },
        (error) => {
          console.error(
            "Error sending newsletter subscription email:",
            error.text
          );
          setNewsletterError("Failed to subscribe. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <footer className="bg-[var(--color-secondary)] text-white py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-light)]"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.jpeg"
                alt="Luxora Limos"
                className="h-14 w-auto rounded-md shadow-md border border-[var(--color-primary)]/20 mr-3"
              />
              <div>
                <h2 className="text-3xl font-bold font-serif tracking-wider">
                  <span className="text-[var(--color-primary)]">LUXORA</span>{" "}
                  LIMOS
                </h2>
                <span className="text-sm text-[var(--color-primary)]">
                  Premium Transportation
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premier limousine services delivering luxury, comfort, and
              elegance for all your transportation needs since 2015.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1FKZuDLxca/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a> */}
              <a
                href="https://www.instagram.com/luxoralimos"
                target="_blank"
                className="w-10 h-10 rounded-full bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 fill-current text-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[var(--color-primary)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Fleet
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#book"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[var(--color-primary)]">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Airport Transfers
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Wedding Services
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Corporate Events
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Special Occasions
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  City Tours
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-300 hover:text-[var(--color-primary)] transition-colors duration-300 flex items-center"
                >
                  <span className="text-[var(--color-primary)] mr-2">›</span>
                  Hourly Charters
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5 text-[var(--color-primary)]">
              Contact Us
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  1942 Broadway Ste 314C # 76189
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300">(917) 924-6101</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">info@luxoralimos.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300">24/7 Availability</span>
              </li>
            </ul>

            <div>
              <h3 className="text-xl font-semibold mb-5 text-[var(--color-primary)]">
                Newsletter
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Stay updated with our latest offers and luxury travel tips.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (newsletterError) setNewsletterError("");
                    }}
                    className={`py-2 px-3 text-gray-800 bg-white/90 border-2 ${
                      newsletterError
                        ? "border-red-500"
                        : "border-[var(--color-primary)]/20"
                    } focus:border-[var(--color-primary)] outline-none flex-grow rounded-l-md text-sm`}
                    required
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-3 py-2 font-medium transition-colors duration-300 rounded-r-md text-sm whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </div>
                {newsletterError && (
                  <div className="mt-2 text-sm text-red-400">
                    {newsletterError}
                  </div>
                )}
                {subscribed && (
                  <div className="mt-2 text-sm text-green-400 animate-pulse">
                    Thank you for subscribing!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="text-[var(--color-primary)]">Luxora Limos</span>.
              All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
