// components/OrganizationStructuredData.tsx
export const OrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DietFiniti",
    "url": "https://dietfiniti.com",
    "logo": "https://dietfiniti.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/dieticiantejal",
      "https://instagram.com/dieticiantejal",
      "https://www.pinterest.com/dieticiantejal/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-93210-57899",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

