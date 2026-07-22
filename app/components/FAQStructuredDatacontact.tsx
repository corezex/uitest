// components/FAQStructuredData.tsx
export const FAQStructuredDatacontact = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the diet plan personalized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each diet plan is 100% customized based on your unique needs. We consider your health goals, medical history, lifestyle, work schedule, food preferences, cooking abilities, budget, and even your taste preferences. Our nutritionists create plans that fit seamlessly into your daily routine while ensuring you achieve your health objectives."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to eat fancy or expensive foods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all! We design plans using everyday, affordable ingredients available in your local market. No expensive superfoods, imported items, or specialty products are required. We work with common Indian ingredients and meals that can be prepared at home with minimal effort and cost."
        }
      },
      {
        "@type": "Question",
        "name": "How often will I receive follow-ups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide regular follow-ups based on your program: weekly progress tracking, bi-weekly comprehensive reviews, and daily WhatsApp support. Additionally, we're available 24/7 for any questions, guidance, or motivation you may need throughout your journey."
        }
      },
      {
        "@type": "Question",
        "name": "Can I follow this diet plan if I have a medical condition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer specialized Medical Weight Loss Programs for conditions such as thyroid disorders, PCOS/PCOD, diabetes, hypertension, high cholesterol, fatty liver, and more. We coordinate with your healthcare provider and create condition-specific plans that support your medical treatment."
        }
      },
      {
        "@type": "Question",
        "name": "How long will it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients notice positive changes within 2–4 weeks, including improved energy levels, better digestion, and initial weight changes. Significant and sustainable results typically appear within 3–6 months. We focus on long-term transformation rather than quick fixes, ensuring results that last."
        }
      },
      {
        "@type": "Question",
        "name": "What payment modes are available, and can I make part payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer multiple payment options like Paytm, bank transfers, GPay, BHIM UPI, credit cards, and PayPal. However, we currently do not provide part-payment or EMI facilities."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't lose any weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We always strive to provide the best results. It is very rare for a client not to lose any weight. We maintain a strong success rate, and in exceptional cases, we may extend the plan from our side. However, please note that we do not offer refunds."
        }
      },
      {
        "@type": "Question",
        "name": "Will I gain weight if I stop the diet plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not recommend stopping the diet plan before reaching your target weight, as your weight may fluctuate. After completing the program, we provide a Maintenance Plan that you must follow for at least 3 months to maintain your results. The Maintenance Plan is included in every program."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
    />
  );
};
