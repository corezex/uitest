"use client";
import { motion } from "framer-motion";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";
import { SportsNutritionStructuredData } from "./SportsNutritionStructuredData";
import { SportsNutritionSections } from "./SportsNutritionSections";
import {
  Check,
  Star,
  Activity,
  Zap,
  Clock,
  Users,
  Phone,
  MessageCircle,
  Target,
} from "lucide-react";
import Image from "next/image";
import sportsnutritionimg1 from "@/public/image/sports-nutritionimg1.jpg";

// Add this layout wrapper to prevent horizontal scrolling
const GlobalLayoutFix = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 overflow-x-hidden">
    <div className="w-full max-w-[100vw] overflow-hidden">{children}</div>
  </div>
);

export default function SportsNutritionProgram() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      iconBg: "bg-amber-100",
      title: "Peak Performance",
      description: "Optimize energy levels and athletic output",
    },
    {
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      title: "Faster Recovery",
      description: "Reduce downtime and improve training adaptation",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100",
      title: "Sport-Specific Plans",
      description: "Customized nutrition for your specific sport",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Nutrient Timing",
      description: "Strategic fueling around training and competition",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Sport & Goal Assessment",
      description:
        "Comprehensive evaluation of your sport, training regimen, performance goals, body composition, and competition schedule. We analyze your specific energy demands and nutritional requirements.",
    },
    {
      step: "02",
      title: "Performance Nutrition Planning",
      description:
        "Create customized meal plans with precise macronutrient distribution, meal timing, and hydration strategies tailored to your sport's unique demands and training intensity.",
    },
    {
      step: "03",
      title: "Training Adaptation",
      description:
        "Dynamic nutrition plans that adapt to your training cycles - high-intensity periods, recovery phases, competition season, and off-season. Prevent under-fueling or over-eating.",
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description:
        "Weekly performance tracking and adjustments based on your feedback, coach input, and competition results. Fine-tune strategies for peak performance and recovery.",
    },
  ];

  const programIncludes = [
    "Sport-specific meal plans",
    "Pre/during/post-workout nutrition",
    "Hydration & electrolyte strategies",
    "Weekly performance tracking",
    "Daily WhatsApp support (6 days/week)",
    "Evidence-based supplement guidance",
    "Competition day fueling plans",
    "Body composition management",
    "Recovery nutrition protocols",
    "Coach collaboration support",
  ];

  return (
    <>
      <GlobalLayoutFix>
        <SportsNutritionStructuredData />

        {/* Hero Section - Fixed mobile overflow */}
        <section className="relative py-10 bg-gradient-to-r from-blue-600 to-cyan-600 overflow-hidden w-full">
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
                  For Athletes & Fitness Enthusiasts
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Sports Nutrition Plan
                </h1>

                <p className="text-lg sm:text-xl text-blue-50 mb-8 leading-relaxed">
                  Fuel your athletic performance and optimize recovery. Achieve
                  peak performance with science-backed nutrition strategies
                  tailored to your sport.
                </p>

                <ServiceCtaButtons
                  contactColorClass="text-blue-600"
                  whatsappLabel="WhatsApp Us"
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-8 text-white">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-blue-300" />
                    <span className="text-sm sm:text-base">Sport-Specific</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-blue-300" />
                    <span className="text-sm sm:text-base">
                      Performance Focused
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-blue-300" />
                    <span className="text-sm sm:text-base">Science-Backed</span>
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
                        <Check className="w-5 h-5 text-blue-300 flex-shrink-0" />
                        <span className="text-blue-50 text-sm md:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 py-4 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 text-sm md:text-base"
                  >
                    Boost Your Performance
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fuel Your Performance Section */}
        <section className="py-16 md:py-20 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-6">
                  Fuel Your Athletic Performance
                </h2>

                <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Whether you&apos;re a competitive athlete, recreational
                    sports player, or fitness enthusiast training for an event,
                    proper nutrition is the foundation of peak performance. At
                    Dietfiniti, our Sports Nutrition Plan is designed to help
                    athletes achieve their performance goals through tailored
                    diet and hydration strategies.
                  </p>

                  <p>
                    We understand that athletic performance isn&apos;t just
                    about training hard – it&apos;s about fueling your body
                    correctly to support training demands, optimize recovery,
                    build lean muscle, and maintain peak physical condition.
                  </p>

                  <p>
                    Sport-specific nutrition is crucial because different sports
                    have different energy demands. Our approach integrates
                    regular evaluation and adjustment based on your performance
                    feedback. The result is improved performance, faster
                    recovery, reduced injury risk, better body composition, and
                    the competitive edge that comes from being properly fueled.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-blue-50 rounded-2xl p-4 md:p-6 text-center border border-blue-100 w-full"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${feature.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4`}>
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
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-4">
                Our Sports Nutrition Approach
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive and strategic plan to maximize athletic
                performance through tailored nutrition, hydration balance, and
                recovery optimization — ensuring your body performs at its peak
                before, during, and after competition.
              </p>
            </motion.div>

            {/* Image Left - Cards Right */}
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Left Side Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center w-full"
              >
                <Image
                  src={sportsnutritionimg1}
                  alt="Sports Nutrition Illustration"
                  className="rounded-2xl shadow-lg w-full max-w-md object-contain"
                  placeholder="blur"
                />
              </motion.div>

              {/* Right Side Cards */}
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                {methodologySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
                        {step.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
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

        {/* Additional Sections Component */}
        <SportsNutritionSections />
      </GlobalLayoutFix>
    </>
  );
}
