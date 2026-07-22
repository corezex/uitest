// components/ProgramsStructuredData.tsx
export const ProgramsStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://dietfiniti.com/programs#webpage",
        name: "Nutrition Programs - DietFiniti",
        description:
          "Six specialized nutrition programs including Weight Loss, Medical Weight Loss, Weight Gain, Pregnancy Diet, Bridal Diet, and Sports Nutrition plans with personalized support and 24/7 WhatsApp guidance",
        url: "https://dietfiniti.com/programs",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://dietfiniti.com/images/programs-og.jpg",
          width: "1200",
          height: "630",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://dietfiniti.com/#website",
        },
        mainEntity: {
          "@type": "ItemList",
          name: "DietFiniti Nutrition Programs",
          description:
            "List of specialized nutrition programs offered by DietFiniti",
          numberOfItems: 6,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                "@id": "https://dietfiniti.com/services/weight-loss#service",
                name: "Weight Loss Program",
                description:
                  "Healthy sustainable weight loss program without medical conditions. Customized diet plans, weekly follow-ups, daily WhatsApp support for gradual weight loss maintaining energy levels.",
                serviceType: "Weight Loss Nutrition",
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                provider: {
                  "@type": "Organization",
                  name: "DietFiniti",
                  url: "https://dietfiniti.com"
                },
                url: "https://dietfiniti.com/services/weight-loss",
                offers: {
                  "@type": "Offer",
                  description:
                    "Personalized weight loss program with continuous support",
                  availability: "https://schema.org/InStock",
                },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                "@id": "https://dietfiniti.com/services/medical-weight-loss#service",
                name: "Medical Weight Loss Program",
                description:
                  "Clinical weight loss program for thyroid, PCOS, diabetes, hypertension, cholesterol, fatty liver, renal and cardiovascular conditions with doctor coordination.",
                serviceType: "Medical Weight Management",
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                provider: {
                  "@type": "Organization",
                  name: "DietFiniti",
                  url: "https://dietfiniti.com"
                },
                url: "https://dietfiniti.com/services/medical-weight-loss",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                "@id": "https://dietfiniti.com/services/weight-gain#service",
                name: "Weight Gain Program",
                description:
                  "Healthy weight gain program for underweight individuals with fast metabolism. Nutrient-dense calorie-rich foods, muscle building strategies without supplements.",
                serviceType: "Weight Gain Nutrition",
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                provider: {
                  "@type": "Organization",
                  name: "DietFiniti",
                  url: "https://dietfiniti.com"
                },
                url: "https://dietfiniti.com/services/weight-gain",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                "@id": "https://dietfiniti.com/services/pregnancy-diet#service",
                name: "Pregnancy Diet Plan",
                description:
                  "Trimester-specific pregnancy nutrition plan for healthy weight management, baby development, and postpartum recovery with regular guidance.",
                serviceType: "Pregnancy Nutrition",
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                provider: {
                  "@type": "Organization",
                  name: "DietFiniti",
                  url: "https://dietfiniti.com"
                },
                url: "https://dietfiniti.com/services/pregnancy-diet",
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "Service",
                "@id": "https://dietfiniti.com/services/bridal-diet#service",
                name: "Bridal Diet Plan",
                description:
                  "Pre-wedding nutrition plan for weight management, glowing skin, energy boost and confidence for brides with busy wedding preparation schedules.",
                serviceType: "Bridal Nutrition",
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                provider: {
                  "@type": "Organization",
                  name: "DietFiniti",
                  url: "https://dietfiniti.com"
                },
                url: "https://dietfiniti.com/services/bridal-diet",
              },
            },
            {
              "@type": "ListItem",
              position: 6,
              item: {
                "@type": "Service",
                "@id": "https://dietfiniti.com/services/sports-nutrition#service",
                name: "Sports Nutrition Plan",
                description:
                  "Athlete performance nutrition plan for peak performance, recovery, muscle building with sport-specific diet and hydration strategies.",
                serviceType: "Sports Nutrition",
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                provider: {
                  "@type": "Organization",
                  name: "DietFiniti",
                  url: "https://dietfiniti.com"
                },
                url: "https://dietfiniti.com/services/sports-nutrition",
              },
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://dietfiniti.com/programs#service-collection",
        name: "Nutrition Programs Collection - DietFiniti",
        description:
          "Collection of six specialized nutrition programs with personalized support and 24/7 WhatsApp guidance",
        provider: {
          "@type": "Organization",
          name: "DietFiniti",
          url: "https://dietfiniti.com"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "DietFiniti Nutrition Programs",
          description: "Catalog of nutrition programs offered by DietFiniti",
          numberOfItems: 6,
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Weight Loss Program",
                url: "https://dietfiniti.com/services/weight-loss"
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Medical Weight Loss Program",
                url: "https://dietfiniti.com/services/medical-weight-loss"
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Weight Gain Program",
                url: "https://dietfiniti.com/services/weight-gain"
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pregnancy Diet Plan",
                url: "https://dietfiniti.com/services/pregnancy-diet"
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bridal Diet Plan",
                url: "https://dietfiniti.com/services/bridal-diet"
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sports Nutrition Plan",
                url: "https://dietfiniti.com/services/sports-nutrition"
              },
            },
          ],
        },
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