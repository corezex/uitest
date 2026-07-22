"use client";
import Image from "next/image";
import weightlossimg1 from "@/public/image/weightgainimg1.jpg";
import weightlossimg2 from "@/public/image/weightlossimg2.png";
import weightlossimg3 from "@/public/image/weightlossimg3.png";
import { motion } from "framer-motion";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { WeightLossStructuredData } from "./WeightLossStructuredData";
import { WeightLossSections } from "./WeightLossSections";
import {
  Check,
  Star,
  Scale,
  Heart,
  Activity,
  Clock,
  Users,
} from "lucide-react";

// Add this layout wrapper to prevent horizontal scrolling
const GlobalLayoutFix = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-x-hidden">
    <div className="w-full max-w-[100vw] overflow-hidden">{children}</div>
  </div>
);

export default function WeightLossProgram() {
  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Sustainable Weight Loss",
      description: "Lose 0.5-1 kg per week with science-backed methods",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health-First Approach",
      description: "Prioritize overall health while achieving weight goals",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Energy Preservation",
      description: "Maintain high energy levels throughout your journey",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lifetime Habits",
      description: "Build sustainable eating habits for long-term success",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Comprehensive Assessment",
      description:
        "Detailed analysis of your health status, lifestyle, eating patterns, and weight loss goals. We calculate your BMR and TDEE to determine optimal calorie targets.",
    },
    {
      step: "02",
      title: "Personalized Plan Creation",
      description:
        "Custom meal plan with moderate calorie deficit (500-750 calories below TDEE) for healthy weight loss of 0.5-1 kg per week. Balanced nutrition with adequate protein, healthy fats, and complex carbs.",
    },
    {
      step: "03",
      title: "Implementation Support",
      description:
        "Intensive support during initial weeks with grocery guidance, meal prep strategies, and WhatsApp support. Learn portion control and mindful eating techniques.",
    },
    {
      step: "04",
      title: "Regular Monitoring & Optimization",
      description:
        "Weekly progress tracking with adjustments based on your results. Continuous optimization ensures consistent, healthy progress toward your goals.",
    },
  ];

  const programIncludes = [
    "Personalized calorie-controlled meal plans",
    "Macro-balanced nutrition guidance",
    "Weekly progress tracking & adjustments",
    "Daily WhatsApp support (6 days/week)",
    "Recipe collection & meal prep guide",
    "Emotional eating strategies",
    "Portion control education",
    "Maintenance phase guidance",
    "Exercise recommendations",
    "Lifetime habit building",
  ];

  return (
    <GlobalLayoutFix>
      <WeightLossStructuredData />

      {/* Hero Section - Fixed mobile overflow */}
      <section className="relative py-10 bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden w-full">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm mb-6">
                <Star className="w-4 h-4 mr-2" fill="white" />
                Most Popular Program
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Weight Loss Program
              </h1>
              <p className="text-lg sm:text-xl text-green-50 mb-8 leading-relaxed">
                Achieve sustainable weight loss through personalized nutrition
                and lifestyle changes. Lose weight healthily while building
                habits that last a lifetime.
              </p>

              <ServiceCtaButtons contactColorClass="text-green-600" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-8 text-white">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm sm:text-base">
                    0.5-1 kg/week loss
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm sm:text-base">
                    Personalized Plans
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-sm sm:text-base">Daily Support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 w-full"
            >
              <div className="text-center text-white">
                <div className="space-y-4 text-left">
                  {programIncludes.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span className="text-green-50 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-4 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-all duration-300 text-sm md:text-base"
                >
                  Start Your Journey Today
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding Weight Loss Section */}
      <section className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* First Row: Text on left, image on right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-6">
                Understanding Healthy Weight Loss
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Weight loss is not just about eating less – it&apos;s about
                  eating right. At NutriPlan, our Weight Loss Program is
                  designed to help you lose weight in a healthy, sustainable
                  manner without compromising your nutrition or overall health.
                </p>

                <p>
                  We understand that every pound you want to lose represents a
                  personal goal, a health concern, or a desire to feel more
                  confident. That&apos;s why we approach weight loss with
                  sensitivity, science, and personalization.
                </p>

                <p>
                  Our program is built on creating a moderate calorie deficit
                  while ensuring you receive all essential nutrients. We
                  don&apos;t believe in crash diets or extreme restrictions.
                  Instead, we focus on balanced nutrition that includes adequate
                  protein for muscle preservation, healthy fats for hormone
                  production, complex carbohydrates for energy, and plenty of
                  fiber for satiety and gut health.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg mx-auto lg:mx-0"
            >
              <Image
                src={weightlossimg1}
                alt="Dietfiniti Program Services"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                placeholder="blur"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>

          {/* Second Row: Image on left, features on right */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image on left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg mx-auto lg:mx-0 order-1 lg:order-1"
            >
              <Image
                src={weightlossimg2}
                alt="Weight Loss Program Features"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                placeholder="blur"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Features on right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-2 lg:order-2 w-full"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-green-50 rounded-2xl p-4 md:p-6 text-center border border-green-100 w-full"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Step Methodology
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure your weight loss journey is
              effective, sustainable, and tailored to your needs
            </p>
          </motion.div>

          {/* Main Layout */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center w-full"
            >
              <Image
                src={weightlossimg3}
                alt="Weight Loss Program Features"
                className="w-full max-w-[500px] md:max-w-[600px] h-auto rounded-2xl shadow-2xl object-cover"
                placeholder="blur"
              />
            </motion.div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 gap-6 md:gap-8 w-full">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full"
                >
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
                      {step.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WeightLossSections />
    </GlobalLayoutFix>
  );
}
