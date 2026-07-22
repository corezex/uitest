import { Metadata } from "next";
import { PregnancyDietStructuredData } from "./PregnancyDietStructuredData";
import PregnancyDiet from "./PregnancyDiet";

export const metadata: Metadata = {
  title:
    "Pregnancy Diet Plan - Trimester-Specific Nutrition | DietFiniti by Dietitian Tejal",
  description:
    "Expert pregnancy diet plans for each trimester. Complete maternal & fetal nutrition with trimester-specific meal plans, postpartum support, and breastfeeding guidance. 15+ years clinical expertise.",
  keywords:
    "pregnancy diet plan, trimester nutrition, prenatal diet, pregnancy meal plan, maternal nutrition, fetal development, postpartum diet, breastfeeding nutrition, pregnancy vitamins, Indian pregnancy diet",
  openGraph: {
    title:
      "Pregnancy Diet Plan - Complete Maternal & Fetal Nutrition | DietFiniti",
    description:
      "Trimester-specific nutrition plans for healthy pregnancy. Expert guidance for maternal health, fetal development, postpartum recovery, and breastfeeding support.",
    type: "website",
    url: "https://dietfiniti.com/services/pregnancy-diet",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-pregnancy-diet.jpg",
        width: 1200,
        height: 630,
        alt: "DietFiniti Pregnancy Diet Plan - Trimester-Specific Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Diet Plan - Trimester Nutrition | DietFiniti",
    description:
      "Complete pregnancy nutrition for each trimester. Maternal health, fetal development, and postpartum support with expert guidance.",
    images: ["/twitter-pregnancy-diet.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/services/pregnancy-diet",
  },
  authors: [{ name: "Dietitian Tejal" }],
  creator: "Dietitian Tejal",
  publisher: "DietFiniti",
  category: "Health & Wellness",
  classification: "Prenatal Nutrition",
};

export default function Home() {
  return (
    <>
      <div>
        <PregnancyDietStructuredData />
        <PregnancyDiet />
      </div>
    </>
  );
}
