// components/MedicalWeightLossStructuredData.tsx
export const MedicalWeightLossStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dietfiniti.com/services/medical-weight-loss#service",
        name: "Medical Weight Loss Program - Specialized Weight Management | Dietfiniti",
        description:
          "Professional medical weight loss program for individuals with health conditions. Specialized plans for thyroid, diabetes, PCOS, hypertension with doctor coordination and clinical monitoring.",
        serviceType: "Medical Weight Loss Program",
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
        url: "https://dietfiniti.com/services/medical-weight-loss",
        offers: {
          "@type": "Offer",
          name: "Medical Weight Loss Program",
          description: "Specialized weight management program for medical conditions",
          price: "1999",
          priceCurrency: "INR",
          priceValidUntil: "2024-12-31",
          availability: "https://schema.org/InStock",
          url: "https://dietfiniti.com/services/medical-weight-loss",
        },
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 18,
          suggestedMaxAge: 70,
          suggestedGender: [
            "https://schema.org/Male",
            "https://schema.org/Female",
          ],
          healthCondition: [
            "Thyroid Disorders",
            "PCOS/PCOD",
            "Diabetes",
            "Hypertension",
            "High Cholesterol",
            "Fatty Liver",
            "Renal Issues",
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://dietfiniti.com/services/medical-weight-loss",
        name: "Medical Weight Loss Program - Specialized Weight Management | Dietfiniti",
        description:
          "Specialized weight loss program for medical conditions like thyroid, diabetes, PCOS, hypertension. Doctor-coordinated plans with clinical monitoring and condition-specific nutrition.",
        url: "https://dietfiniti.com/services/medical-weight-loss",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://dietfiniti.com/images/medical-weight-loss-program-og.jpg",
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
              name: "Medical Weight Loss Program",
              item: "https://dietfiniti.com/services/medical-weight-loss",
            },
          ],
        },
        mainEntity: {
          "@id": "https://dietfiniti.com/services/medical-weight-loss#service"
        },
        about: {
          "@type": "Diet",
          name: "Medical Weight Loss Nutrition Program",
          description:
            "Science-backed medical weight loss program focusing on safe weight management for individuals with health conditions through specialized nutrition strategies",
          dietFeatures: [
            "Medical Condition-Specific Meal Plans",
            "Healthcare Provider Coordination",
            "Enhanced Health Parameter Monitoring",
            "Medication-Nutrition Interaction Guidance",
            "Lab Report Analysis Support",
            "Emergency Nutrition Guidelines",
          ],
          expertConsiderations:
            "Personalized nutrition plans based on medical conditions, medications, lab results, and healthcare provider recommendations with enhanced safety monitoring",
          risks:
            "Minimal risk - program focuses on medically supervised nutrition, condition-specific adaptations, and close health monitoring under professional guidance",
          physiologicalBenefits: [
            "Safe and sustainable weight loss considering medical conditions",
            "Improved management of underlying health conditions",
            "Better medication response and reduced side effects",
            "Enhanced energy levels and overall well-being",
            "Improved lab markers and health parameters",
            "Reduced risk of condition-related complications",
          ],
          audience: {
            "@type": "PeopleAudience",
            healthCondition: [
              "Thyroid Disorders",
              "PCOS/PCOD",
              "Diabetes",
              "Hypertension",
              "High Cholesterol",
              "Fatty Liver",
              "Renal Issues",
            ],
          }
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://dietfiniti.com/services/medical-weight-loss#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What medical conditions does Dietfiniti's medical weight loss program cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dietfiniti's medical weight loss program specializes in thyroid disorders, PCOS/PCOD, diabetes (Type 1 & 2), hypertension, high cholesterol, fatty liver disease, and renal issues with condition-specific nutritional strategies and medical coordination.",
            },
          },
          {
            "@type": "Question",
            name: "How is medical weight loss different from regular weight loss programs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Medical weight loss includes comprehensive medical history review, condition-specific planning, healthcare provider coordination, enhanced health parameter monitoring, medication-nutrition guidance, and focus on both weight loss and disease management with medical supervision.",
            },
          },
          {
            "@type": "Question",
            name: "Do you coordinate with my doctor for medical weight loss?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, with your permission we coordinate with your healthcare provider to ensure your nutrition plan aligns with medical treatment, medications, and overall healthcare strategy for comprehensive, safe care.",
            },
          },
          {
            "@type": "Question",
            name: "What kind of monitoring is included in medical weight loss?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide enhanced monitoring including condition-specific health parameters (blood sugar, blood pressure, thyroid markers), medication responses, symptom tracking, lab report analysis, and regular progress assessments with healthcare provider coordination.",
            },
          },
          {
            "@type": "Question",
            name: "Is medical weight loss safe for people with chronic conditions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our medical weight loss program is specifically designed for safety with chronic conditions. We consider medication interactions, dietary restrictions, metabolic considerations, and work closely with healthcare providers to ensure safe, effective weight management.",
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