// components/AboutStructuredData.tsx
export const AboutStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://dietfiniti.com/#organization",
    "name": "DietFiniti by Dietitian Tejal",
    "description": "India's Trusted Dietitian for Sustainable Health & Wellness - Where Science Meets Simplicity. Founded in 2019 with 15+ years of clinical experience in nutrition and dietetics.",
    "url": "https://dietfiniti.com",
    "logo": "https://dietfiniti.com/logo.png",
    "foundingDate": "2019",
    "founder": {
      "@type": "Person",
      "name": "Dietitian Tejal",
      "honorificSuffix": "MSc Dietetics, Diabetic Educator",
      "hasCredential": ["MSc Dietetics", "Diabetic Educator"],
      "knowsAbout": ["Clinical Nutrition", "Diabetes Management", "Weight Management", "PCOS/PCOD", "Cardiac Health", "Pregnancy Nutrition"]
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Lower Parel",
        "addressRegion": "Mumbai",
        "addressCountry": "India"
      },
      {
        "@type": "PostalAddress", 
        "addressLocality": "Kolshet Road",
        "addressRegion": "Thane",
        "addressCountry": "India"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@dietfiniti.com",
        "availableLanguage": ["English", "Hindi", "Marathi"]
      }
    ],
    "areaServed": ["India", "International"],
    "award": "Nominated for India 5000 Best MSME Awards 2021",
    "employee": {
      "@type": "Person",
      "name": "Dietitian Tejal",
      "jobTitle": "Founder & Chief Nutritionist",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "LTMG Hospital (Sion Hospital)"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Bhatia Hospital, Tardeo" 
        }
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Clinical Nutritionist",
        "occupationLocation": {
          "@type": "City",
          "name": "Mumbai"
        },
      }
    },



    "memberOf": [
      {
        "@type": "NGO",
        "name": "Vatsalya Foundation",
        "description": "Promoting nutrition awareness among orphan children in Mumbai"
      }
    ],
    "knowsAbout": [
      "Clinical Nutrition",
      "Diabetes Management", 
      "Weight Management",
      "PCOS/PCOD Management",
      "Cardiac Health Nutrition",
      "Pregnancy Nutrition",
      "Corporate Wellness",
      "Indian Diet Planning",
      "Sustainable Lifestyle Changes",
      "Medical Nutrition Therapy"
    ],
    "ethicsPolicy": "https://dietfiniti.com/privacy-policy",
    "founders": [
      {
        "@type": "Person",
        "name": "Dietitian Tejal",
        "jobTitle": "Founder & Chief Nutritionist",
        "description": "MSc in Dietetics with 15+ years of clinical experience from LTMG Hospital and Bhatia Hospital"
      }
    ],
    "numberOfEmployees": "25",
    "slogan": "Real Food. Real Science. Real Results.",
    "owns": {
      "@type": "MedicalClinic",
      "name": "DietFiniti Clinic",
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};