"use client";
import { motion } from "framer-motion";
import { WeightGainStructuredData } from "./WeightGainStructuredData";
import { WeightGainSections } from "./WeightGainSections";
import Image from "next/image";
import weightlossimg1 from "@/public/image/weightgainimg1.jpg";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";

import {
  Check,
  Star,
  TrendingUp,
  Activity,
  Clock,
  Users,
  Phone,
  MessageCircle,
  Utensils,
} from "lucide-react";

// Add this layout wrapper to prevent horizontal scrolling
const GlobalLayoutFix = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 overflow-x-hidden">
    <div className="w-full max-w-[100vw] overflow-hidden">{children}</div>
  </div>
);

export default function WeightGainProgram() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      title: "Healthy Weight Gain",
      description:
        "Gain 0.5 kg per week through muscle mass and healthy body composition",
    },
    {
      icon: <Activity className="w-6 h-6 text-rose-600" />,
      iconBg: "bg-rose-100",
      title: "Muscle Building Focus",
      description:
        "Focus on nutrient-dense foods that support muscle growth and strength",
    },
    {
      icon: <Utensils className="w-6 h-6 text-orange-600" />,
      iconBg: "bg-orange-100",
      title: "Frequent Meal Plans",
      description: "5-7 meals per day with calorie-dense, nutritious foods",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Sustainable Results",
      description:
        "Build lasting eating habits to maintain your healthy weight",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Comprehensive Assessment",
      description:
        "Understand why you're underweight - fast metabolism, inadequate intake, poor appetite, or health issues. Calculate your calorie needs and determine the appropriate surplus for healthy weight gain.",
    },
    {
      step: "02",
      title: "Calorie-Dense Meal Planning",
      description:
        "Create meal plans with 500-750 calories above maintenance needs. Include calorie-dense nutritious foods, frequent meals (5-7 per day), and strategic snacking for maximum calories in reasonable portions.",
    },
    {
      step: "03",
      title: "Gradual Progression",
      description:
        "Start with moderate calorie increases and gradually build up as your body adapts and appetite increases. Prevents digestive discomfort and helps adjustment to increased food intake.",
    },
    {
      step: "04",
      title: "Regular Monitoring",
      description:
        "Bi-weekly follow-ups track weight gain progress, ensuring healthy rate. Adjust calories based on progress and monitor energy levels, digestive health, and challenges.",
    },
  ];

  const programIncludes = [
    "Personalized high-calorie meal plans",
    "Nutrient-dense food guidance",
    "Bi-weekly progress tracking & adjustments",
    "Daily WhatsApp support (6 days/week)",
    "Recipe collection for weight gain",
    "Appetite improvement strategies",
    "Strength training guidance",
    "Maintenance phase planning",
    "Frequent meal scheduling",
    "Lifetime habit building",
  ];

  return (
    <GlobalLayoutFix>
      <WeightGainStructuredData />

      {/* Hero Section - Fixed mobile overflow */}
      <section className="relative py-10 bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden w-full">
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
                For Fast Metabolism
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Weight Gain Program
              </h1>

              <p className="text-lg sm:text-xl text-amber-50 mb-8 leading-relaxed">
                Gain healthy weight through personalized nutrition for fast
                metabolism. Build muscle mass with nutrient-dense foods and
                sustainable eating habits.
              </p>

              <ServiceCtaButtons contactColorClass="text-amber-600" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-8 text-white">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-amber-300" />
                  <span className="text-sm sm:text-base">0.5 kg/week gain</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-amber-300" />
                  <span className="text-sm sm:text-base">
                    Muscle Building Focus
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-amber-300" />
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
                      <Check className="w-5 h-5 text-amber-300 flex-shrink-0" />
                      <span className="text-amber-50 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-4 bg-amber-500 text-white font-bold rounded-2xl hover:bg-amber-600 transition-all duration-300 text-sm md:text-base"
                >
                  Start Your Weight Gain Journey
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding Weight Gain Section */}
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
                Understanding Healthy Weight Gain
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Being underweight can be just as concerning as being
                  overweight, affecting your health, confidence, and quality of
                  life. At Dietfiniti, our Weight Gain Program is designed for
                  individuals with fast metabolism, hypermetabolism, or those
                  who are underweight and want to gain healthy weight.
                </p>

                <p>
                  We understand that gaining weight is not simply about eating
                  more – it&apos;s about eating right to ensure the weight you
                  gain is healthy and sustainable. Our program focuses on
                  helping you gain weight primarily through increased muscle
                  mass and healthy body composition, not just fat accumulation.
                </p>

                <p>
                  Unlike many weight gain approaches that rely on unhealthy junk
                  foods or expensive supplements, our plans use regular,
                  wholesome foods that provide the extra calories you need while
                  supporting your overall health. The result is not just numbers
                  on the scale, but improved strength, better energy levels,
                  enhanced immune function, and increased confidence.
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
                  className="bg-amber-50 rounded-2xl p-4 md:p-6 text-center border border-amber-100 w-full"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-6">
              Weight Gain Methodology
            </h2>
          </motion.div>

          {/* Image Left + Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-md mx-auto lg:mx-0"
            >
              <Image
                src={weightlossimg1}
                alt="Weight Gain Methodology"
                className="w-full rounded-2xl shadow-lg object-cover"
                placeholder="blur"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left w-full"
            >
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our weight gain methodology follows a structured, science-backed
                approach designed to help you achieve healthy, lean body mass
                without adding unnecessary fat. We start by analyzing your body
                composition, metabolism, and daily lifestyle to create a plan
                that&apos;s fully personalized for your physiology. Through a
                careful combination of calorie-dense, nutrient-rich meals,
                strength training, and recovery guidance, we promote gradual
                muscle development and lasting metabolic balance. Regular
                progress assessments, lifestyle coaching, and expert supervision
                ensure that your transformation is not only effective but also
                sustainable—supporting your confidence, vitality, and long-term
                health.
              </p>
            </motion.div>
          </div>

          {/* Methodology Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
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
      </section>

      {/* Additional Sections Component */}
      <WeightGainSections />
    </GlobalLayoutFix>
  );
}
