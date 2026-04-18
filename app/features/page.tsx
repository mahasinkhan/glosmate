import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16"><WhyChooseUs /></div>
      <Footer />
    </main>
  );
}