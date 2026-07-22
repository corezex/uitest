import { Metadata } from "next";
import About from "./about";
import { AboutStructuredData } from "./AboutStructuredData";

export const metadata: Metadata = {
  title:
    "About DietFiniti - Dietitian Tejal | India's Trusted Nutrition Clinic",
  description:
    "Meet Dietitian Tejal - founder of DietFiniti with 15+ years clinical experience. Learn about our science-based nutrition approach, expertise areas, and community initiatives. 5000+ lives transformed.",
  keywords:
    "Dietitian Tejal, DietFiniti about, nutritionist Mumbai, clinical dietitian, diabetic educator, weight loss expert, PCOS nutrition, thyroid diet, pregnancy dietitian, corporate wellness",
  openGraph: {
    title:
      "About DietFiniti - Dietitian Tejal | Trusted Nutrition Care Since 2019",
    description:
      "Discover DietFiniti's journey - from clinical expertise to transforming 5000+ lives. Science-based nutrition with Indian food focus. Mumbai & Thane clinics.",
    type: "website",
    url: "https://dietfiniti.com/about",
    siteName: "DietFiniti by Dietitian Tejal",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "DietFiniti About - Dietitian Tejal and Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DietFiniti - Dietitian Tejal | Nutrition Experts",
    description:
      "15+ years clinical expertise, 5000+ lives transformed. Science-based nutrition with Indian food focus. Mumbai & Thane locations.",
    images: ["/twitter-about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dietfiniti.com/about",
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
        <AboutStructuredData />
        <About />
      </div>
    </>
  );
}
