// components/WhyChooseStructuredData.tsx
export const WhyChooseStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose DietFiniti - Personalized Nutrition & Wellness Programs",
    "description": "Discover why 5000+ clients trust DietFiniti for personalized nutrition programs. 99.99% success rate, 12+ years experience, expert clinical nutritionist Dietitian Tejal.",
    "url": "https://dietfiniti.com/why-choose-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "DietFiniti",
      "alternateName": "DietFiniti by Dietitian Tejal",
      "description": "Personalized nutrition, weight management, and holistic wellness center founded by Dietitian Tejal with 5000+ happy clients and 99.99% success rate",
      "foundingDate": "2019",
      "founder": {
        "@type": "Person",
        "name": "Dietitian Tejal",
        "honorificSuffix": "MSc, CDE",
        "jobTitle": "Founder & Head Dietitian",
        "knowsAbout": [
          "Clinical Nutrition",
          "Medical Nutrition Therapy",
          "Diabetes Education",
          "Weight Management",
          "Lifestyle Transformation"
        ]
      },
      "areaServed": ["Mumbai", "Thane", "India"],
      "knowsAbout": [
        "Personalized Nutrition",
        "Weight Management",
        "Medical Nutrition Therapy",
        "Diabetes Care",
        "Thyroid Nutrition",
        "PCOS/PCOD Diets",
        "Cardiovascular Health Nutrition",
        "Clinical Nutrition",
        "Holistic Wellness"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "5000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "Personalized Nutrition Program",
          "description": "Customized diet plans based on individual health goals and medical conditions"
        },
        {
          "@type": "Offer", 
          "name": "Medical Nutrition Therapy",
          "description": "Clinical nutrition programs for diabetes, thyroid, PCOS, and other medical conditions"
        },
        {
          "@type": "Offer",
          "name": "Weight Management Program", 
          "description": "Sustainable weight loss and weight gain programs with lifestyle coaching"
        },
        {
          "@type": "Offer",
          "name": "Holistic Wellness Program",
          "description": "Complete wellness plans focusing on mind, body, and lifestyle transformation"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": ["Lower Parel, Mumbai", "Thane"],
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919321057899",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dietfiniti.com"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Why Choose Us",
          "item": "https://dietfiniti.com/why-choose-us"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};