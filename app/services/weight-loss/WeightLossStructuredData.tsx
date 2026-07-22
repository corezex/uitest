// components/WeightLossStructuredData.tsx
export const WeightLossStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dietfiniti.com/services/weight-loss#service",
        name: "Weight Loss Program - Sustainable Healthy Weight Loss | Dietfiniti",
        description:
          "Professional weight loss program with personalized nutrition plans, daily WhatsApp support. Lose 0.5-1kg per week safely with certified nutritionists. Get customized diet plans, weekly tracking, and lifetime habit building.",
        serviceType: "Weight Loss Program",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Weight Loss Program Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Weight Loss Program",
                description: "Personalized weight loss program with nutritionist support"
              },
              price: "1499",
              priceCurrency: "INR",
              priceValidUntil: "2024-12-31",
              availability: "https://schema.org/InStock",
              url: "https://dietfiniti.com/services/weight-loss",
            }
          ]
        },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 18,
          suggestedMaxAge: 70,
          suggestedGender: [
            "https://schema.org/Male",
            "https://schema.org/Female",
          ],
          healthCondition: ["Overweight", "Obesity"],
        },
      },
      {
        "@type": ["WebPage", "ItemPage"],
        "@id": "https://dietfiniti.com/services/weight-loss",
        name: "Weight Loss Program - Sustainable 0.5-1kg/week Loss | Dietfiniti",
        description:
          "Achieve sustainable weight loss through personalized nutrition plans. Lose 0.5-1kg per week with certified nutritionists. Daily WhatsApp support, customized diet plans, and lifetime habit building.",
        url: "https://dietfiniti.com/services/weight-loss",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://dietfiniti.com/images/weight-loss-program-og.jpg",
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
              name: "Weight Loss Program",
              item: "https://dietfiniti.com/services/weight-loss",
            },
          ],
        },
        mainEntity: {
          "@type": "Diet",
          name: "Weight Loss Nutrition Program",
          description:
            "Science-backed weight loss program focusing on sustainable habits and healthy eating for long-term results",
          dietFeatures: [
            "Sustainable Weight Loss 0.5-1kg/week",
            "Health-First Approach",
            "Energy Preservation",
            "Lifetime Habits Building",
            "Personalized Meal Plans",
            "Daily WhatsApp Support",
          ],
          expertConsiderations:
            "Personalized calorie-controlled meal plans with moderate deficit (500-750 calories) for healthy weight loss of 0.5-1 kg per week",
          risks:
            "Minimal risk - program focuses on balanced nutrition, healthy lifestyle changes, and gradual weight loss under professional guidance",
          physiologicalBenefits: [
            "Healthy weight reduction",
            "Improved energy levels and vitality",
            "Better metabolic health and insulin sensitivity",
            "Enhanced cardiovascular health",
            "Improved digestion and gut health",
            "Better sleep quality and mental clarity",
          ],
        },
        mainContentOfPage: {
          "@type": "WebPageElement",
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dietfiniti.com/services/weight-loss#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much weight can I expect to lose per week with Dietfiniti's weight loss program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dietfiniti's program is designed for healthy, sustainable weight loss of 0.5-1 kg per week. This ensures you lose fat while preserving muscle mass, maintaining energy levels, and developing lasting healthy habits.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to buy special foods or supplements for Dietfiniti weight loss program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No special foods or supplements required! Dietfiniti designs plans using regular, everyday foods that are easily available in local markets and affordable. Your plan includes common foods like dal, roti, rice, vegetables, fruits, milk, eggs, and chicken - no expensive superfoods needed.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of support will I receive during Dietfiniti's weight loss program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You receive comprehensive support including: Daily WhatsApp support (6 days/week), weekly progress tracking with plan adjustments, personalized meal plans, recipe collection, meal prep guidance, emotional eating strategies, portion control education, and continuous guidance from certified nutritionists.",
            },
          },
          {
            "@type": "Question",
            name: "Is Dietfiniti's weight loss program suitable for people with medical conditions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While Dietfiniti's program is designed for general weight loss, we strongly recommend consulting with your doctor if you have specific medical conditions like diabetes, thyroid issues, PCOS, or heart conditions. Our nutritionists can customize plans considering health constraints after medical consultation.",
            },
          },
          {
            "@type": "Question",
            name: "How is Dietfiniti's weight loss program different from other diets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unlike crash diets or generic plans, Dietfiniti offers: 100% personalized plans based on your metabolism and lifestyle, no fancy foods required, lifestyle-based planning that fits your schedule, regular follow-ups with adjustments, daily WhatsApp support, and focus on building sustainable lifetime habits rather than temporary fixes.",
            },
          },
          {
            "@type": "Question",
            name: "What happens after I achieve my target weight with Dietfiniti?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dietfiniti provides comprehensive maintenance phase guidance including: Gradual calorie increase to maintenance level, weight maintenance strategies, continued habit reinforcement, and long-term support to ensure you maintain your results and don't regain weight.",
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