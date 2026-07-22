// components/HeroStructuredData.tsx
export const HeroStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DietFiniti - Comprehensive Nutrition Programs",
    description:
      "Personalized nutrition programs including Weight Loss, Medical Weight Loss, Weight Gain, Pregnancy Diet, Bridal Diet, and Sports Nutrition plans with 24/7 WhatsApp support.",

    serviceType: [
      "Weight Loss Program",
      "Medical Weight Loss",
      "Weight Gain Program",
      "Pregnancy Diet Plan",
      "Bridal Diet Plan",
      "Sports Nutrition Plan",
    ],
    areaServed: "India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nutrition Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weight Loss Program",
            description: "Personalized weight loss nutrition plans",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medical Weight Loss",
            description: "Nutrition plans for medical conditions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weight Gain Program",
            description: "Healthy weight gain nutrition plans",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pregnancy Diet Plan",
            description: "Nutrition plans for pregnancy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Diet Plan",
            description: "Nutrition plans for bridal preparation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sports Nutrition Plan",
            description: "Nutrition plans for athletic performance",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
