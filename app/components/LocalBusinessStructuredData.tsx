// components/LocalBusinessStructuredData.tsx
export const LocalBusinessStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DietNutrition"],
    "name": "DietFiniti",
    "description": "Professional diet consultation services by certified dietitian Tejal. Personalized nutrition plans for weight loss, medical conditions, pregnancy, bridal, and sports nutrition.",
    "image": "https://dietfiniti.com/logo.png",
    "url": "https://dietfiniti.com",
    "telephone": "+91-93210-57899",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mansi Maternity Home, Ambavat Bhawan, NM Joshi Marg, opposite Marathon Futurex, Lower Parel East",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400013",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.994891,
      "longitude": 72.831515
    },
    "openingHours": "Mo-Fr 11:00-20:00, Sa 11:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-93210-57899",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "sameAs": [
      "https://www.facebook.com/dieticiantejal",
      "https://instagram.com/dieticiantejal",
      "https://www.pinterest.com/dieticiantejal/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};