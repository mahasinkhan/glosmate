"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/our-team" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/#contact" },
];

const services = [
  { label: "Mobile App Development", href: "/services" },
  { label: "Web Development", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "Consultation", href: "/#contact" },
];

const socials = [
  { name: "LinkedIn", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
  { name: "Instagram", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )},
  { name: "Twitter", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { name: "GitHub", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )},
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setEmail(""); }, 3500);
  };

  return (
    <footer className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f6f9fc 0%, #eef3f9 100%)" }}>
      {/* Top decorative accent line */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #0052cc 0%, #06b6d4 50%, #0052cc 100%)" }} />

      {/* Soft ambient background */}
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-40 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,82,204,0.12) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-30 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)" }} />

      {/* Decorative SVG curve at top */}
      <svg className="absolute top-1 left-0 w-full h-16 opacity-30 pointer-events-none" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30" stroke="#0052cc" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Newsletter band — spans top of footer */}
        <div className="relative rounded-3xl overflow-hidden mb-20 p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f6f9fc 100%)",
            border: "1px solid var(--border)",
            boxShadow: "0 30px 60px -15px rgba(10,22,40,0.08)",
          }}>
          {/* Decorative accent strip */}
          <div className="absolute top-0 left-0 bottom-0 w-1.5"
            style={{ background: "linear-gradient(180deg, #0052cc 0%, #06b6d4 100%)" }} />
          {/* Subtle mesh */}
          <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-8" style={{ background: "var(--primary)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--primary)" }}>
                  Stay in the loop
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-2"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Monthly insights on <span className="gradient-text italic">shipping great software.</span>
              </h3>
              <p className="text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                Join 2,000+ founders and tech leaders. No spam, unsubscribe anytime.
              </p>
            </div>

            <form onSubmit={onSubscribe} className="md:col-span-5 flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: "var(--text-muted)" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  disabled={subscribed}
                  className="w-full pl-11 pr-36 py-4 rounded-full text-sm font-medium outline-none transition-all focus:ring-2"
                  style={{
                    background: "#ffffff",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
                <button type="submit" disabled={subscribed}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 disabled:opacity-90"
                  style={{
                    background: subscribed ? "#10b981" : "linear-gradient(135deg,#0052cc,#06b6d4)",
                    color: "#fff",
                    boxShadow: "0 8px 20px -6px rgba(0,82,204,0.35)",
                  }}>
                  {subscribed ? (
                    <><CheckCircle2 className="h-3.5 w-3.5" /> Subscribed</>
                  ) : (
                    <>Subscribe <Send className="h-3.5 w-3.5" /></>
                  )}
                </button>
              </div>
              <p className="text-[11px] flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                <CheckCircle2 className="h-3 w-3" style={{ color: "#10b981" }} />
                We respect your privacy. Zero spam, ever.
              </p>
            </form>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#0052cc,#06b6d4)",
                  boxShadow: "0 12px 28px -6px rgba(0,82,204,0.4)",
                }}>
                <span className="text-white font-serif font-bold text-xl relative z-10" style={{ letterSpacing: "-0.02em" }}>G</span>
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-30"
                  style={{ background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)" }} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-semibold text-xl" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  Glosmate
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: "var(--primary)" }}>
                  Technologies
                </span>
              </div>
            </div>

            <p className="font-serif italic text-xl md:text-2xl leading-snug max-w-md"
              style={{ color: "var(--text-secondary)", letterSpacing: "-0.01em" }}>
              Transforming ideas into <span className="gradient-text">exceptional digital experiences</span> with measurable business impact.
            </p>

            {/* Quick contact highlights */}
            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:+918697636393" className="flex items-center gap-3 text-sm group transition-colors"
                style={{ color: "var(--text-secondary)" }}>
                <span className="h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-medium group-hover:text-[var(--primary)] transition-colors">+91 86976 36393</span>
              </a>
              <a href="mailto:glosmatetech@gmail.com" className="flex items-center gap-3 text-sm group transition-colors"
                style={{ color: "var(--text-secondary)" }}>
                <span className="h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                  <Mail className="h-4 w-4" />
                </span>
                <span className="font-medium group-hover:text-[var(--primary)] transition-colors">glosmatetech@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span className="h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="font-medium">Kolkata, West Bengal · India</span>
              </div>
            </div>

            {/* Live status + CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#0052cc,#06b6d4)", color: "#fff",
                  boxShadow: "0 12px 28px -6px rgba(0,82,204,0.4)",
                }}>
                Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#059669" }}>Online Now</span>
              </div>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xs font-semibold" style={{ color: "var(--primary)" }}>01</span>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-primary)" }}>
                Navigate
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}
                    className="text-sm font-medium transition-all hover:translate-x-1 inline-flex items-center gap-1 group"
                    style={{ color: "var(--text-secondary)" }}>
                    <span className="h-px w-0 transition-all group-hover:w-3" style={{ background: "var(--primary)" }} />
                    <span className="group-hover:text-[var(--primary)]">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xs font-semibold" style={{ color: "var(--primary)" }}>02</span>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-primary)" }}>
                Services
              </h4>
            </div>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href}
                    className="text-sm font-medium transition-all hover:translate-x-1 inline-flex items-center gap-1 group"
                    style={{ color: "var(--text-secondary)" }}>
                    <span className="h-px w-0 transition-all group-hover:w-3" style={{ background: "var(--primary)" }} />
                    <span className="group-hover:text-[var(--primary)]">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company metrics */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xs font-semibold" style={{ color: "var(--primary)" }}>03</span>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-primary)" }}>
                At a Glance
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-4"
                style={{ background: "#ffffff", border: "1px solid var(--border)" }}>
                <p className="font-serif text-2xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>200+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: "var(--text-muted)" }}>
                  Projects Shipped
                </p>
              </div>
              <div className="rounded-xl p-4"
                style={{ background: "#ffffff", border: "1px solid var(--border)" }}>
                <p className="font-serif text-2xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  <span className="gradient-text">4.9</span>
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: "var(--text-muted)" }}>
                  Client Rating
                </p>
              </div>
              <div className="rounded-xl p-4 col-span-2"
                style={{
                  background: "linear-gradient(135deg, rgba(0,82,204,0.06) 0%, rgba(6,182,212,0.04) 100%)",
                  border: "1px solid rgba(0,82,204,0.12)",
                }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg font-semibold" style={{ color: "var(--text-primary)" }}>24/7</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: "var(--text-muted)" }}>
                      Live Support
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold px-2 py-1 rounded-full"
                    style={{ background: "rgba(16,185,129,0.12)", color: "#059669" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Avg &lt; 4h reply
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-8 my-4">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
            style={{ background: "linear-gradient(90deg, transparent 0%, var(--border) 20%, var(--border) 80%, transparent 100%)" }} />
          <div className="relative flex justify-center">
            <div className="bg-[#f6f9fc] px-6 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
                Est. 2023
              </span>
              <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--text-muted)" }}>
                Made in India
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              © 2025 Glosmate Technologies. <span className="font-serif italic">All rights reserved.</span>
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs hover:text-[var(--primary)] transition-colors" style={{ color: "var(--text-muted)" }}>
                Privacy Policy
              </Link>
              <span className="h-3 w-px" style={{ background: "var(--border)" }} />
              <Link href="/terms" className="text-xs hover:text-[var(--primary)] transition-colors" style={{ color: "var(--text-muted)" }}>
                Terms of Service
              </Link>
              <span className="h-3 w-px" style={{ background: "var(--border)" }} />
              <Link href="/cookies" className="text-xs hover:text-[var(--primary)] transition-colors" style={{ color: "var(--text-muted)" }}>
                Cookies
              </Link>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name}
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  boxShadow: "0 4px 12px rgba(10,22,40,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg,#0052cc,#06b6d4)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}