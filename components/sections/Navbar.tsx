"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, ArrowUpRight, Home, Briefcase, FolderOpen, Sparkles, Users, MessageCircle, Phone, Mail, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/", icon: Home, description: "Welcome page" },
  { label: "Services", href: "/services", icon: Briefcase, description: "What we build" },
  { label: "Portfolio", href: "/portfolio", icon: FolderOpen, description: "Featured work" },
  { label: "Features", href: "/features", icon: Sparkles, description: "Why choose us" },
  { label: "Our Team", href: "/our-team", icon: Users, description: "Meet the team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#0052cc,#06b6d4)", boxShadow: "0 8px 20px -6px rgba(0,82,204,0.4)" }}>
            <span className="text-white font-serif font-bold text-lg relative z-10" style={{ letterSpacing: "-0.02em" }}>G</span>
            <div className="absolute inset-0 opacity-30"
              style={{ background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)" }} />
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

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={"nav-link" + (pathname === link.href ? " active" : "")}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
          style={{ background: "var(--primary)", color: "#fff", boxShadow: "0 8px 20px -6px rgba(0,82,204,0.4)" }}>
          Request a Quote <ArrowRight className="h-3.5 w-3.5" />
        </a>

        {/* Mobile menu trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="md:hidden h-10 w-10 rounded-xl flex items-center justify-center transition-all hover:scale-105"
            style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
            <Menu className="h-5 w-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="p-0 border-none w-[90vw] sm:w-[420px] overflow-y-auto"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%)",
            }}>
            {/* Top accent stripe */}
            <div className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #0052cc 0%, #06b6d4 50%, #0052cc 100%)" }} />

            {/* Ambient decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,82,204,0.2), transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-30 pointer-events-none blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)" }} />

            <div className="relative flex flex-col h-full">
              {/* Header */}
              <div className="px-6 pt-6 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
                <Link href="/" onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 mb-6">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg,#0052cc,#06b6d4)", boxShadow: "0 10px 24px -6px rgba(0,82,204,0.4)" }}>
                    <span className="text-white font-serif font-bold text-xl relative z-10">G</span>
                    <div className="absolute inset-0 opacity-30"
                      style={{ background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)" }} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-serif font-semibold text-xl" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                      Glosmate
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.22em] font-bold" style={{ color: "var(--primary)" }}>
                      Technologies
                    </span>
                  </div>
                </Link>

                {/* Trust indicator */}
                <div className="flex items-center gap-3 rounded-full pl-1 pr-4 py-1"
                  style={{ background: "rgba(0,82,204,0.06)", border: "1px solid rgba(0,82,204,0.12)" }}>
                  <div className="flex -space-x-1.5">
                    <div className="h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="h-3 w-px" style={{ background: "rgba(0,82,204,0.2)" }} />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" style={{ color: "var(--accent-amber)" }} />
                    ))}
                    <span className="text-[11px] font-bold ml-1" style={{ color: "var(--text-primary)" }}>4.9</span>
                  </div>
                </div>
              </div>

              {/* Menu label */}
              <div className="px-6 pt-6 pb-3 flex items-center gap-3">
                <span className="h-px w-8" style={{ background: "var(--primary)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--primary)" }}>
                  Navigation
                </span>
              </div>

              {/* Nav links */}
              <AnimatePresence>
                <nav className="flex flex-col px-3 gap-1">
                  {links.map((link, idx) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                      <motion.div key={link.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}>
                        <Link href={link.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4 px-3 py-3.5 rounded-xl group transition-all"
                          style={{
                            background: isActive ? "linear-gradient(90deg, rgba(0,82,204,0.08) 0%, transparent 100%)" : "transparent",
                          }}>
                          {/* Number */}
                          <span className="font-serif text-xs font-semibold w-5 flex-shrink-0"
                            style={{ color: isActive ? "var(--primary)" : "var(--text-muted)" }}>
                            0{idx + 1}
                          </span>

                          {/* Icon badge */}
                          <span className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                            style={{
                              background: isActive ? "linear-gradient(135deg, var(--primary), var(--accent-cyan))" : "rgba(0,82,204,0.06)",
                              color: isActive ? "#fff" : "var(--primary)",
                            }}>
                            <Icon className="h-4 w-4" />
                          </span>

                          {/* Label + description */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-lg font-semibold transition-colors"
                                style={{ color: isActive ? "var(--primary)" : "var(--text-primary)", letterSpacing: "-0.01em" }}>
                                {link.label}
                              </span>
                              {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full"
                                  style={{ background: "var(--primary)", boxShadow: "0 0 8px var(--primary)" }} />
                              )}
                            </div>
                            <p className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
                              {link.description}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ArrowUpRight className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            style={{ color: isActive ? "var(--primary)" : "var(--text-muted)" }} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </AnimatePresence>

              {/* Divider */}
              <div className="mx-6 my-6 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }} />

              {/* Get in touch */}
              <div className="px-6 pb-2 flex items-center gap-3">
                <span className="h-px w-8" style={{ background: "var(--primary)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--primary)" }}>
                  Get in Touch
                </span>
              </div>

              <div className="px-6 pt-3 pb-5 flex flex-col gap-2">
                <a href="tel:+918697636393"
                  className="flex items-center gap-3 py-2.5 group">
                  <span className="h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                    <Phone className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Call us</p>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>+91 86976 36393</p>
                  </div>
                </a>
                <a href="mailto:glosmatetech@gmail.com"
                  className="flex items-center gap-3 py-2.5 group">
                  <span className="h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>Email us</p>
                    <p className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>glosmatetech@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* CTA + status */}
              <div className="px-6 pb-8 mt-auto">
                <div className="rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0052cc 0%, #003d99 60%, #06b6d4 100%)",
                    boxShadow: "0 20px 40px -12px rgba(0,82,204,0.45)",
                  }}>
                  {/* Decorative SVG arc */}
                  <svg className="absolute -top-6 -right-6 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" strokeDasharray="2 3" />
                  </svg>

                  {/* Online status pill */}
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full mb-4">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white">Online Now</span>
                  </div>

                  <h4 className="font-serif text-xl font-semibold text-white mb-1" style={{ letterSpacing: "-0.01em" }}>
                    Start your project<br />
                    <span className="italic font-normal">today.</span>
                  </h4>
                  <p className="text-xs text-white/80 mb-4 leading-relaxed">
                    Free 30-min consultation. No pressure, no sales pitch.
                  </p>

                  <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white font-bold text-sm transition-all hover:scale-[1.02]"
                    style={{ color: "var(--primary)", boxShadow: "0 10px 24px -6px rgba(0,0,0,0.25)" }}>
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Footer tag */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--text-muted)" }}>Est. 2023</span>
                  <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--text-muted)" }}>Made in India</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}