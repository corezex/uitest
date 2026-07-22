// components/HowItWorksStructuredData.tsx
export const HowItWorksStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How NutriPlan Works - 5 Step Process to Better Health",
    description:
      "Learn about our 5-step process for personalized nutrition plans: Free Consultation, Personalized Plan Creation, Plan Discussion, Implementation & Support, Regular Follow-ups",
    totalTime: "P30D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Free Initial Consultation",
      },
      {
        "@type": "HowToSupply",
        name: "Personalized Diet Plan",
      },
      {
        "@type": "HowToSupply",
        name: "WhatsApp Support",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Expert Nutritionist Guidance",
      },
      {
        "@type": "HowToTool",
        name: "Custom Meal Plans",
      },
      {
        "@type": "HowToTool",
        name: "Progress Tracking",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Free Consultation",
        text: "Schedule your free consultation where we understand your health goals, medical history, lifestyle, food preferences, and current eating habits.",
        url: "https://dietfiniti.com#how-it-works",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Personalized Plan Creation",
        text: "Our expert nutritionists create a customized diet plan tailored specifically to your requirements with detailed meal timings and recipes.",
        url: "https://dietfiniti.com#how-it-works",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Plan Discussion & Adjustments",
        text: "We discuss your personalized plan in detail and make necessary adjustments to ensure it's practical and sustainable for you.",
        url: "https://dietfiniti.com#how-it-works",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Implementation & Support",
        text: "Start following your personalized diet plan with continuous support via WhatsApp for guidance and motivation.",
        url: "https://dietfiniti.com#how-it-works",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Regular Follow-ups & Optimization",
        text: "Regular follow-up sessions to track progress and optimize your plan based on results for continued success.",
        url: "https://dietfiniti.com#how-it-works",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      name: "How It Works - NutriPlan",
      description:
        "5-step process for personalized nutrition programs with expert guidance and continuous support",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
