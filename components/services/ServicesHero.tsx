"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
      {/* Background video */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/3196284/3196284-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,252,0.94) 100%)" }} />
      <div className="absolute inset-0 mesh-bg z-[2]" />

      {/* Decorative SVG blob top-right */}
      <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] z-[3] opacity-40" viewBox="0 0 500 500" fill="none">
        <defs>
          <linearGradient id="blob1" x1="0" y1="0" x2="500" y2="500">
            <stop offset="0%" stopColor="#0052cc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path fill="url(#blob1)"
          d="M421.4,313.5Q402,377,345.5,414.5Q289,452,223.5,437Q158,422,112,373Q66,324,60,245Q54,166,115,119.5Q176,73,246,66Q316,59,362,108.5Q408,158,430,229Q452,300,421.4,313.5Z" />
      </svg>

      {/* Decorative grid dots bottom-left */}
      <svg className="absolute bottom-10 left-10 z-[3] opacity-60" width="180" height="180" viewBox="0 0 180 180" fill="none">
        {[...Array(8)].map((_, row) =>
          [...Array(8)].map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 22 + 4} cy={row * 22 + 4} r="1.8" fill="#0052cc" opacity={0.15 + row * 0.05} />
          ))
        )}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tag-chip inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="h-3 w-3" />
              Our Services · Comprehensive Digital Solutions
            </div>
          </motion.div>

          <motion.h1 className="big-heading mb-6"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Services built to<br />
            <span className="gradient-text italic font-serif" style={{ fontWeight: 500 }}>scale your vision</span><br />
            into production.
          </motion.h1>

          <motion.p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            From mobile engineering to enterprise web platforms and human-centered design — a complete digital partner under one roof.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <a href="#services-detail" className="btn-primary group">
              Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#pricing" className="btn-secondary">View Pricing →</a>
          </motion.div>

          {/* Service pills */}
          <motion.div className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            {[
              { icon: Code2, label: "12+ tech stacks" },
              { icon: Rocket, label: "30-day delivery" },
              { icon: Sparkles, label: "Lifetime support" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[var(--border)] px-4 py-2 rounded-full">
                  <Icon className="h-4 w-4" style={{ color: "var(--primary)" }} />
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Decorative SVG composition */}
        <motion.div className="md:col-span-5 relative hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Central isometric illustration */}
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient id="iso-card-1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0052cc" />
                  <stop offset="100%" stopColor="#003d99" />
                </linearGradient>
                <linearGradient id="iso-card-2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                <linearGradient id="iso-card-3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f1f5f9" />
                </linearGradient>
                <filter id="iso-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0052cc" floodOpacity="0.2" />
                </filter>
              </defs>

              {/* Orbit rings */}
              <circle cx="200" cy="200" r="170" stroke="#0052cc" strokeWidth="1" strokeDasharray="2 5" fill="none" opacity="0.3" />
              <circle cx="200" cy="200" r="130" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.3" />

              {/* Back card — web */}
              <g filter="url(#iso-shadow)">
                <rect x="130" y="90" width="180" height="120" rx="10" fill="url(#iso-card-3)" stroke="#e2e8f0" />
                <rect x="130" y="90" width="180" height="24" rx="10" fill="#f1f5f9" />
                <circle cx="142" cy="102" r="3" fill="#ff5f57" />
                <circle cx="152" cy="102" r="3" fill="#febc2e" />
                <circle cx="162" cy="102" r="3" fill="#28c840" />
                <rect x="145" y="130" width="120" height="8" rx="2" fill="#0052cc" opacity="0.25" />
                <rect x="145" y="145" width="80" height="6" rx="2" fill="#64748b" opacity="0.3" />
                <rect x="145" y="158" width="100" height="6" rx="2" fill="#64748b" opacity="0.2" />
                <rect x="145" y="175" width="55" height="22" rx="11" fill="url(#iso-card-1)" />
              </g>

              {/* Floating mobile — front left */}
              <g filter="url(#iso-shadow)" transform="translate(60, 190) rotate(-12)">
                <rect x="0" y="0" width="90" height="170" rx="18" fill="#0a1628" />
                <rect x="5" y="5" width="80" height="160" rx="14" fill="url(#iso-card-3)" />
                <circle cx="45" cy="18" r="2" fill="#0a1628" />
                <rect x="15" y="35" width="60" height="40" rx="6" fill="url(#iso-card-1)" />
                <rect x="15" y="85" width="60" height="8" rx="2" fill="#0052cc" opacity="0.3" />
                <rect x="15" y="100" width="40" height="6" rx="2" fill="#64748b" opacity="0.3" />
                <rect x="15" y="115" width="50" height="6" rx="2" fill="#64748b" opacity="0.3" />
                <rect x="15" y="135" width="60" height="18" rx="9" fill="url(#iso-card-2)" />
              </g>

              {/* Floating design card — right */}
              <g filter="url(#iso-shadow)" transform="translate(260, 220) rotate(8)">
                <rect x="0" y="0" width="110" height="130" rx="10" fill="url(#iso-card-2)" />
                <rect x="12" y="15" width="86" height="4" rx="2" fill="white" opacity="0.7" />
                <rect x="12" y="25" width="50" height="4" rx="2" fill="white" opacity="0.5" />
                <circle cx="55" cy="65" r="22" fill="white" opacity="0.9" />
                <path d="M45 65 L52 72 L67 57" stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="12" y="100" width="86" height="4" rx="2" fill="white" opacity="0.5" />
                <rect x="12" y="112" width="60" height="4" rx="2" fill="white" opacity="0.3" />
              </g>

              {/* Connecting dots */}
              <circle cx="170" cy="280" r="4" fill="#0052cc" />
              <circle cx="230" cy="150" r="3" fill="#06b6d4" />
              <circle cx="110" cy="150" r="3" fill="#0052cc" opacity="0.6" />
            </svg>

            {/* Orbital badge */}
            <motion.div className="absolute top-[10%] right-[5%] bg-white rounded-full px-4 py-2 flex items-center gap-2 z-10"
              style={{ boxShadow: "0 12px 28px rgba(10,22,40,0.15)", border: "1px solid var(--border)" }}
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <span className="h-2 w-2 rounded-full" style={{ background: "#10b981" }} />
              <span className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Shipping Daily</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>Scroll to Explore</span>
        <motion.div className="h-10 w-px" style={{ background: "linear-gradient(180deg, var(--primary), transparent)" }}
          animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
      </div>
    </section>
  );
}