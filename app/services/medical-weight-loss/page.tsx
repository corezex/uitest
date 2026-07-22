import { Metadata } from "next";
import { MedicalWeightLossStructuredData } from "./MedicalWeightLossStructuredData";
import MedicalWeight from "./MedicalWeight";

export const metadata: Metadata = {
  title:
    "Medical Weight Loss Program - Doctor-Coordinated Nutrition | DietFiniti by Dietitian Tejal",
  description:
    "Specialized weight management for medical conditions. Lose weight safely with doctor-coordinated nutrition plans for thyroid, diabetes, PCOS, hypertension & more. 15+ years clinical expertise.",
  keywords:
    "medical weight loss, thyroid weight loss, diabetes diet plan, PCOS weight management, hypertension diet, cholesterol management, fatty liver diet, doctor-coordinated nutrition, clinical weight loss, medical condition diet",
  openGraph: {
    title:
      "Medical Weight Loss Program - Safe Weight Management for Health Conditions | DietFiniti",
    description:
      "Specialized doctor-coordinated nutrition plans for medical conditions. Safe, monitored weight loss for thyroid, diabetes, PCOS, and other health conditions.",
    type: "website",
    url: "https://dietfiniti.com/services/medical-weight-loss",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-medical-weight-loss.jpg",
        width: 1200,
        height: 630,
        alt: "DietFiniti Medical Weight Loss Program - Doctor-Coordinated Nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Weight Loss Program - Safe Weight Management | DietFiniti",
    description:
      "Doctor-coordinated nutrition plans for thyroid, diabetes, PCOS & other medical conditions. Safe, monitored weight loss with clinical expertise.",
    images: ["/twitter-medical-weight-loss.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/services/medical-weight-loss",
  },
  authors: [{ name: "Dietitian Tejal" }],
  creator: "Dietitian Tejal",
  publisher: "DietFiniti",
  category: "Health & Wellness",
  classification: "Medical Nutrition Therapy",
};

export default function Home() {
  return (
    <>
      <div>
        <MedicalWeightLossStructuredData />
        <MedicalWeight />
      </div>
    </>
  );
}
