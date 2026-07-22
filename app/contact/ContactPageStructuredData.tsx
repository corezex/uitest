// components/ContactPageStructuredData.tsx
export const ContactPageStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["DietNutrition", "LocalBusiness"],
    "name": "DietFiniti - Personalized Nutrition & Diet Consultation",
    "description": "Professional diet consultation services by certified dietitian Tejal. Offering personalized nutrition plans for weight loss, medical conditions, pregnancy, bridal, sports nutrition and weight gain.",
    "image": "https://dietfiniti.com/logo.png",
    "url": "https://dietfiniti.com/contact",
    "telephone": "+91-93210-57899",
    "priceRange": "₹3000 - ₹15000",
    "email": "contact@dietfiniti.com", // Add if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400013",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.994891,
      "longitude": 72.831515
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "11:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:00",
        "closes": "17:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-93210-57899",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Marathi"],
        "description": "Main contact number for diet consultations and appointments"
      },
      {
        "@type": "ContactPoint",
        "contactType": "whatsapp",
        "url": "https://wa.me/919321057899",
        "description": "WhatsApp for quick queries and follow-ups"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 18.994891,
        "longitude": 72.831515
      },
      "geoRadius": "50000",
      "description": "Serving Mumbai and online consultations across India"
    },
    "sameAs": [
      "https://www.facebook.com/dieticiantejal",
      "https://instagram.com/dieticiantejal",
      "https://www.pinterest.com/dieticiantejal/",
      "https://www.linkedin.com/company/dietfiniti", // Add if available
      "https://twitter.com/dietfiniti" // Add if available
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Diet Consultation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Initial Diet Consultation",
            "description": "Comprehensive health assessment and personalized diet plan creation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Follow-up Consultation",
            "description": "Regular progress tracking and diet plan adjustments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Consultation",
            "description": "Virtual diet consultation via video call"
          }
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Free Initial Assessment",
        "description": "15-minute free consultation to understand your health goals",
        "availability": "https://schema.org/InStock"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "founder": {
      "@type": "Person",
      "name": "Tejal",
      "jobTitle": "Certified Dietitian & Nutritionist",
      "description": "Founder and chief dietitian at DietFiniti with expertise in clinical nutrition and weight management"
    },
    "employee": {
      "@type": "Person",
      "name": "Tejal",
      "jobTitle": "Certified Dietitian & Nutritionist",
      "description": "Lead dietitian providing personalized nutrition consultations"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};