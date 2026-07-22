"use client";
import Image from "next/image";
import React from "react";

import Head from "next/head";
import ProgramsSection from "./ProgramsSection";
import UniqueApproachSection from "./UniqueApproachSection";

import Servicesimg1 from "@/public/image/Servicesimg1.jpg";
import logo from "@/public/image/logo2.png";

import { motion } from "framer-motion";
import {
  Info,
  Star,
  Heart,
  Utensils,
  MessageCircle,
  TrendingUp,
  RefreshCw,
  BookOpen,
  Target,
} from "lucide-react";

export default function ProgramComparisonPage() {
 const includedFeatures = [
  {
    icon: <Utensils className="w-6 h-6 text-green-600" />,
    title: "Detailed Meal Plans",
    description: [
      "Comprehensive meal plans with specific timings, portion sizes.",
      "Multiple simple food options for each meal.",
      "Flexibility to choose based on your preference and availability."
    ],
    borderColor: "border-green-100",
    bgColor: "bg-green-100",
    gradient: "from-green-50 to-green-100",
    iconBg: "bg-green-500",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
    title: "WhatsApp Support",
    description: [
      "Direct access to your nutritionist via WhatsApp.",
      "(6 days/week, 11 AM - 7 PM) for questions, meal feedback, recipes, or motivation.",
      "We're just a message away!"
    ],
    borderColor: "border-blue-100",
    bgColor: "bg-blue-100",
    gradient: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    title: "Progress Tracking",
    description: [
      "Regular monitoring of weight, body measurements, and health parameters.",
      "We track everything to ensure you're moving in the right direction.",
      "Weekly progress and follow-up call."
    ],
    borderColor: "border-purple-100",
    bgColor: "bg-purple-100",
    gradient: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
    title: "Plan Adjustments",
    description: [
      "Your plan evolves with you.",
      "Based on progress and feedback, we make regular weekly adjustments to optimize results and ensure continued effectiveness.",
      "We also Consider Festive seasons and Fasts."
    ],
    borderColor: "border-orange-100",
    bgColor: "bg-orange-100",
    gradient: "from-orange-50 to-orange-100",
    iconBg: "bg-orange-500",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-red-600" />,
    title: "Recipe Collection",
    description: [
      "Access to healthy, tasty recipes aligned with your diet plan.",
      "All recipes use simple, everyday ingredients and are easy to prepare at home.",
      "Recipes planned as per nutrition & lifestyle requirements."
    ],
    borderColor: "border-red-100",
    bgColor: "bg-red-100",
    gradient: "from-red-50 to-red-100",
    iconBg: "bg-red-500",
  },
  {
    icon: <Target className="w-6 h-6 text-teal-600" />,
    title: "Maintenance Guidance",
    description: [
      "Once you achieve your goal, we provide a maintenance plan and guidance to help sustain your results long-term.",
      "Maintenance counseling call at the end of each program.",
      "Committed to your lasting success."
    ],
    borderColor: "border-teal-100",
    bgColor: "bg-teal-100",
    gradient: "from-teal-50 to-teal-100",
    iconBg: "bg-teal-500",
  },
];

  return (
    <>
      <Head>
        <title>Dietfiniti Program Comparison | Choose Your Health Plan</title>
        <meta
          name="description"
          content="Compare Dietfiniti programs and choose the perfect plan for your health goals. All programs include personalized meal plans, daily WhatsApp support, progress tracking, and maintenance guidance."
        />
        <meta
          name="keywords"
          content="diet program comparison, nutrition plans, meal plans, weight loss program, fitness diet, personalized nutrition, WhatsApp diet support"
        />
        <meta
          property="og:title"
          content="Dietfiniti Program Comparison | Choose Your Health Plan"
        />
        <meta
          property="og:description"
          content="Compare and choose from Dietfiniti's comprehensive nutrition programs with personalized meal plans and daily support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dietfiniti Program Comparison | Choose Your Health Plan"
        />
        <meta
          name="twitter:description"
          content="Compare Dietfiniti programs and choose the perfect plan for your health goals."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-10 sm:py-4 lg:py-8 bg-gradient-to-br from-green-600 via-emerald-500 to-blue-600 overflow-hidden">
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-white/80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 left-20 w-14 h-14 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center"
          >
            <Star className="w-7 h-7 text-white/80" />
          </motion.div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-green-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-300/15 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content - Left Side */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-green-50 text-sm mb-8 backdrop-blur-sm border border-white/20"
                >
                  <Star className="w-4 h-4 mr-2" fill="currentColor" />
                  Trusted by 2,000+ Clients
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  Our Services
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent mt-2"
                  >
                    Dietfiniti Program
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl sm:text-2xl text-green-50 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                >
                  Compare programs and choose the one that fits your
                  <span className="font-semibold text-white">
                    {" "}
                    health goals, lifestyle, and preferences
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-flex items-center px-6 py-3 bg-white/20 rounded-2xl text-green-50 text-base backdrop-blur-sm border border-white/30 mb-8"
                >
                  <Info className="w-5 h-5 mr-3" />
                  <span className="font-medium">
                    All programs include personalized meal plans & daily support
                  </span>
                </motion.div>
              </div>

              {/* Image - Right Side */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 right-10 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center"
              >
                <Utensils className="w-8 h-8 text-white/80" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:w-1/2 flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-lg">
                  <Image
                    src={Servicesimg1}
                    alt="Dietfiniti Program Services - Personalized nutrition plans and diet programs"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                    placeholder="blur"
                    priority
                  />
                  {/* Optional: Add a decorative element to the image */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <ProgramsSection />

        {/* Features Section */}
        <section className="mx-auto py-5 px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-5 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4"
                >
                  <Star className="w-4 h-4 mr-2" fill="currentColor" />
                  Comprehensive Support
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  What&apos;s Included in{" "}
                  <span className="text-green-600">Every</span> Program
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Complete nutrition support system designed for your success
                  and long-term wellness
                </p>
              </div>

              {/* Enhanced Features Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {includedFeatures.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative group bg-gradient-to-br ${feature.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${feature.borderColor} overflow-hidden flex flex-col items-center`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

      <div className="relative z-10 w-full">
        {/* Icon Container at Top Center */}
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className={`w-20 h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
          >
            <div className={`p-3 rounded-full ${feature.iconBg} bg-opacity-20`}>
              {React.cloneElement(feature.icon, {
                className: "w-8 h-8 text-current"
              })}
            </div>
          </motion.div>
        </div>

        {/* Title - Centered */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-6 group-hover:text-gray-800 transition-colors">
          {feature.title}
        </h3>

        {/* Bullet points description */}
        <ul className="space-y-3">
          {feature.description.map((point, pointIndex) => (
            <motion.li 
              key={pointIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + pointIndex * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <span className={`inline-block w-2 h-2 rounded-full ${feature.iconBg} mr-3 mt-2 flex-shrink-0`}></span>
              <span className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Hover Effect Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 transition-all duration-500"
        ></motion.div>
      </div>
    </motion.div>
  ))}
</div>
            </div>
          </motion.section>
        </section>
        <UniqueApproachSection />
        {/* Additional Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                Why Choose{" "}
                <Image
                  src={logo}
                  alt="Dietfiniti Program Services - Personalized nutrition plans and diet programs"
                  className="w-10 h-auto rounded-2xl object-cover"
                  placeholder="blur"
                  priority
                />
                
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven approach delivers real results through personalized
                care and continuous support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  95% of our clients achieve their health goals within the first
                  3 months
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Live Support
                </h3>
                <p className="text-gray-600">
                  Get answers to your questions on WhatsApp anytime with our dedicated support team
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Long-term Success
                </h3>
                <p className="text-gray-600">
                  Maintenance plans ensure you keep your results for life
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
