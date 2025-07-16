import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    vehicleType: "",
    passengers: "",
    luggage: "",

    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",

    specialRequests: "",
    promoCode: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef();

  const today = new Date().toISOString().split("T")[0];

  const vehicleCapacities = {
    lincolnContinental: 3,
    mercedesSClass: 3,
    cadillacEscalade: 6,
    chevySuburban: 6,
    mercedesSprinter: 14,
    executiveMinibus: 38,
    executiveCoach: 56,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, "");

      if (newValue.length >= 10) {
        newValue = `(${newValue.substring(0, 3)}) ${newValue.substring(
          3,
          6
        )}-${newValue.substring(6, 10)}`;
      }
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateStep = (step) => {
    let stepErrors = {};
    let isValid = true;

    switch (step) {
      case 1:
        if (!formData.name.trim()) {
          stepErrors.name = "Name is required";
          isValid = false;
        }

        if (!formData.email.trim()) {
          stepErrors.email = "Email is required";
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          stepErrors.email = "Please enter a valid email address";
          isValid = false;
        }

        if (!formData.phone.trim()) {
          stepErrors.phone = "Phone number is required";
          isValid = false;
        } else if (formData.phone.replace(/\D/g, "").length < 10) {
          stepErrors.phone = "Please enter a valid 10-digit phone number";
          isValid = false;
        }
        break;

      case 2:
        if (!formData.vehicleType) {
          stepErrors.vehicleType = "Please select a vehicle type";
          isValid = false;
        }

        if (!formData.passengers) {
          stepErrors.passengers = "Number of passengers is required";
          isValid = false;
        } else {
          const passengers = parseInt(formData.passengers);
          if (isNaN(passengers) || passengers < 1) {
            stepErrors.passengers = "Please enter a valid passenger count";
            isValid = false;
          }
        }

        if (!formData.luggage) {
          stepErrors.luggage = "Number of luggage pieces is required";
          isValid = false;
        } else {
          const luggage = parseInt(formData.luggage);
          if (isNaN(luggage) || luggage < 0) {
            stepErrors.luggage = "Please enter a valid luggage count";
            isValid = false;
          }
        }
        break;

      case 3:
        if (!formData.pickupDate) {
          stepErrors.pickupDate = "Please select a pickup date";
          isValid = false;
        } else {
          const selectedDate = new Date(formData.pickupDate);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (selectedDate < today) {
            stepErrors.pickupDate = "Pickup date cannot be in the past";
            isValid = false;
          }
        }

        if (!formData.pickupTime) {
          stepErrors.pickupTime = "Please select a pickup time";
          isValid = false;
        }

        if (!formData.pickupLocation.trim()) {
          stepErrors.pickupLocation = "Pickup location is required";
          isValid = false;
        }

        if (!formData.dropoffLocation.trim()) {
          stepErrors.dropoffLocation = "Dropoff location is required";
          isValid = false;
        }
        break;
    }

    setErrors(stepErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(bookingStep)) {
      setBookingStep(bookingStep + 1);
    }
  };

  const prevStep = () => {
    setBookingStep(bookingStep - 1);
  };

  const validateForm = () => {
    const personalInfoValid = validateStep(1);
    const tripDetailsValid = validateStep(2);
    const locationDetailsValid = validateStep(3);

    return personalInfoValid && tripDetailsValid && locationDetailsValid;
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${amPm}`;
  };

  const getVehicleFullName = (vehicleValue) => {
    const vehicleMap = {
      lincolnContinental: "Lincoln Continental",
      mercedesSClass: "Mercedes-Benz S-Class",
      cadillacEscalade: "Cadillac Escalade",
      chevySuburban: "Chevrolet Suburban",
      mercedesSprinter: "Mercedes-Benz Sprinter",
      executiveMinibus: "Executive Minibus",
      executiveCoach: "Executive Coach",
    };

    return vehicleMap[vehicleValue] || vehicleValue;
  };

  const generateBookingReference = () => {
    const timestamp = new Date().getTime().toString().slice(-6);
    return `LUX-${timestamp}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const bookingReference = generateBookingReference();

    const adminTemplateParams = {
      booking_ref: bookingReference,
      to_email: "info@luxoralimos.com",
      to_name: "Luxor Limos Admin",
      from_name: "Luxor Limos Booking System",
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      vehicle_type: getVehicleFullName(formData.vehicleType),
      passengers: formData.passengers,
      luggage: formData.luggage,
      pickup_date: formatDate(formData.pickupDate),
      pickup_time: formatTime(formData.pickupTime),
      pickup_location: formData.pickupLocation,
      dropoff_location: formData.dropoffLocation,
      special_requests: formData.specialRequests || "None specified",
      promo_code: formData.promoCode || "None applied",
      system_date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        adminTemplateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (adminResult) => {
          console.log(
            "Admin notification email sent successfully:",
            adminResult.text
          );

          setFormData({
            ...formData,
            bookingReference: bookingReference,
          });

          setSubmitSuccess(true);
          setBookingStep(5);
        },
        (error) => {
          console.error("Error sending admin notification email:", error.text);
          setSubmitError(
            "Failed to send booking request. Please try again or contact us directly."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const renderFormStep = () => {
    switch (bookingStep) {
      case 1:
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Personal Information
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 border ${
                  errors.name ? "border-red-300" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-all shadow-md hover:shadow-lg font-medium"
              >
                Next Step →
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Trip Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Vehicle Type*
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.vehicleType ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white transition-colors appearance-none`}
                  required
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="lincolnContinental">
                    Lincoln Continental (3 passengers, 2 luggage)
                  </option>
                  <option value="mercedesSClass">
                    Mercedes-Benz S-Class (3 passengers, 2 luggage)
                  </option>
                  <option value="cadillacEscalade">
                    Cadillac Escalade (6 passengers, 6 luggage)
                  </option>
                  <option value="chevySuburban">
                    Chevrolet Suburban (6 passengers, 6 luggage)
                  </option>
                  <option value="mercedesSprinter">
                    Mercedes-Benz Sprinter (14 passengers, 8 luggage)
                  </option>
                  <option value="executiveMinibus">
                    Executive Minibus (38 passengers, 16 luggage)
                  </option>
                  <option value="executiveCoach">
                    Executive Coach (56 passengers, 30 luggage)
                  </option>
                </select>
                {errors.vehicleType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.vehicleType}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Number of Passengers*
                </label>
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  min="1"
                  className={`w-full px-4 py-3 border ${
                    errors.passengers ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                  required
                />
                {errors.passengers && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.passengers}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Number of Luggage*
                </label>
                <input
                  type="number"
                  name="luggage"
                  value={formData.luggage}
                  onChange={handleChange}
                  min="0"
                  className={`w-full px-4 py-3 border ${
                    errors.luggage ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                  required
                />
                {errors.luggage && (
                  <p className="text-red-500 text-sm mt-1">{errors.luggage}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-medium"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-all shadow-md hover:shadow-lg font-medium"
              >
                Next Step →
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Pickup & Dropoff Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Pickup Date*
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  min={today}
                  className={`w-full px-4 py-3 border ${
                    errors.pickupDate ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                  required
                />
                {errors.pickupDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pickupDate}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Pickup Time*
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.pickupTime ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                  required
                />
                {errors.pickupTime && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pickupTime}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Pickup Location*
              </label>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Full address (street, city, state, zip)"
                className={`w-full px-4 py-3 border ${
                  errors.pickupLocation ? "border-red-300" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                required
              />
              {errors.pickupLocation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.pickupLocation}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Dropoff Location*
              </label>
              <input
                type="text"
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Full address (street, city, state, zip)"
                className={`w-full px-4 py-3 border ${
                  errors.dropoffLocation ? "border-red-300" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors`}
                required
              />
              {errors.dropoffLocation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dropoffLocation}
                </p>
              )}
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-medium"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-all shadow-md hover:shadow-lg font-medium"
              >
                Next Step →
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Additional Information
            </h3>

            <div className="mb-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
              <h4 className="text-lg font-semibold mb-2 text-amber-800">
                Booking Summary
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vehicle:</span>
                  <span className="font-medium">
                    {getVehicleFullName(formData.vehicleType)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Passengers:</span>
                  <span className="font-medium">{formData.passengers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Luggage:</span>
                  <span className="font-medium">{formData.luggage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup:</span>
                  <span className="font-medium">
                    {formData.pickupDate && formatDate(formData.pickupDate)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">
                    {formData.pickupTime && formatTime(formData.pickupTime)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about any special requirements (champagne, red carpet, specific music, etc.)..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Promo Code
              </label>
              <input
                type="text"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Hidden fields for EmailJS */}
            <input type="hidden" name="to_name" value={formData.name} />
            <input type="hidden" name="to_email" value={formData.email} />
            <input type="hidden" name="customer_phone" value={formData.phone} />
            <input type="hidden" name="luggage" value={formData.luggage} />
            <input
              type="hidden"
              name="vehicle_type"
              value={getVehicleFullName(formData.vehicleType)}
            />
            <input
              type="hidden"
              name="pickup_date"
              value={formData.pickupDate && formatDate(formData.pickupDate)}
            />
            <input
              type="hidden"
              name="pickup_time"
              value={formData.pickupTime && formatTime(formData.pickupTime)}
            />
            <input
              type="hidden"
              name="pickup_location"
              value={formData.pickupLocation}
            />
            <input
              type="hidden"
              name="dropoff_location"
              value={formData.dropoffLocation}
            />

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-medium"
              >
                ← Back
              </button>
              <button
                type="submit"
                className={`${
                  isSubmitting
                    ? "bg-gray-500"
                    : "bg-amber-500 hover:bg-amber-600"
                } text-white px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-medium flex items-center`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
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
                    Processing...
                  </>
                ) : (
                  "Complete Booking"
                )}
              </button>
            </div>
            {submitError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded">
                <p className="text-red-700">{submitError}</p>
              </div>
            )}
          </>
        );
      case 5:
        return (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="relative mx-auto w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Booking Confirmation
            </h3>
            <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
              <p className="text-lg mb-6">
                Thank you for choosing Luxor Limos! Your booking request has
                been received and is being processed.
              </p>
              <div className="mb-6 text-left">
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="text-gray-600">Booking Reference:</span>
                  <span className="font-bold text-gray-800">
                    {formData.bookingReference}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium text-gray-800">
                    {formData.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-800">
                    {formData.email}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span className="text-gray-600">Vehicle:</span>
                  <span className="font-medium text-gray-800">
                    {getVehicleFullName(formData.vehicleType)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-800">
                    {formatDate(formData.pickupDate)}
                  </span>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-left">
                <p className="text-blue-700">
                  A confirmation email has been sent to{" "}
                  <span className="font-bold">{formData.email}</span>. One of
                  our customer service representatives will be in touch shortly
                  to confirm all details.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    vehicleType: "",
                    passengers: "",
                    luggage: "",
                    pickupDate: "",
                    pickupTime: "",
                    pickupLocation: "",
                    dropoffLocation: "",
                    specialRequests: "",
                    promoCode: "",
                  });
                  setBookingStep(1);
                  setErrors({});
                  setSubmitError("");
                  setSubmitSuccess(false);
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Another Ride
              </button>
              <a
                href="#contact"
                className="bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    if (bookingStep === 5) return null;

    return (
      <div className="mb-8">
        <div className="relative">
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="text-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    bookingStep >= step
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                <p
                  className={`text-xs mt-2 font-medium ${
                    bookingStep >= step ? "text-gray-800" : "text-gray-500"
                  }`}
                >
                  {step === 1 && "Personal"}
                  {step === 2 && "Trip"}
                  {step === 3 && "Locations"}
                  {step === 4 && "Additional"}
                </p>
              </div>
            ))}
          </div>
          <div
            className="absolute top-5 h-1 bg-gray-200 w-full"
            style={{ zIndex: -1 }}
          ></div>
          <div
            className="absolute top-5 h-1 bg-amber-500"
            style={{ width: `${(bookingStep - 1) * (100 / 3)}%`, zIndex: -1 }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div
      id="booking-form"
      className="bg-white rounded-lg shadow-xl p-6 md:p-8 border border-gray-100"
    >
      {renderProgressBar()}
      <form ref={formRef} onSubmit={handleSubmit}>
        {renderFormStep()}
      </form>
    </div>
  );
};

export default BookingForm;
