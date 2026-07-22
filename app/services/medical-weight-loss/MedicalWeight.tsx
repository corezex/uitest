"use client";
import { ServiceCtaButtons } from "@/app/components/ServiceCtaButtons";

import { motion } from "framer-motion";
import { MedicalWeightLossStructuredData } from "./MedicalWeightLossStructuredData";
import { MedicalWeightLossSections } from "./MedicalWeightLossSections";
import {
  Check,
  Star,
  Activity,
  Heart,
  Clock,
  Phone,
  MessageCircle,
  Target,
} from "lucide-react";
import Image from "next/image";
import MedicalWeightLoss1 from "@/public/image/MedicalWeightLoss1.jpg";
// Add this layout wrapper to prevent horizontal scrolling
const GlobalLayoutFix = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-x-hidden">
    <div className="w-full max-w-[100vw] overflow-hidden">{children}</div>
  </div>
);

export default function MedicalWeightLossProgram() {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      iconBg: "bg-rose-100",
      title: "Medical Condition Focus",
      description:
        "Specialized plans for thyroid, diabetes, PCOS, and other health conditions",
    },
    {
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-100",
      title: "Doctor Coordination",
      description:
        "Collaboration with healthcare providers for comprehensive care",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-100",
      title: "Safe Weight Loss",
      description:
        "Gradual, sustainable weight loss that considers your health status",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Health Monitoring",
      description: "Regular tracking of health parameters and progress",
    },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Comprehensive Medical Assessment",
      description:
        "Detailed review of medical history, current health status, medications, lab reports, and specific challenges related to your medical condition affecting weight management.",
    },
    {
      step: "02",
      title: "Condition-Specific Planning",
      description:
        "Create customized nutrition plans considering your medical condition's specific requirements, medication interactions, dietary restrictions, and metabolic considerations.",
    },
    {
      step: "03",
      title: "Healthcare Provider Coordination",
      description:
        "With your permission, coordinate with your doctor to ensure nutritional strategy aligns with medical treatment, medications, and overall healthcare plan.",
    },
    {
      step: "04",
      title: "Enhanced Monitoring & Support",
      description:
        "Close monitoring of both weight progress and health parameters relevant to your condition, with adjustments based on medical feedback and progress.",
    },
  ];

  const programIncludes = [
    "Medical condition-specific meal plans",
    "Healthcare provider coordination",
    "Enhanced health parameter monitoring",
    "Weekly progress tracking & adjustments",
    "Daily WhatsApp support (6 days/week)",
    "Medication-nutrition interaction guidance",
    "Lab report interpretation support",
    "Symptom management strategies",
    "Emergency nutrition guidelines",
    "Long-term maintenance planning",
  ];

  // Medical conditions data
  const medicalConditions = [
    {
      icon: "🦋",
      title: "Thyroid Disorders",
      description:
        "Specialized plans for hypothyroidism and hyperthyroidism with focus on metabolism optimization",
    },
    {
      icon: "🩺",
      title: "Diabetes (Type 1 & 2)",
      description:
        "Blood sugar management with balanced nutrition and carbohydrate counting",
    },
    {
      icon: "🌸",
      title: "PCOS/PCOD",
      description:
        "Hormone-balancing nutrition with insulin sensitivity improvement",
    },
    {
      icon: "❤️",
      title: "Hypertension",
      description:
        "Low-sodium, heart-healthy plans with blood pressure management",
    },
    {
      icon: "🧬",
      title: "High Cholesterol",
      description:
        "Cholesterol-lowering nutrition with healthy fat optimization",
    },
    {
      icon: "🔬",
      title: "Fatty Liver",
      description:
        "Liver-healthy nutrition with inflammation reduction strategies",
    },
  ];

  // Program features data
  const programFeatures = [
    {
      icon: "🎯",
      title: "Personalized Medical Nutrition",
      description:
        "Customized meal plans designed specifically for your medical condition, medications, and health goals with careful consideration of dietary restrictions and nutritional requirements.",
    },
    {
      icon: "🩺",
      title: "Doctor Collaboration",
      description:
        "Coordination with your healthcare providers to ensure your nutrition plan complements medical treatment and aligns with your overall healthcare strategy.",
    },
    {
      icon: "📊",
      title: "Enhanced Health Monitoring",
      description:
        "Regular tracking of condition-specific health parameters beyond weight - blood sugar levels, blood pressure, thyroid markers, or other relevant health indicators.",
    },
    {
      icon: "💊",
      title: "Medication-Nutrition Guidance",
      description:
        "Expert advice on timing meals with medications, foods to avoid with specific drugs, and nutritional strategies to enhance medication effectiveness.",
    },
    {
      icon: "🔬",
      title: "Lab Report Analysis",
      description:
        "Help interpreting lab results and adjusting nutrition plans based on changes in your health markers and medical condition progression.",
    },
    {
      icon: "🚨",
      title: "Emergency Nutrition Support",
      description:
        "Guidance for sick days, flare-ups, or special situations related to your medical condition with appropriate nutritional adjustments.",
    },
  ];

  // Expected outcomes data
  const expectedOutcomes = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Sustainable Weight Loss",
      description:
        "0.5-1 kg per week weight loss considering your medical condition",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Improved Health Markers",
      description:
        "Better management of blood sugar, blood pressure, or other condition parameters",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Enhanced Energy Levels",
      description:
        "Improved vitality and reduced fatigue through proper nutrition",
    },
    {
      icon: <Check className="w-5 h-5" />,
      title: "Better Medication Response",
      description: "Optimized nutrition to support medication effectiveness",
    },
  ];

  // Success stories data
  const successStories = [
    {
      name: "Priya Sharma",
      age: "34",
      condition: "PCOS & Thyroid",
      loss: "15 kg",
      duration: "6 months",
      testimonial:
        "After years of struggling with PCOS and thyroid-related weight gain, Dietfiniti's medical program finally helped me understand how to eat for my conditions. I lost 15 kg and my hormone levels improved significantly.",
    },
    {
      name: "Rajesh Kumar",
      age: "52",
      condition: "Type 2 Diabetes",
      loss: "12 kg",
      duration: "4 months",
      testimonial:
        "Managing diabetes while trying to lose weight was challenging until I found Dietfiniti. Their medical nutrition approach helped me lose 12 kg and my HbA1c dropped from 8.2% to 6.1%.",
    },
  ];

  return (
    <>
      <GlobalLayoutFix>
        <MedicalWeightLossStructuredData />

        {/* Hero Section - Fixed mobile overflow */}
        <section className="relative py-10 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden w-full">
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
                  For Medical Conditions
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Medical Weight Loss Program
                </h1>

                <p className="text-lg sm:text-xl text-blue-50 mb-8 leading-relaxed">
                  Specialized weight management for medical conditions. Lose
                  weight safely with doctor-coordinated nutrition plans tailored
                  to your health needs.
                </p>

                <ServiceCtaButtons
                  contactColorClass="text-blue-600"
                  whatsappLabel="WhatsApp Us"
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-8 text-white">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-blue-300" />
                    <span className="text-sm sm:text-base">
                      Medical Condition Focus
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-blue-300" />
                    <span className="text-sm sm:text-base">
                      Doctor Coordinated
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-blue-300" />
                    <span className="text-sm sm:text-base">
                      Safe & Monitored
                    </span>
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
                  <h3 className="text-xl font-bold mb-4">Program Includes:</h3>
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
                    Start Your Medical Weight Loss Journey
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Medical Weight Loss Section */}
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
                  Understanding Medical Weight Loss
                </h2>

                <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Managing weight loss when you have a medical condition
                    requires specialized knowledge, careful planning, and close
                    monitoring. At Dietfiniti, our Medical Weight Loss Program
                    is specifically designed for individuals who need to lose
                    weight while managing conditions like thyroid disorders,
                    PCOS/PCOD, diabetes, hypertension, high cholesterol, fatty
                    liver, or renal issues.
                  </p>

                  <p>
                    We understand that these conditions affect not just your
                    overall health, but also your metabolism, nutritional
                    requirements, and ability to lose weight. Our medical weight
                    loss approach is comprehensive and clinically-informed.
                  </p>

                  <p>
                    We don&apos;t just create a diet plan – we develop a
                    nutritional therapy strategy that addresses both your weight
                    loss goals and your medical condition management. Each plan
                    is designed considering how your condition affects your
                    metabolism, what foods might help or hinder your condition,
                    and how nutrition can support your medical treatment.
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#262262] mb-4">
                Our Medical Approach
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic, medically-supervised approach to weight management
                that prioritizes your health and safety
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Left Side - Image and Text */}
              <div className="space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed p-6">
                    Our medical weight loss program is designed with a
                    patient-first philosophy, combining evidence-based
                    nutrition, personalized fitness planning, and continuous
                    medical supervision. Each plan is tailored to your unique
                    health profile, ensuring safe and sustainable fat reduction
                    without compromising your overall well-being.
                  </p>
                  <div className="relative w-full">
                    <Image
                      src={MedicalWeightLoss1}
                      alt="Program Features"
                      className="w-full rounded-2xl shadow-lg"
                      width={500}
                      height={400}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left w-full"
                ></motion.div>
              </div>

              {/* Right Side - Methodology Steps */}
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
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
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
        <MedicalWeightLossSections
          medicalConditions={medicalConditions}
          programFeatures={programFeatures}
          methodologySteps={methodologySteps}
          expectedOutcomes={expectedOutcomes}
          successStories={successStories}
        />
      </GlobalLayoutFix>
    </>
  );
}
