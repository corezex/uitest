import { Metadata } from "next";
import { WeightLossStructuredData } from "./WeightLossStructuredData";
import WeightLoss from "./WeightLoss";

export const metadata: Metadata = {
  title:
    "Weight Loss Diet Plan - Personalized Nutrition | DietFiniti by Dietitian Tejal",
  description:
    "Professional weight loss diet plans with personalized meal plans, weekly tracking, and daily WhatsApp support. Lose weight sustainably with regular foods and lifestyle-based approach. 15+ years expertise.",
  keywords:
    "weight loss diet, personalized diet plan, fat loss program, customized meal plans, sustainable weight loss, Indian diet plan, WhatsApp diet support, weekly tracking, lifestyle nutrition, healthy eating",
  openGraph: {
    title:
      "Weight Loss Diet Plan - Personalized Sustainable Nutrition | DietFiniti",
    description:
      "Customized weight loss plans with regular foods, weekly progress tracking, and daily support. Sustainable approach without fancy ingredients or restrictive diets.",
    type: "website",
    url: "https://dietfiniti.com/services/weight-loss",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-weight-loss.jpg",
        width: 1200,
        height: 630,
        alt: "DietFiniti Weight Loss Diet Plan - Personalized Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Loss Diet Plan - Personalized Nutrition | DietFiniti",
    description:
      "Customized weight loss plans with regular foods, weekly tracking, and daily WhatsApp support. Sustainable approach for long-term results.",
    images: ["/twitter-weight-loss.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/services/weight-loss",
  },
  authors: [{ name: "Dietitian Tejal" }],
  creator: "Dietitian Tejal",
  publisher: "DietFiniti",
  category: "Health & Wellness",
  classification: "Weight Loss Nutrition",
};

export default function Home() {
  return (
    <>
      <div>
        <WeightLossStructuredData />
        <WeightLoss />
      </div>
    </>
  );
}
