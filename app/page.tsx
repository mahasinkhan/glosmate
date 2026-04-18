import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ background: "#ffffff" }}>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <WhyChooseUs />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}