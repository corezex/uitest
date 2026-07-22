'use client';

import { Testimonial } from './testimonialService';
import { useEffect, useState } from 'react';

interface TestimonialsStructuredDataProps {
  testimonials?: Testimonial[];
}

export const TestimonialsStructuredData = ({ testimonials = [] }: TestimonialsStructuredDataProps) => {
  const [structuredData, setStructuredData] = useState<any>(null);

  useEffect(() => {
    if (testimonials.length > 0) {
      const itemListElement = testimonials.slice(0, 10).map((testimonial, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Review",
          "name": `${testimonial.servicestype || 'Weight Loss'} Success Story`,
          "author": {
            "@type": "Person",
            "name": testimonial.name,
          },
          "reviewBody": testimonial.description || '',
          ...(testimonial.rating != null
            ? {
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: String(testimonial.rating),
                  bestRating: "5",
                },
              }
            : {}),
          "itemReviewed": {
            "@type": "Service",
            "name": testimonial.servicestype || 'Weight Loss Program',
            "description": `${testimonial.growth ? `Achieved: ${testimonial.growth}. ` : ''}Personalized nutrition program`
          },
          "datePublished": testimonial.createdAt ? new Date(testimonial.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        }
      }));

      const data = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Client Success Stories - DietFiniti",
        "description": "Real testimonials from clients who achieved their health and fitness goals with DietFiniti's personalized nutrition programs",
        "url": "https://dietfiniti.com/testimonials",
        "numberOfItems": testimonials.length,
        "itemListElement": itemListElement
      };

      setStructuredData(data);
    }
  }, [testimonials]);

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};