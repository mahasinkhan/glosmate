import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/About";
export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16"><About /></div>
      <Footer />
    </main>
  );
}