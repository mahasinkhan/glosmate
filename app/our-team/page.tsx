import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Team from "@/components/sections/Team";
export default function OurTeamPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16"><Team /></div>
      <Footer />
    </main>
  );
}