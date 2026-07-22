import { Metadata } from "next";
import { SportsNutritionStructuredData } from "./SportsNutritionStructuredData";
import SportsNutrition from "./SportsNutrition";

export const metadata: Metadata = {
  title:
    "Sports Nutrition Program - Athlete Performance & Recovery | DietFiniti by Dietitian Tejal",
  description:
    "Professional sports nutrition plans for athletes. Sport-specific meal plans, performance fueling, recovery nutrition, and competition strategies. 15+ years expertise in athlete nutrition.",
  keywords:
    "sports nutrition, athlete diet plan, performance nutrition, sports dietitian, athlete meal plan, recovery nutrition, sports supplements, endurance nutrition, strength training diet, competition fueling",
  openGraph: {
    title:
      "Sports Nutrition Program - Peak Performance & Recovery | DietFiniti",
    description:
      "Sport-specific nutrition plans for athletes. Performance optimization, faster recovery, and competition fueling strategies for endurance, strength, team, and combat sports.",
    type: "website",
    url: "https://dietfiniti.com/services/sports-nutrition",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-sports-nutrition.jpg",
        width: 1200,
        height: 630,
        alt: "DietFiniti Sports Nutrition Program - Athlete Performance & Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Nutrition Program - Athlete Performance | DietFiniti",
    description:
      "Sport-specific nutrition for peak performance, faster recovery, and competition success. Expert guidance for all sports disciplines.",
    images: ["/twitter-sports-nutrition.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/services/sports-nutrition",
  },
  authors: [{ name: "Dietitian Tejal" }],
  creator: "Dietitian Tejal",
  publisher: "DietFiniti",
  category: "Sports & Fitness",
  classification: "Sports Nutrition",
};

export default function Home() {
  return (
    <>
      <div>
        <SportsNutritionStructuredData />
        <SportsNutrition />
      </div>
    </>
  );
}
