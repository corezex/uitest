import { Metadata } from "next";
import Image from "next/image";
import { ProgramsStructuredData } from "@/app/components/ProgramsStructuredData";
import Programcomparison from "@/app/services/services";

export const metadata: Metadata = {
  title: "Dietfiniti Program Comparison | Choose Your Health Plan",
  description:
    "Compare Dietfiniti programs and choose the perfect plan for your health goals. All programs include personalized meal plans, daily WhatsApp support, progress tracking, and maintenance guidance.",
  keywords:
    "diet program comparison, nutrition plans, meal plans, weight loss program, fitness diet, personalized nutrition, WhatsApp diet support",
  openGraph: {
    title: "Dietfiniti Program Comparison | Choose Your Health Plan",
    description:
      "Compare and choose from Dietfiniti's comprehensive nutrition programs with personalized meal plans and daily support.",
    type: "website",
    url: "https://dietfiniti.com/services",
    siteName: "Dietfiniti",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dietfiniti Program Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dietfiniti Program Comparison | Choose Your Health Plan",
    description:
      "Compare Dietfiniti programs and choose the perfect plan for your health goals.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourdomain.com/services/program-comparison",
  },
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preload" href="/image/Servicesimg1.png" as="image" />
        <link rel="preload" href="/image/Servicesimg2.png" as="image" />
      </head>
      <div>
        <ProgramsStructuredData />
        <Programcomparison />
      </div>
    </>
  );
}
