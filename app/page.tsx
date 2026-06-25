import { BrandStorySection } from "@/components/BrandStorySection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { EngagementModels } from "@/components/EngagementModels";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FounderQuote } from "@/components/FounderQuote";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetricsSection } from "@/components/MetricsSection";
import { PartnerEcosystem } from "@/components/PartnerEcosystem";
import { PillarSection } from "@/components/PillarSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SelectedWork } from "@/components/SelectedWork";
import { VisionMissionSection } from "@/components/VisionMissionSection";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStorySection />
        <PillarSection />
        <VisionMissionSection />
        <ProcessSection />
        <CapabilitiesSection />
        <FounderQuote />
        <WhyUsSection />
        <SelectedWork />
        <MetricsSection />
        <EngagementModels />
        <PartnerEcosystem />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
