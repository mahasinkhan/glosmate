import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesDetail from "@/components/services/ServicesDetail";
import ServicesTech from "@/components/services/ServicesTech";
import ServicesPricing from "@/components/services/ServicesPricing";
import ServicesTestimonial from "@/components/services/ServicesTestimonial";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main style={{ background: "#ffffff" }}>
      <Navbar />
      <ServicesHero />
      <ServicesProcess />
      <ServicesDetail />
      <ServicesTech />
      <ServicesPricing />
      <ServicesTestimonial />
      <ServicesFAQ />
      <ServicesCTA />
      <Footer />
    </main>
  );
}