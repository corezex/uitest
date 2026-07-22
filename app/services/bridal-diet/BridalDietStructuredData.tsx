export const BridalDietStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dietfiniti.com/services/bridal-diet#service",
    name: "Bridal Diet Plan - Wedding Preparation Nutrition | Dietfiniti",
    description:
      "Professional bridal diet plan for wedding preparation. Achieve radiant skin, perfect weight, and complete bridal glow with timeline-specific nutrition plans and daily support.",
    serviceType: "Bridal Diet Program",
    category: "Diet & Nutrition Service",
    provider: {
      "@type": "Organization",
      name: "Dietfiniti",
      url: "https://dietfiniti.com"
    },
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    url: "https://dietfiniti.com/services/bridal-diet",
    offers: [
      {
        "@type": "Offer",
        name: "Monthly Bridal Diet Plan",
        description: "Complete bridal nutrition program with daily support for 1 month",
        price: "2499",
        priceCurrency: "INR",
        priceValidUntil: "2024-12-31",
        availability: "https://schema.org/InStock",
        eligibleDuration: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
        url: "https://dietfiniti.com/services/bridal-diet#purchase",
      }
    ],
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 20,
      suggestedMaxAge: 35,
      suggestedGender: "https://schema.org/Female",
    },
    serviceOutput: {
      "@type": "Diet",
      name: "Bridal Nutrition Plan",
      description: "Timeline-specific bridal diet for wedding preparation",
      dietFeatures: [
        "Weight management",
        "Skin glow enhancement",
        "Hair health improvement",
        "Energy level optimization",
        "Stress management through nutrition",
        "Bridal glow optimization",
      ],
      physiologicalBenefits: [
        "Improved skin health and radiance",
        "Healthy weight management",
        "Increased energy levels",
        "Better hair health",
        "Stress reduction through balanced nutrition",
        "Overall wellness enhancement",
      ],
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Program Duration",
        value: "1-6 months (depending on wedding timeline)"
      },
      {
        "@type": "PropertyValue",
        name: "Support Type",
        value: "Daily WhatsApp support"
      },
      {
        "@type": "PropertyValue",
        name: "Consultation Frequency",
        value: "Weekly follow-ups"
      },
      {
        "@type": "PropertyValue",
        name: "Customization Level",
        value: "100% personalized based on skin type, hair type, and wedding date"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};