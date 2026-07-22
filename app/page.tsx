import Image from "next/image";
import Homepage from "@/app/components/HeroSection";
import DietChallengesSection from "@/app/components/DietChallengesSection";
import { HeroStructuredData } from "@/app/components/HeroStructuredData";
import ProgramsSection from "@/app/components/ProgramsSection";
import UniqueApproachSection from "@/app/components/UniqueApproachSection";
import TrustSection from "@/app/components/TrustSection";
import { ProgramsStructuredData } from "@/app/components/ProgramsStructuredData";
import { WhyChooseStructuredData } from "@/app/components/WhyChooseStructuredData";
import HowItWorks from "@/app/components/HowItWorks";
import { HowItWorksStructuredData } from "@/app/components/HowItWorksStructuredData";
import FAQSection from "@/app/components/FAQSection";
import { FAQStructuredData } from "@/app/components/FAQStructuredData";
import VisitUs from "@/app/components/VisitUs";

export default function Home() {
  return (
    <div>
      <Homepage />
      <HeroStructuredData />
      <DietChallengesSection />
      <ProgramsSection />
      <ProgramsStructuredData />
       <TrustSection />
      <UniqueApproachSection />
      <WhyChooseStructuredData />
      <HowItWorks />
      <HowItWorksStructuredData />
      <VisitUs />
      <FAQSection />
      <FAQStructuredData />
    </div>
  );
}
