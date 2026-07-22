import { Metadata } from "next";
import { BridalDietStructuredData } from "./BridalDietStructuredData";
import BridalDiet from "./BridalDiet";

export const metadata: Metadata = {
  title:
    "Bridal Diet Plan - Wedding Preparation Nutrition | DietFiniti by Dietitian Tejal",
  description:
    "Professional bridal diet plan for wedding preparation. Achieve radiant skin, perfect weight, and complete bridal glow with personalized nutrition plans. 15+ years expertise in bridal wellness.",
  keywords:
    "bridal diet plan, wedding diet, bridal nutrition, pre-wedding weight loss, bridal glow diet, wedding preparation nutrition, radiant skin diet, healthy bride diet, Indian bridal diet",
  openGraph: {
    title:
      "Bridal Diet Plan - Complete Wedding Preparation Nutrition | DietFiniti",
    description:
      "Achieve your perfect bridal glow with personalized nutrition plans. Radiant skin, healthy weight, and complete wellness for your wedding day.",
    type: "website",
    url: "https://dietfiniti.com/services/bridal-diet",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-bridal-diet.jpg", // You should create this image
        width: 1200,
        height: 630,
        alt: "DietFiniti Bridal Diet Plan - Wedding Preparation Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Diet Plan - Wedding Preparation Nutrition | DietFiniti",
    description:
      "Professional bridal diet plan for radiant skin, perfect weight, and complete wedding glow. Personalized nutrition by expert dietitian.",
    images: ["/twitter-bridal-diet.jpg"], // You should create this image
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/services/bridal-diet",
  },
  authors: [{ name: "Dietitian Tejal" }],
  creator: "Dietitian Tejal",
  publisher: "DietFiniti",
  category: "Health & Wellness",
  classification: "Nutrition Services",
};

export default function Home() {
  return (
    <>
      <div>
        <BridalDietStructuredData />
        <BridalDiet />
      </div>
    </>
  );
}
