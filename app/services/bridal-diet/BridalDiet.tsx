"use client";
import { motion } from "framer-motion";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import {
  Check,
  Phone,
  MessageCircle,
  Star,
  Sparkles,
  Heart,
  Crown,
  Clock,

} from "lucide-react";
import Image from "next/image";

import bridaldietimg1 from "@/public/image/bridal-dietimg1.jpg";
import { BridalDietStructuredData } from "./BridalDietStructuredData";
import { BridalDietSections } from "./BridalDietSections";

// Main Page Component
export default function BridalDietProgram() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-amber-600" />,
      iconBg: "bg-amber-100",
      title: "Complete Bridal Glow",
      description: "Radiant skin, lustrous hair, and natural wedding glow",
    },
    {
      icon: <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-rose-600" />,
      iconBg: "bg-rose-100",
      title: "Healthy Weight Management",
      description: "Sustainable weight loss for your perfect wedding outfit",
    },
    {
      icon: <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Busy Schedule Friendly",
      description: "Designed for hectic wedding planning schedules",
    },
    {
      icon: <Crown className="w-5 h-5 lg:w-6 lg:h-6 text-pink-600" />,
      iconBg: "bg-pink-100",
      title: "Confidence Boost",
      description: "Feel absolutely stunning on your special day",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Bridal Goal Assessment",
      description:
        "Comprehensive evaluation of your wedding timeline, current physique, skin condition, energy levels, and specific bridal goals.",
    },
    {
      step: "02",
      title: "Timeline-Specific Planning",
      description:
        "Create a customized plan based on your wedding timeline - whether you have 6 months, 3 months, or just 1 month.",
    },
    {
      step: "03",
      title: "Glow-Focused Nutrition",
      description:
        "Design meal plans that promote radiant skin, healthy hair, strong nails, and sustained energy for wedding preparations.",
    },
    {
      step: "04",
      title: "Continuous Adaptation",
      description:
        "Weekly adjustments based on your progress, changing schedule, and upcoming wedding events.",
    },
  ];

  const programIncludes = [
    "Timeline-specific meal plans (1-6 months)",
    "Bridal glow nutrition for skin & hair",
    "Weekly progress tracking & adjustments",
    "Daily WhatsApp support (6 days/week)",
    "Event-specific eating strategies",
    "Bloating reduction guidance",
    "Stress management through nutrition",
    "Quick & easy recipe collection",
    "Final week wedding preparation plan",
    "Post-wedding maintenance guidance",
  ];

  return (
    <>
      <BridalDietStructuredData />

      {/* Fixed container to prevent horizontal scrolling */}
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden">
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          {/* Hero Section */}
          <section className="relative py-8 lg:py-10 bg-gradient-to-r from-rose-500 to-pink-600">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-4 left-4 lg:top-10 lg:left-10 w-12 h-12 lg:w-20 lg:h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 w-16 h-16 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <div className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 bg-white/20 rounded-full text-white text-xs lg:text-sm mb-4 lg:mb-6">
                    <Star
                      className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2"
                      fill="white"
                    />
                    For Beautiful Brides
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                    Bridal Diet Plan
                  </h1>

                  <p className="text-base lg:text-xl text-rose-50 mb-6 lg:mb-8 leading-relaxed">
                    Look and feel your absolute best on your wedding day.
                    Achieve the perfect bridal glow with personalized nutrition
                    designed for busy brides-to-be.
                  </p>

                  <ServiceCtaButtons
                    contactColorClass="text-rose-600"
                    whatsappLabel="WhatsApp Us"
                    variant="bridal"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-white text-sm">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-rose-300" />
                      <span>Radiant Skin Glow</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-rose-300" />
                      <span>Perfect Fit Outfits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-rose-300" />
                      <span>Daily Support</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 mt-8 lg:mt-0 w-full"
                >
                  <div className="text-center text-white">
                    <div className="space-y-3 text-left mb-4 lg:mb-6">
                      {programIncludes.slice(0, 5).map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Check className="w-4 h-4 text-rose-300 flex-shrink-0" />
                          <span className="text-rose-50 text-sm lg:text-base">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 lg:py-4 bg-rose-500 text-white font-bold rounded-xl lg:rounded-2xl hover:bg-rose-600 transition-all duration-300 text-sm lg:text-base"
                    >
                      Start Your Bridal Transformation
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Your Perfect Wedding Look Section */}
          <section className="py-12 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#262262] mb-4 lg:mb-6">
                    Your Perfect Wedding Look
                  </h2>

                  <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed text-sm lg:text-base">
                    <p>
                      Your wedding day is one of the most important and
                      memorable days of your life. Every bride wants to look and
                      feel her absolute best – glowing skin, radiant confidence,
                      perfect energy levels, and that dreamy wedding-ready
                      physique.
                    </p>

                    <p>
                      At Dietfiniti, our Bridal Diet Plan is specifically
                      designed to help you achieve all these goals while fitting
                      seamlessly into your hectic pre-wedding schedule.
                    </p>

                    <p>
                      Our bridal nutrition program is more than just a weight
                      loss plan – it&apos;s a comprehensive approach to help you
                      achieve the complete bridal glow.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4 lg:gap-6 mt-8 lg:mt-0 w-full"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-rose-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border border-rose-100 w-full"
                    >
                      <div className={`w-10 h-10 lg:w-12 lg:h-12 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm lg:text-base mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section className="py-12 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8 lg:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#262262] mb-4">
                  Bridal Approach
                </h2>
              </motion.div>

              {/* Image + Description Section */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center w-full"
                >
                  <Image
                    src={bridaldietimg1}
                    alt="Bridal Diet Plan Methodology"
                    className="w-full max-w-md h-auto rounded-2xl lg:rounded-3xl shadow-lg"
                    priority
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left w-full"
                >
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    A comprehensive and personalized bridal wellness methodology
                    designed to help you look radiant and feel confident on your
                    big day. From customized nutrition plans and mindful
                    lifestyle adjustments to holistic beauty and fitness
                    guidance.
                  </p>
                </motion.div>
              </div>

              {/* Methodology Steps */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
                {methodologySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg lg:text-xl">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Sections */}
          <BridalDietSections />
        </div>
      </div>
    </>
  );
}
