import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #1c2331; border-bottom: 2px solid #c8a97e; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <h3 style="color: #1c2331; margin-top: 20px;">Message:</h3>
        <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c8a97e;">${formData.message}</p>
        <p style="font-size: 12px; color: #666; margin-top: 30px;">This message was sent from the Luxor Limos website contact form.</p>
      </div>
    `;

    const templateParams = {
      to_email: "info@luxoralimos.com",
      to_name: "Luxor Limos Admin",
      from_name: "Luxor Limos Website",
      from_email: formData.email,
      subject: "New Contact Form Submission",
      message_html: htmlContent,
      type: "contact",
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
          console.log("Contact form email sent successfully:", result.text);
          setSubmitSuccess(true);
          setIsSubmitting(false);

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending contact form email:", error.text);
          setSubmitError(
            "Failed to send message. Please try again or contact us directly."
          );
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 bg-[#c8a97e]/10 px-3 py-1 text-xs text-[#c8a97e] uppercase tracking-wider font-semibold rounded-md">
            Reach Out
          </div>
          <h2 className="text-4xl font-bold mb-4 section-title text-[#1c2331] ml-5">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#c8a97e] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to answer any questions about our services and help you
            book your perfect luxury transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#c8a97e] -mt-6 -ml-6 z-0"></div>

            <div className="bg-white shadow-xl p-8 lg:p-10 rounded-lg relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#1c2331] flex items-center">
                <span className="w-10 h-1 bg-[#c8a97e] mr-3"></span>
                Get in Touch
              </h3>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Ready to elevate your journey? Book your luxury limousine with
                Luxora Limos today. Whether you're impressing a client,
                celebrating a milestone, or simply indulging in high-end travel,
                we're here to deliver a seamless and elegant experience.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#c8a97e]/10 p-3 rounded-full">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                      Our Address
                    </h4>
                    <p className="text-gray-600">
                      1942 Broadway Ste 314C # 76189
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#c8a97e]/10 p-3 rounded-full">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                      Phone
                    </h4>
                    <p className="text-gray-600">(917) 924-6101</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#c8a97e]/10 p-3 rounded-full">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                      Email
                    </h4>
                    <p className="text-gray-600">info@luxoralimos.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-[#c8a97e]/10 p-3 rounded-full">
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
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-[#1c2331]">
                      Hours
                    </h4>
                    <p className="text-gray-600">
                      24/7 - We're always here for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white shadow-xl p-8 lg:p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#1c2331] flex items-center">
                <span className="w-10 h-1 bg-[#c8a97e] mr-3"></span>
                Send Us a Message
              </h3>
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-md mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">
                        Thank you for your message! We'll get back to you as
                        soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 font-medium">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 font-medium">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 font-medium">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2 font-medium">
                      Message*
                    </label>
                    <textarea
                      className={`w-full px-4 py-3 border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e] focus:border-[#c8a97e]`}
                      rows="2"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#c8a97e] hover:bg-[#a38147] text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 shadow-md"
                    disabled={isSubmitting}
                  >
                    <div className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#1c2331]">
            Experience Luxury Limo Transportation{" "}
            <span className="text-[#c8a97e]">Anywhere</span>
          </h3>
          <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-600">
            Our dedication to excellence, exceptional service, and nationwide
            availability have made Luxora Limos a leading name in luxury
            transportation across the United States.
          </p>
          <a
            href="#book"
            className="bg-[#c8a97e] hover:bg-[#a38147] text-white px-10 py-4 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Book Your Limousine Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
