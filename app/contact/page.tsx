"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FAQSection from "../components/FAQSectioncontact";
import { FAQStructuredDatacontact } from "../components/FAQStructuredDatacontact";
import { ContactPageStructuredData } from "./ContactPageStructuredData";

import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const services = [
  "Weight Loss Program",
  "Medical Weight Loss",
  "Weight Gain Program",
  "Pregnancy Diet Plan",
  "Bridal Diet Plan",
  "Sports Nutrition Plan",
  "Others",
];

const steps = [
  {
    number: "1",
    title: "Contact Us",
    description:
      "Fill out the contact form above or reach out via phone, email, or WhatsApp. We'll respond within 24 hours.",
  },
  {
    number: "2",
    title: "Consultation",
    description:
      "We'll discuss your goals, lifestyle, medical history, and answer all questions.",
  },
  {
    number: "3",
    title: "Get Your Plan",
    description:
      "After enrolling, you’ll receive your personalized diet plan within 2–3 days.",
  },
  {
    number: "4",
    title: "Start Your Journey",
    description:
      "Follow your plan with our continuous support every step of the way.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [selectedLocation, setSelectedLocation] = useState("mumbai");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <FAQStructuredDatacontact />
      <ContactPageStructuredData />
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-green-50 max-w-3xl mx-auto"
          >
            Get in touch with us for your consultation
          </motion.p>
        </div>
      </section>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <a
                  href="tel:+919321057899"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <Phone className="text-white w-6 h-6" />
                </a>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-lg font-semibold text-gray-900">
                    +91 9321057899
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                <a
                  href="https://wa.me/919321057899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <MessageCircle className="text-white w-6 h-6" />
                </a>

                <div>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <a
                    href="https://wa.me/919321057899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900"
                  >
                    +91 9321057899
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg font-semibold text-gray-900">
                    hello@nutriplan.com
                  </p>
                </div>
              </div>
            </div>

            {/* Location Cards Section */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mumbai Location Card */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-green-600 w-5 h-5" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      Mumbai Clinic
                    </h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg,
                    opposite Marathon Futurex, Lower Parel East, Mumbai 400013
                  </p>
                  <iframe
                    src="https://www.google.com/maps?q=18.9945464,72.8315512&z=15&output=embed"
                    className="w-full h-56 rounded-xl border-0"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Thane Location Card */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-green-600 w-5 h-5" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      Thane Clinic
                    </h5>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    1st Floor, Oswal Business Plaza, 109/A, Kolshet Rd, above MR
                    D.I.Y, near Kalpataru ParkCity, Dhokali, Thane West, Thane
                    400607
                  </p>
                  <iframe
                    src="https://www.google.com/maps?q=19.2298596,72.9850993&z=15&output=embed"
                    className="w-full h-56 rounded-xl border-0"
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                >
                  <option value="">Select a program</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center items-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl shadow-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Next Steps</h3>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-green-50 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-10"
        >
  
          <FAQSection />
        </motion.div>
      </div>
    </div>
  );
}
