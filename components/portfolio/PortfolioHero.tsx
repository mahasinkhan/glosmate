"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Rocket } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-28 pb-20"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%)" }}>
      {/* Ambient decorations */}
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-[10%] right-[-200px] w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052cc 0%, transparent 70%)" }} />
      <div className="absolute bottom-[5%] left-[-150px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }} />

      {/* Editorial corner marks */}
      <div className="absolute top-28 left-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="h-px w-10" style={{ background: "var(--primary)" }} />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>The Work</span>
      </div>
      <div className="absolute top-28 right-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>Ch. 02 — Portfolio</span>
        <span className="h-px w-10" style={{ background: "var(--primary)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left: Text */}
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="tag-chip inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="h-3 w-3" />
              Selected Work · 2023–2026
            </div>
          </motion.div>

          <motion.h1 className="big-heading mb-6 relative"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            Work we're<br />
            <span className="relative inline-block">
              <span className="gradient-text italic font-serif" style={{ fontWeight: 500 }}>genuinely proud of</span>
              <svg className="absolute left-0 right-0 -bottom-2 w-full" height="12" viewBox="0 0 400 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C80 3 160 3 240 6C320 9 380 8 398 4" stroke="url(#port-underline)" strokeWidth="2.5" strokeLinecap="round" />
                <defs><linearGradient id="port-underline" x1="0" y1="0" x2="400" y2="0">
                  <stop offset="0%" stopColor="#0052cc" /><stop offset="100%" stopColor="#06b6d4" />
                </linearGradient></defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Each of these projects was shipped by the same small team. Different industries, different problems — same relentless standard of care.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <a href="#featured" className="btn-primary group">
              Explore Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#industries" className="btn-secondary">View by industry →</a>
          </motion.div>
        </div>

        {/* Right: Floating stat cards composition */}
        <motion.div className="md:col-span-5 relative hidden md:block"
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <div className="relative h-[440px]">
            {/* Decorative SVG background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 440" fill="none">
              <defs>
                <linearGradient id="blob-port" x1="0" y1="0" x2="400" y2="440">
                  <stop offset="0%" stopColor="#0052cc" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path fill="url(#blob-port)"
                d="M338,220 Q320,340 220,370 Q120,400 70,300 Q20,200 80,120 Q140,40 240,60 Q340,80 338,220 Z" />
              <circle cx="200" cy="220" r="180" stroke="#0052cc" strokeWidth="1" strokeDasharray="2 5" opacity="0.2" fill="none" />
              <circle cx="200" cy="220" r="120" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 4" opacity="0.2" fill="none" />
            </svg>

            {/* Floating card — Projects */}
            <motion.div className="absolute top-4 left-4 bg-white rounded-2xl p-5 w-[210px]"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.2)", border: "1px solid var(--border)" }}
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="section-num">01</span>
                <Rocket className="h-4 w-4" style={{ color: "var(--primary)" }} />
              </div>
              <p className="font-serif text-4xl font-semibold leading-none" style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                200<span className="text-2xl" style={{ color: "var(--primary)" }}>+</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold mt-2" style={{ color: "var(--text-muted)" }}>
                Projects Delivered
              </p>
            </motion.div>

            {/* Floating card — Clients */}
            <motion.div className="absolute top-[30%] right-0 bg-white rounded-2xl p-5 w-[200px]"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.2)", border: "1px solid var(--border)" }}
              animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
              <div className="flex items-center justify-between mb-3">
                <span className="section-num">02</span>
                <Users className="h-4 w-4" style={{ color: "var(--primary)" }} />
              </div>
              <p className="font-serif text-4xl font-semibold leading-none" style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
                50<span className="text-2xl" style={{ color: "var(--primary)" }}>+</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold mt-2" style={{ color: "var(--text-muted)" }}>
                Happy Clients
              </p>
              <div className="flex -space-x-1.5 mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                {["1494790108377-be9c29b29330", "1507003211169-0a1dd7228f2d", "1438761681033-6461ffad8d80"].map((id) => (
                  <div key={id} className="h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${id}?w=60&q=80`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold"
                  style={{ background: "var(--primary)", color: "#fff" }}>+47</div>
              </div>
            </motion.div>

            {/* Floating card — Growth */}
            <motion.div className="absolute bottom-4 left-[15%] bg-white rounded-2xl p-5 w-[230px]"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.2)", border: "1px solid var(--border)" }}
              animate={{ y: [0, 8, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}>
              <div className="flex items-center justify-between mb-3">
                <span className="section-num">03</span>
                <div className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded" style={{ color: "#10b981", background: "rgba(16,185,129,0.1)" }}>
                  <TrendingUp className="h-3 w-3" />+28%
                </div>
              </div>
              <p className="font-serif text-3xl font-semibold leading-none" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                Avg. 3.4x
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] font-bold mt-2" style={{ color: "var(--text-muted)" }}>
                Client Growth
              </p>
              <svg width="100%" height="28" viewBox="0 0 180 28" fill="none" className="mt-3">
                <path d="M0 22 L25 18 L50 20 L75 12 L100 14 L125 7 L150 9 L180 3" stroke="#0052cc" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="180" cy="3" r="3" fill="#0052cc" />
              </svg>
            </motion.div>

            {/* Spinning decoration badge */}
            <motion.div className="absolute top-[55%] right-[10%]"
              animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
              <svg width="90" height="90" viewBox="0 0 90 90" className="opacity-30">
                <defs>
                  <path id="circle-path" d="M 45, 45 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="3" fill="#0052cc">
                  <textPath href="#circle-path">SELECTED WORK · 2023—2026 · GLOSMATE · </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}