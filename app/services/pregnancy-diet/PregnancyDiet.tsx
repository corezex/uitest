"use client";
import { motion } from "framer-motion";
import { PregnancyDietStructuredData } from "./PregnancyDietStructuredData";
import { PregnancyDietSections } from "./PregnancyDietSections";
import Image from "next/image";
import pregnancydietimg1 from "@/public/image/pregnancy-diet-img1.jpg";
import {
  Check,
  Star,
  Heart,
  Baby,
  Clock,
  Phone,
  MessageCircle,
  Utensils,
} from "lucide-react";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";

// Add this to your global CSS or create a layout wrapper
const GlobalLayoutFix = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 overflow-x-hidden">
    <div className="w-full max-w-[100vw] overflow-hidden">{children}</div>
  </div>
);

export default function PregnancyDietProgram() {
  const features = [
    {
      icon: <Baby className="w-6 h-6 text-pink-600" />,
      iconBg: "bg-pink-100",
      title: "Trimester-Specific Plans",
      description: "Customized nutrition for each stage of pregnancy",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      iconBg: "bg-rose-100",
      title: "Mother & Baby Health",
      description: "Optimal nutrition for both maternal and fetal development",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Postpartum Support",
      description: "Continued guidance for recovery and breastfeeding",
    },
    {
      icon: <Utensils className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      title: "Practical Meal Plans",
      description: "Easy-to-follow plans with regular, affordable foods",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Trimester Assessment",
      description:
        "Comprehensive evaluation of your current trimester, health status, nutritional needs, and pregnancy symptoms. We assess your weight gain progress, energy levels, and any specific concerns you're experiencing.",
    },
    {
      step: "02",
      title: "Nutrient-Focused Planning",
      description:
        "Create trimester-specific meal plans focusing on essential nutrients like folic acid, iron, calcium, protein, and omega-3s. Each plan is timed to support your baby's developmental milestones.",
    },
    {
      step: "03",
      title: "Symptom Management",
      description:
        "Address pregnancy challenges like morning sickness, food aversions, cravings, and fatigue with targeted nutritional strategies and practical meal adjustments.",
    },
    {
      step: "04",
      title: "Continuous Adaptation",
      description:
        "Weekly follow-ups to adjust your plan as you progress through trimesters, manage new symptoms, and prepare for postpartum recovery and breastfeeding.",
    },
  ];

  const programIncludes = [
    "Trimester-specific meal plans",
    "Essential nutrient guidance (folic acid, iron, calcium)",
    "Morning sickness management strategies",
    "Postpartum recovery nutrition",
    "Breastfeeding support plans",
    "Weekly progress tracking",
    "Daily WhatsApp support (6 days/week)",
    "Pregnancy-safe exercise guidance",
    "Food safety guidelines",
    "Lifetime nutrition education",
  ];

  return (
    <GlobalLayoutFix>
      <PregnancyDietStructuredData />

      {/* Hero Section - Fixed mobile overflow */}
      <section className="relative py-10 bg-gradient-to-r from-pink-500 to-purple-600 overflow-hidden w-full">
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
                For Expecting Mothers
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Pregnancy Diet Plan
              </h1>

              <p className="text-lg sm:text-xl text-pink-50 mb-8 leading-relaxed">
                Trimester-specific nutrition for a healthy pregnancy and
                postpartum recovery. Nourish yourself and your growing baby with
                science-backed meal plans.
              </p>

              <ServiceCtaButtons contactColorClass="text-pink-600" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-8 text-white">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-pink-300" />
                  <span className="text-sm sm:text-base">
                    Trimester-Specific
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-pink-300" />
                  <span className="text-sm sm:text-base">
                    Postpartum Support
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-pink-300" />
                  <span className="text-sm sm:text-base">Daily Guidance</span>
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
                      <Check className="w-5 h-5 text-pink-300 flex-shrink-0" />
                      <span className="text-pink-50 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-4 bg-pink-500 text-white font-bold rounded-2xl hover:bg-pink-600 transition-all duration-300 text-sm md:text-base"
                >
                  Start Your Pregnancy Nutrition Journey
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Understanding Pregnancy Nutrition Section */}
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
                Understanding Healthy Pregnancy Nutrition
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Pregnancy is one of the most beautiful and transformative
                  journeys in a woman&apos;s life. During this special time,
                  proper nutrition becomes more important than ever as
                  you&apos;re not just eating for yourself, but also nourishing
                  your growing baby.
                </p>

                <p>
                  At Dietfiniti, our Pregnancy Diet Plan is designed to provide
                  you with trimester-specific, nutrient-dense meal plans that
                  support both your health and your baby&apos;s development
                  throughout pregnancy and into the postpartum period.
                </p>

                <p>
                  We understand that pregnancy comes with its own set of
                  challenges – morning sickness, food aversions, cravings,
                  fatigue, and concerns about weight gain. Our pregnancy
                  nutrition program addresses all these concerns while ensuring
                  you receive optimal nutrition at every stage.
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
                  className="bg-pink-50 rounded-2xl p-4 md:p-6 text-center border border-pink-100 w-full"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-4">
              Pregnancy Step Methodology
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start w-full"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src={pregnancydietimg1}
                  alt="Pregnancy Nutrition"
                  className="rounded-2xl shadow-lg w-full h-auto"
                  placeholder="blur"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left w-full"
            >
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0">
                Our comprehensive, scientifically-backed approach ensures
                optimal nutrition and wellness throughout every stage of your
                pregnancy journey. We provide personalized guidance tailored to
                each trimester&apos;s unique nutritional requirements,
                supporting both maternal health and fetal development with
                evidence-based strategies and continuous monitoring.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
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
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
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
      <PregnancyDietSections />
    </GlobalLayoutFix>
  );
}
