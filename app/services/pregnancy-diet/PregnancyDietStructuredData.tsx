// components/PregnancyDietStructuredData.tsx
export const PregnancyDietStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "MedicalWebPage"],
        "@id": "https://dietfiniti.com/services/pregnancy-diet",
        name: "Pregnancy Diet Plan - Trimester-Specific Nutrition | Dietfiniti",
        headline: "Professional Pregnancy Diet Plan with Trimester-Specific Nutrition",
        description: "Science-backed pregnancy diet plan with trimester-specific nutrition, postpartum support, and breastfeeding guidance. Healthy meal plans for mother and baby development.",
        url: "https://dietfiniti.com/services/pregnancy-diet",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://dietfiniti.com/image/pregnancy-diet-img1.png",
          width: "1200",
          height: "630",
        },
        image: "https://dietfiniti.com/image/pregnancy-diet-img1.png",
        datePublished: "2024-01-01",
        dateModified: "2024-01-01",
        author: {
          "@type": "Organization",
          name: "Dietfiniti",
          url: "https://dietfiniti.com"
        },
        publisher: {
          "@type": "Organization",
          name: "Dietfiniti",
          url: "https://dietfiniti.com",
          logo: {
            "@type": "ImageObject",
            url: "https://dietfiniti.com/logo.png",
            width: "200",
            height: "60",
          },
        },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 20,
          suggestedMaxAge: 45,
          suggestedGender: "https://schema.org/Female",
          healthCondition: "Pregnancy",
        },
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Pregnant women",
        },
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
              name: "Pregnancy Diet Plan",
              item: "https://dietfiniti.com/services/pregnancy-diet",
            },
          ],
        },
        mainEntity: {
          "@id": "https://dietfiniti.com/services/pregnancy-diet#service"
        },
        about: {
          "@type": "Diet",
          name: "Pregnancy Nutrition Program",
          description: "Trimester-specific pregnancy diet plan for healthy maternal and fetal development",
          dietFeatures: [
            "Trimester-specific meal planning",
            "Morning sickness management",
            "Essential nutrient optimization",
            "Postpartum recovery support",
            "Breastfeeding nutrition guidance",
            "Healthy weight management"
          ],
          physiologicalBenefits: [
            "Optimal fetal growth and development",
            "Healthy maternal weight management",
            "Reduced pregnancy complications risk",
            "Better energy levels and reduced fatigue",
            "Improved maternal nutritional status",
            "Enhanced postpartum recovery"
          ],
          audience: {
            "@type": "PeopleAudience",
            suggestedGender: "https://schema.org/Female",
            healthCondition: "Pregnancy"
          }
        }
      },
      {
        "@type": "Service",
        "@id": "https://dietfiniti.com/services/pregnancy-diet#service",
        name: "Pregnancy Diet Plan - Trimester-Specific Nutrition | Dietfiniti",
        description: "Professional pregnancy diet plan with trimester-specific nutrition, postpartum support, and breastfeeding guidance. Science-backed meal plans for healthy pregnancy and baby development.",
        serviceType: "Pregnancy Nutrition Program",
        category: "Healthcare Service",
        provider: {
          "@type": "Organization",
          name: "Dietfiniti",
          url: "https://dietfiniti.com"
        },
        areaServed: {
          "@type": "Country",
          name: "India"
        },
        url: "https://dietfiniti.com/services/pregnancy-diet",
        offers: [
          {
            "@type": "Offer",
            name: "First Trimester Nutrition Plan",
            description: "Specialized nutrition plan for first trimester with folic acid focus",
            availability: "https://schema.org/InStock",
            url: "https://dietfiniti.com/services/pregnancy-diet#first-trimester"
          },
          {
            "@type": "Offer",
            name: "Second Trimester Nutrition Plan",
            description: "Growth-focused nutrition plan for second trimester",
            availability: "https://schema.org/InStock",
            url: "https://dietfiniti.com/services/pregnancy-diet#second-trimester"
          },
          {
            "@type": "Offer",
            name: "Third Trimester Nutrition Plan",
            description: "Preparation-focused nutrition plan for third trimester",
            availability: "https://schema.org/InStock",
            url: "https://dietfiniti.com/services/pregnancy-diet#third-trimester"
          },
          {
            "@type": "Offer",
            name: "Complete Pregnancy Nutrition Package",
            description: "Full pregnancy and postpartum nutrition program",
            price: "1999",
            priceCurrency: "INR",
            priceValidUntil: "2024-12-31",
            availability: "https://schema.org/InStock",
            url: "https://dietfiniti.com/services/pregnancy-diet"
          }
        ],
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 20,
          suggestedMaxAge: 45,
          suggestedGender: "https://schema.org/Female",
          healthCondition: "Pregnancy",
        },
        serviceOutput: {
          "@type": "Diet",
          name: "Pregnancy Nutrition Plan",
          description: "Comprehensive trimester-specific pregnancy diet"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dietfiniti.com/services/pregnancy-diet#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does the pregnancy diet plan change across trimesters?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our pregnancy diet plans evolve with each trimester: First trimester focuses on folic acid and managing morning sickness, second trimester increases calories and protein for growth, third trimester emphasizes nutrient density and preparation for delivery with smaller frequent meals.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide support for postpartum recovery and breastfeeding?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide comprehensive postpartum nutrition guidance for recovery, including lactation-supportive meal plans for breastfeeding mothers with additional 450-500 calories daily and foods that promote milk production.",
            },
          },
          {
            "@type": "Question",
            name: "How do you manage pregnancy symptoms like morning sickness and cravings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide targeted strategies for pregnancy symptoms: small frequent meals and ginger for morning sickness, healthy alternatives for cravings, high-fiber foods for constipation, and dietary adjustments for heartburn management.",
            },
          },
          {
            "@type": "Question",
            name: "What makes your pregnancy diet plan different from others?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our pregnancy diet plan offers trimester-specific customization, continuous adaptation based on your symptoms, postpartum and breastfeeding support, daily WhatsApp guidance, and science-backed nutrition strategies for optimal maternal and fetal health.",
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