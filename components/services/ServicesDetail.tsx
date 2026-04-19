"use client";
import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, Check, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01", icon: Smartphone, label: "Mobile Engineering", title: "Mobile App Development",
    lede: "Native and cross-platform apps that feel at home on every device.",
    description: "We build fast, beautiful mobile experiences using Swift, Kotlin, React Native, and Flutter — engineered for the app stores, designed for retention.",
    features: ["Native iOS with Swift/SwiftUI", "Native Android with Kotlin", "Cross-platform RN & Flutter", "Offline-first architecture", "Push notifications & deep links", "App Store & Play Store launch"],
    video: "https://videos.pexels.com/video-files/5077046/5077046-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=85",
    pattern: "mobile",
  },
  {
    num: "02", icon: Globe, label: "Web Platforms", title: "Web Development",
    lede: "Lightning-fast web platforms engineered to scale.",
    description: "Next.js, React, Django, and Node.js — SEO-ready, accessible, and built on architecture that holds up under enterprise traffic.",
    features: ["React & Next.js frontends", "Django & Node.js backends", "Headless CMS integration", "E-commerce (Stripe/Razorpay)", "Progressive Web Apps", "Core Web Vitals optimized"],
    video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1000&q=85",
    pattern: "web",
  },
  {
    num: "03", icon: Palette, label: "Design Systems", title: "UI/UX Design",
    lede: "Human-centered design that converts, delights, and scales.",
    description: "From research to design systems to pixel-perfect Figma files — we craft interfaces your users actually enjoy returning to.",
    features: ["UX research & user interviews", "Wireframes & prototypes", "Scalable design systems", "Interaction design", "Accessibility audits (WCAG)", "Designer-developer handoff"],
    video: "https://videos.pexels.com/video-files/7989462/7989462-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&q=85",
    pattern: "design",
  },
];

function PatternSVG({ type }: { type: string }) {
  if (type === "mobile") {
    return (
      <svg className="absolute top-6 right-6 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
        <rect x="30" y="10" width="40" height="80" rx="8" stroke="#0052cc" strokeWidth="2" />
        <circle cx="50" cy="78" r="3" fill="#0052cc" />
        <rect x="36" y="20" width="28" height="50" rx="3" stroke="#0052cc" strokeWidth="1" />
      </svg>
    );
  }
  if (type === "web") {
    return (
      <svg className="absolute top-6 right-6 w-28 h-24 opacity-10" viewBox="0 0 120 100" fill="none">
        <rect x="10" y="10" width="100" height="70" rx="5" stroke="#0052cc" strokeWidth="2" />
        <line x1="10" y1="25" x2="110" y2="25" stroke="#0052cc" strokeWidth="2" />
        <circle cx="18" cy="17.5" r="2" fill="#0052cc" />
        <circle cx="26" cy="17.5" r="2" fill="#0052cc" />
        <circle cx="34" cy="17.5" r="2" fill="#0052cc" />
        <rect x="50" y="85" width="20" height="5" rx="2" fill="#0052cc" />
      </svg>
    );
  }
  return (
    <svg className="absolute top-6 right-6 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
      <circle cx="35" cy="35" r="18" stroke="#0052cc" strokeWidth="2" />
      <rect x="48" y="48" width="36" height="36" rx="3" stroke="#0052cc" strokeWidth="2" />
      <path d="M20 70 L30 60 L40 75" stroke="#0052cc" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function ServicesDetail() {
  return (
    <section id="services-detail" className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mesh-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">What We Build</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Three disciplines.<br />
              <span className="gradient-text italic font-serif">One unified standard.</span>
            </h2>
          </motion.div>
        </div>

        {/* Alternating deep-dive sections */}
        <div className="flex flex-col gap-24">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isReverse = idx % 2 === 1;
            return (
              <motion.div key={service.num} className={"grid grid-cols-1 md:grid-cols-12 gap-10 items-center " + (isReverse ? "md:[direction:rtl]" : "")}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
                {/* Content */}
                <div className="md:col-span-6 md:[direction:ltr] relative">
                  <PatternSVG type={service.pattern} />

                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-serif text-sm font-semibold" style={{ color: "var(--primary)" }}>{service.num}</span>
                    <span className="h-px w-8" style={{ background: "var(--primary)" }} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-secondary)" }}>
                      {service.label}
                    </span>
                  </div>

                  <div className="icon-box mb-5">
                    <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                  </div>

                  <h3 className="font-serif text-4xl md:text-5xl font-semibold mb-4"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                    {service.title}
                  </h3>
                  <p className="font-serif italic text-xl mb-5" style={{ color: "var(--primary)" }}>
                    {service.lede}
                  </p>
                  <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(0,82,204,0.1)" }}>
                          <Check className="h-3 w-3" style={{ color: "var(--primary)" }} />
                        </span>
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-primary group inline-flex">
                    Start this project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Video tile */}
                <div className="md:col-span-6 md:[direction:ltr]">
                  <div className="relative group">
                    {/* Decorative corner marks */}
                    <span className="absolute -top-3 -left-3 text-2xl font-thin opacity-50 z-10" style={{ color: "var(--primary)" }}>+</span>
                    <span className="absolute -bottom-3 -right-3 text-2xl font-thin opacity-50 z-10" style={{ color: "var(--primary)" }}>+</span>

                    <div className="relative rounded-2xl overflow-hidden"
                      style={{ boxShadow: "0 30px 60px -15px rgba(10,22,40,0.25)", border: "1px solid var(--border)" }}>
                      <video autoPlay muted loop playsInline
                        className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                        poster={service.poster}>
                        <source src={service.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(10,22,40,0.5), transparent 55%)" }} />

                      {/* Corner label */}
                      <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full">
                        <span className="font-serif text-sm font-semibold" style={{ color: "var(--primary)" }}>{service.num}</span>
                        <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                          {service.label}
                        </span>
                      </div>

                      <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/50 backdrop-blur px-2.5 py-1 rounded-full">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white">Live</span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="font-serif italic text-white text-lg" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                          {service.lede}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}