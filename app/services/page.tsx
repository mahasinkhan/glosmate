import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Features from "@/components/sections/Features";
export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16"><Features /></div>
      <Footer />
    </main>
  );
}