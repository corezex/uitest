// components/SportsNutritionStructuredData.tsx
export const SportsNutritionStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dietfiniti.com/services/sports-nutrition#service",
        name: "Sports Nutrition Plan - Athletic Performance & Recovery | Dietfiniti",
        description:
          "Professional sports nutrition plan for athletes. Sport-specific fueling strategies, performance optimization, recovery protocols, and evidence-based supplement guidance for peak athletic performance.",
        serviceType: "Sports Nutrition Program",
        category: "Athletic Performance Service",
        provider: {
          "@type": "Organization",
          name: "Dietfiniti",
          url: "https://dietfiniti.com"
        },
        areaServed: {
          "@type": "Country",
          name: "India"
        },
        url: "https://dietfiniti.com/services/sports-nutrition",
        offers: {
          "@type": "Offer",
          name: "Sports Nutrition Program",
          description: "Personalized sports nutrition plan for athletic performance",
          price: "2499",
          priceCurrency: "INR",
          priceValidUntil: "2024-12-31",
          availability: "https://schema.org/InStock",
          url: "https://dietfiniti.com/services/sports-nutrition",
        },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 16,
          suggestedMaxAge: 50,
          suggestedGender: [
            "https://schema.org/Male",
            "https://schema.org/Female",
          ],
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Athletic Type",
            value: ["Endurance Athlete", "Strength Athlete", "Team Sport Athlete", "Combat Sport Athlete"]
          },
          {
            "@type": "PropertyValue",
            name: "Program Focus",
            value: "Performance optimization and recovery"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://dietfiniti.com/services/sports-nutrition",
        name: "Sports Nutrition Plan - Athletic Performance & Recovery | Dietfiniti",
        description:
          "Fuel your athletic performance and optimize recovery. Sport-specific nutrition plans for endurance, strength, team sports, and combat sports with evidence-based strategies.",
        url: "https://dietfiniti.com/services/sports-nutrition",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://dietfiniti.com/images/sports-nutrition-program-og.jpg",
          width: "1200",
          height: "630",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://dietfiniti.com/#website",
        },
        datePublished: "2024-01-01",
        dateModified: "2024-01-01",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://dietfiniti.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://dietfiniti.com/services",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Sports Nutrition Plan",
              item: "https://dietfiniti.com/services/sports-nutrition",
            },
          ],
        },
        mainEntity: {
          "@id": "https://dietfiniti.com/services/sports-nutrition#service"
        },
        about: {
          "@type": "Diet",
          name: "Sports Nutrition Program",
          description:
            "Science-backed sports nutrition program focusing on athletic performance optimization, recovery enhancement, and sport-specific fueling strategies",
          dietFeatures: [
            "Sport-Specific Meal Plans",
            "Performance Nutrition Optimization",
            "Recovery Enhancement Protocols",
            "Evidence-Based Supplement Guidance",
            "Hydration & Electrolyte Strategies",
            "Competition Day Fueling Plans",
          ],
          expertConsiderations:
            "Personalized nutrition plans based on sport type, training intensity, body composition goals, and competition schedule with precise nutrient timing strategies",
          risks:
            "Minimal risk - program focuses on balanced nutrition, proper hydration, and evidence-based strategies under professional guidance",
          physiologicalBenefits: [
            "Enhanced athletic performance and endurance",
            "Faster recovery and reduced muscle soreness",
            "Improved body composition and lean muscle mass",
            "Better hydration and electrolyte balance",
            "Reduced injury risk and improved immune function",
            "Optimal energy levels during training and competition",
          ],
          audience: {
            "@type": "PeopleAudience",
            suggestedMinAge: 16,
            suggestedMaxAge: 50,
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Suitable for Sports Types",
              value: ["Endurance", "Strength/Power", "Team Sports", "Combat Sports"]
            }
          ]
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://dietfiniti.com/services/sports-nutrition#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do sports nutrition plans differ for various types of athletes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sports nutrition plans are customized based on sport-specific demands: Endurance athletes need high carbohydrates for sustained energy, strength athletes require more protein for muscle building, team sport athletes need balanced fueling for stop-start activities, and combat sports focus on weight management while maintaining power.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide guidance on supplements for athletic performance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide evidence-based supplement guidance focusing on scientifically proven options like creatine for strength, beta-alanine for high-intensity exercise, electrolytes for hydration, and protein powder for convenience - always prioritizing food-first nutrition and individual needs.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle nutrition for competition days and tournaments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide specific competition day strategies including pre-event meals, during-competition fueling, hydration protocols, and post-event recovery nutrition. For tournaments, we create multi-day plans that account for recovery between events and maintenance of peak performance throughout.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of support do athletes receive during the program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Athletes receive comprehensive support including: Daily WhatsApp support (6 days/week), weekly performance tracking with adjustments, sport-specific meal plans, competition day strategies, evidence-based supplement guidance, hydration protocols, and coach collaboration when needed.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to see performance improvements with sports nutrition?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most athletes notice improved energy levels and recovery within 2-3 weeks. Significant performance improvements in endurance, strength, and body composition typically become evident within 4-6 weeks with consistent adherence to the personalized nutrition plan.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};