import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFeatured from "@/components/portfolio/PortfolioFeatured";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioIndustries from "@/components/portfolio/PortfolioIndustries";
import PortfolioLogos from "@/components/portfolio/PortfolioLogos";
import PortfolioTestimonial from "@/components/portfolio/PortfolioTestimonial";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <main style={{ background: "#ffffff" }}>
      <Navbar />
      <PortfolioHero />
      <PortfolioFeatured />
      <PortfolioGrid />
      <PortfolioIndustries />
      <PortfolioLogos />
      <PortfolioTestimonial />
      <PortfolioCTA />
      <Footer />
    </main>
  );
}