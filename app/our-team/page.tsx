import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import TeamHero from "@/components/team/TeamHero";
import TeamValues from "@/components/team/TeamValues";
import TeamMembers from "@/components/team/TeamMembers";
import TeamCulture from "@/components/team/TeamCulture";
import TeamNumbers from "@/components/team/TeamNumbers";
import TeamOpenRoles from "@/components/team/TeamOpenRoles";
import TeamCTA from "@/components/team/TeamCTA";

export default function OurTeamPage() {
  return (
    <main style={{ background: "#ffffff" }}>
      <Navbar />
      <TeamHero />
      <TeamValues />
      <TeamMembers />
      <TeamNumbers />
      <TeamCulture />
      <TeamOpenRoles />
      <TeamCTA />
      <Footer />
    </main>
  );
}