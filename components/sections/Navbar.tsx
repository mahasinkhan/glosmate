"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Features", href: "/features" },
  { label: "Our Team", href: "/our-team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + (scrolled ? "nav-scrolled" : "")}
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid rgba(226,232,240,0.5)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#0052cc,#06b6d4)", boxShadow: "0 8px 20px -6px rgba(0,82,204,0.4)" }}>
            <span className="text-white font-serif font-bold text-lg" style={{ letterSpacing: "-0.02em" }}>G</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-semibold text-lg" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Glosmate
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] font-bold" style={{ color: "var(--primary)" }}>
              Technologies
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={"nav-link" + (pathname === link.href ? " active" : "")}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
          style={{ background: "var(--primary)", color: "#fff", boxShadow: "0 8px 20px -6px rgba(0,82,204,0.4)" }}>
          Request a Quote <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <Sheet>
          <SheetTrigger className="md:hidden"><Menu className="h-6 w-6" style={{ color: "var(--text-primary)" }} /></SheetTrigger>
          <SheetContent style={{ background: "#ffffff", borderColor: "var(--border)" }}>
            <Link href="/" className="flex items-center gap-2 mb-10 mt-2">
              <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#0052cc,#06b6d4)" }}>
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-serif font-semibold text-lg" style={{ color: "var(--text-primary)" }}>Glosmate</span>
            </Link>
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base font-medium transition-colors" style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                className="text-center py-3 rounded-full font-semibold text-white mt-4"
                style={{ background: "var(--primary)" }}>
                Get Quote
              </a>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}