import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/#contact" },
];
const services = ["Mobile App Development", "Web Development", "UI/UX Design", "Consultation"];

export default function Footer() {
  return (
    <footer className="relative px-6 pt-24 pb-10 overflow-hidden section-navy">
      <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3), transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#0052cc,#06b6d4)" }}>
                <span className="text-white font-serif font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-semibold text-xl text-white" style={{ letterSpacing: "-0.02em" }}>
                  Glosmate
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#06b6d4]">
                  Technologies
                </span>
              </div>
            </div>
            <p className="font-serif italic text-2xl text-white/90 leading-snug max-w-md" style={{ letterSpacing: "-0.01em" }}>
              Transforming ideas into exceptional digital experiences with measurable business impact.
            </p>
            <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-sm font-semibold px-5 py-3 rounded-full transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#0052cc,#06b6d4)", color: "#fff" }}>
              Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/65 transition-colors cursor-pointer hover:text-white">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-white/65">+91 86976 36393</li>
              <li className="text-sm text-white/65">glosmatetech@gmail.com</li>
              <li className="text-sm text-white/65">Kolkata, West Bengal</li>
              <li className="flex items-center gap-2 mt-2">
                <span className="h-2 w-2 rounded-full" style={{ background: "#06b6d4", boxShadow: "0 0 12px #06b6d4" }} />
                <span className="text-xs font-semibold text-[#06b6d4] uppercase tracking-wider">Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50">© 2023 Glosmate Technologies. All rights reserved.</p>
          <p className="text-xs text-white/50 font-serif italic">India's Premier Affordable Development Agency</p>
        </div>
      </div>
    </footer>
  );
}