import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesPillars from "@/components/features/FeaturesPillars";
import FeaturesWorkflow from "@/components/features/FeaturesWorkflow";
import FeaturesStats from "@/components/features/FeaturesStats";
import FeaturesComparison from "@/components/features/FeaturesComparison";
import FeaturesDevExperience from "@/components/features/FeaturesDevExperience";
import FeaturesGuarantees from "@/components/features/FeaturesGuarantees";
import FeaturesCTA from "@/components/features/FeaturesCTA";

export default function FeaturesPage() {
  return (
    <main style={{ background: "#ffffff" }}>
      <Navbar />
      <FeaturesHero />
      <FeaturesPillars />
      <FeaturesWorkflow />
      <FeaturesStats />
      <FeaturesComparison />
      <FeaturesDevExperience />
      <FeaturesGuarantees />
      <FeaturesCTA />
      <Footer />
    </main>
  );
}