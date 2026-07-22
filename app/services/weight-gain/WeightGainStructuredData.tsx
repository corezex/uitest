// components/WeightGainStructuredData.tsx
export const WeightGainStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dietfiniti.com/services/weight-gain#service",
        name: "Weight Gain Program - Healthy Weight Gain for Fast Metabolism | Dietfiniti",
        description:
          "Professional weight gain program with personalized high-calorie nutrition plans. Gain 0.5kg per week safely with nutrient-dense foods, muscle building focus, and daily support for underweight individuals.",
        serviceType: "Weight Gain Program",
        category: "Health & Wellness Service",
        provider: {
          "@type": "Organization",
          name: "Dietfiniti",
          url: "https://dietfiniti.com"
        },
        areaServed: {
          "@type": "Country",
          name: "India"
        },
        url: "https://dietfiniti.com/services/weight-gain",
        offers: {
          "@type": "Offer",
          name: "Weight Gain Program",
          description: "Personalized nutrition plan for healthy weight gain",
          price: "1499",
          priceCurrency: "INR",
          priceValidUntil: "2024-12-31",
          availability: "https://schema.org/InStock",
          url: "https://dietfiniti.com/services/weight-gain",
        },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 18,
          suggestedMaxAge: 50,
          suggestedGender: [
            "https://schema.org/Male",
            "https://schema.org/Female",
          ],
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Health Conditions Addressed",
            value: ["Underweight", "Fast Metabolism", "Hypermetabolism"]
          },
          {
            "@type": "PropertyValue",
            name: "Target Weekly Gain",
            value: "0.5 kg per week"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://dietfiniti.com/services/weight-gain",
        name: "Weight Gain Program - Healthy Weight Gain for Fast Metabolism | Dietfiniti",
        description:
          "Gain healthy weight through personalized nutrition for fast metabolism. Build muscle mass with nutrient-dense foods, 5-7 meals per day, and sustainable eating habits. 0.5kg per week weight gain with certified nutritionists.",
        url: "https://dietfiniti.com/services/weight-gain",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://dietfiniti.com/images/weight-gain-program-og.jpg",
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
              name: "Weight Gain Program",
              item: "https://dietfiniti.com/services/weight-gain",
            },
          ],
        },
        mainEntity: {
          "@id": "https://dietfiniti.com/services/weight-gain#service"
        },
        about: {
          "@type": "Diet",
          name: "Weight Gain Nutrition Program",
          description:
            "Science-backed weight gain program focusing on healthy muscle building and sustainable eating habits for underweight individuals",
          dietFeatures: [
            "Healthy Weight Gain 0.5kg/week",
            "Muscle Building Focus",
            "Nutrient-Dense Foods",
            "Frequent Meal Scheduling (5-7 meals/day)",
            "Personalized High-Calorie Plans",
            "Daily WhatsApp Support",
          ],
          expertConsiderations:
            "Personalized high-calorie meal plans with 500-750 calories above maintenance needs for healthy weight gain of 0.5 kg per week through muscle mass development",
          risks:
            "Minimal risk - program focuses on balanced nutrition, gradual calorie increases, and healthy weight gain under professional guidance",
          physiologicalBenefits: [
            "Healthy weight gain primarily through muscle mass",
            "Improved strength and physical performance",
            "Enhanced energy levels and vitality",
            "Better immune function and overall health",
            "Improved body composition and confidence",
            "Sustainable eating habits for long-term maintenance",
          ],
          audience: {
            "@type": "PeopleAudience",
            suggestedMinAge: 18,
            suggestedMaxAge: 50,
            suggestedGender: [
              "https://schema.org/Male",
              "https://schema.org/Female",
            ],
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Program Duration",
              value: "Typically 3-6 months"
            },
            {
              "@type": "PropertyValue",
              name: "Support Type",
              value: "Daily WhatsApp support"
            }
          ]
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://dietfiniti.com/services/weight-gain#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much weight can I expect to gain per week with Dietfiniti's program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dietfiniti's weight gain program is designed for healthy, sustainable weight gain of 0.5 kg per week. This ensures you gain primarily muscle mass and healthy weight, not just fat, while maintaining good health and energy levels.",
            },
          },
          {
            "@type": "Question",
            name: "What types of foods are included in the weight gain meal plans?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We focus on nutrient-dense, calorie-rich foods like nuts, nut butters, seeds, dried fruits, whole milk, cheese, eggs, avocados, olive oil, whole grains, and healthy proteins. These provide maximum calories while delivering essential nutrients for healthy weight gain.",
            },
          },
          {
            "@type": "Question",
            name: "How many meals per day are recommended for weight gain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We design schedules with 5-7 smaller, frequent meals and snacks throughout the day instead of three large meals. This makes it easier to consume required calories without feeling uncomfortably full and helps maintain consistent calorie intake.",
            },
          },
          {
            "@type": "Question",
            name: "Is exercise included in the weight gain program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide guidance on light resistance training and strength-building exercises to ensure weight gain includes muscle mass development. Exercise helps convert extra calories into muscle rather than fat and improves overall strength.",
            },
          },
          {
            "@type": "Question",
            name: "What support will I receive during the program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You receive comprehensive support including: Daily WhatsApp support (6 days/week), bi-weekly progress tracking with plan adjustments, personalized high-calorie meal plans, recipe collection for weight gain, appetite improvement strategies, and continuous guidance from certified nutritionists.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to see results in the weight gain program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most clients see initial appetite improvements within 2-3 weeks and consistent weight gain of 0.5-1 kg per month starting from the second month. Significant transformation typically occurs within 3-4 months with consistent follow-up and adherence to the program.",
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