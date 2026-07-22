import { Metadata } from "next";
import { WeightGainStructuredData } from "./WeightGainStructuredData";
import WeightGain from "./WeightGain";

export const metadata: Metadata = {
  title:
    "Weight Gain Diet Plan - Healthy Mass Building | DietFiniti by Dietitian Tejal",
  description:
    "Professional weight gain diet plans for healthy mass building. Gain 0.5 kg per week through nutrient-dense foods, muscle building, and sustainable eating habits. 15+ years expertise.",
  keywords:
    "weight gain diet, underweight diet plan, mass building, healthy weight gain, skinny to fit, muscle building diet, calorie surplus diet, weight gain foods, Indian weight gain diet, appetite improvement",
  openGraph: {
    title: "Weight Gain Diet Plan - Healthy Mass Building Program | DietFiniti",
    description:
      "Professional weight gain plans with nutrient-dense foods, frequent meals, and sustainable strategies. Gain healthy weight through muscle mass and improved body composition.",
    type: "website",
    url: "https://dietfiniti.com/services/weight-gain",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-weight-gain.jpg",
        width: 1200,
        height: 630,
        alt: "DietFiniti Weight Gain Diet Plan - Healthy Mass Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Gain Diet Plan - Healthy Mass Building | DietFiniti",
    description:
      "Professional weight gain plans with nutrient-dense foods and sustainable strategies. Gain 0.5 kg per week through healthy mass building.",
    images: ["/twitter-weight-gain.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/services/weight-gain",
  },
  authors: [{ name: "Dietitian Tejal" }],
  creator: "Dietitian Tejal",
  publisher: "DietFiniti",
  category: "Health & Wellness",
  classification: "Weight Gain Nutrition",
};

export default function Home() {
  return (
    <>
      <div>
        <WeightGainStructuredData />
        <WeightGain />
      </div>
    </>
  );
}
