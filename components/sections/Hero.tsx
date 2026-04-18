"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Star, TrendingUp, Play, Code2, Award } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Delivered", growth: "+42 this year" },
  { value: "50+", label: "Global Clients", growth: "12 industries" },
  { value: "24/7", label: "Live Support", growth: "< 4hr response" },
  { value: "4.9", label: "Client Rating", growth: "200+ reviews" },
];

const techs = [
  { name: "React Native", tag: "Mobile" },
  { name: "Flutter", tag: "Mobile" },
  { name: "Next.js", tag: "Web" },
  { name: "Django", tag: "Backend" },
  { name: "Node.js", tag: "Backend" },
  { name: "Swift", tag: "iOS" },
  { name: "Kotlin", tag: "Android" },
  { name: "AWS", tag: "Cloud" },
  { name: "TypeScript", tag: "Lang" },
  { name: "PostgreSQL", tag: "DB" },
];

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
];

/** Counts up to a numeric value when mounted */
function Counter({ to, suffix = "", duration = 1.8, delay = 0 }: { to: number; suffix?: string; duration?: number; delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toString() + suffix);
  useEffect(() => {
    const controls = animate(count, to, { duration, delay, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [to, duration, delay]);
  return <motion.span>{rounded}</motion.span>;
}

export default function Hero() {
  const [timecode, setTimecode] = useState("00:01");

  // Live-ish timecode counter for the video demo tile
  useEffect(() => {
    let seconds = 1;
    const id = setInterval(() => {
      seconds = (seconds + 1) % 85; // loops at 1:25
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      setTimecode(`${m}:${s}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden section-white">
      {/* Ambient background video */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.96) 100%)" }} />
      <div className="absolute inset-0 mesh-bg z-[2]" />
      <div className="absolute inset-0 grid-bg opacity-50 z-[2]" />
      <div className="absolute top-[10%] right-[-300px] w-[700px] h-[700px] rounded-full opacity-30 blur-3xl pointer-events-none z-[3]"
        style={{ background: "radial-gradient(circle, #0052cc 0%, transparent 70%)" }} />
      <div className="absolute bottom-[10%] left-[-200px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none z-[3]"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }} />

      {/* Editorial corner marks */}
      <div className="absolute top-24 left-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="h-px w-12" style={{ background: "var(--primary)" }} />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>EST · 2023</span>
      </div>
      <div className="absolute top-24 right-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>KOLKATA · INDIA</span>
        <span className="h-px w-12" style={{ background: "var(--primary)" }} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-12 w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center flex-1">
        {/* LEFT: Text column */}
        <div className="md:col-span-6 lg:col-span-6">
          {/* Social proof row */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 mb-6 bg-white/70 backdrop-blur-sm border border-[var(--border)] rounded-full pl-1.5 pr-5 py-1.5">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <div key={i} className="h-7 w-7 rounded-full overflow-hidden border-2 border-white">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="h-7 w-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold"
                style={{ background: "var(--primary)", color: "#fff" }}>
                50+
              </div>
            </div>
            <div className="h-4 w-px bg-[var(--border)]" />
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-current" style={{ color: "var(--accent-amber)" }} />))}
              </div>
              <span className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>4.9</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>· trusted by founders</span>
            </div>
          </motion.div>

          {/* Availability chip */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
            <div className="tag-chip inline-flex items-center gap-1.5 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#10b981" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10b981" }} />
              </span>
              <Sparkles className="h-3 w-3" />
              Accepting new projects · Q2 openings
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="big-heading mb-7 relative"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            We design,<br />
            build &amp; launch<br />
            <span className="relative inline-block">
              <span className="gradient-text italic font-serif" style={{ fontWeight: 500 }}>your website</span>
              <svg className="absolute left-0 right-0 -bottom-2 w-full" height="12" viewBox="0 0 400 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9C80 3 160 3 240 6C320 9 380 8 398 4" stroke="url(#underline-grad)" strokeWidth="2.5" strokeLinecap="round" />
                <defs><linearGradient id="underline-grad" x1="0" y1="0" x2="400" y2="0">
                  <stop offset="0%" stopColor="#0052cc" /><stop offset="100%" stopColor="#06b6d4" />
                </linearGradient></defs>
              </svg>
            </span>
            <span className="text-[#06b6d4]">.</span>
          </motion.h1>

          <motion.p className="text-base md:text-lg mb-8 leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Enterprise-grade iOS, Android &amp; web platforms, hand-crafted by senior engineers. Starting at{" "}
            <span className="font-serif italic font-semibold" style={{ color: "var(--primary)" }}>₹49,999</span>. Trusted by 50+ companies across industries.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
              className="btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(135deg, #06b6d4, #0052cc)" }} />
            </a>
            <a href="#services" className="btn-secondary group">
              <span className="flex items-center justify-center h-6 w-6 rounded-full transition-transform group-hover:scale-110"
                style={{ background: "var(--primary)" }}>
                <Play className="h-3 w-3 text-white fill-current ml-0.5" />
              </span>
              <span>Watch 90s demo</span>
              <span className="text-[10px] font-bold" style={{ color: "var(--text-muted)" }}>· 1:24</span>
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div className="flex items-center gap-5 mb-12 flex-wrap"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
            {["Free consultation", "Zero upfront cost", "Ships in 30 days"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: "#10b981" }} />
                <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats — with counting animation */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 pt-8 relative gap-y-6"
            style={{ borderTop: "1px solid var(--border)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={"relative px-1 " + (i > 0 ? "md:pl-5" : "")}
                style={i > 0 && i < stats.length ? { borderLeft: "1px solid var(--border)" } : {}}>
                <span className="section-num">0{i + 1}</span>
                <div className="font-serif text-3xl md:text-4xl font-semibold mt-2"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  {stat.value === "200+" && <><Counter to={200} delay={0.6} />+</>}
                  {stat.value === "50+" && <><Counter to={50} delay={0.7} />+</>}
                  {stat.value === "24/7" && "24/7"}
                  {stat.value === "4.9" && "4.9"}
                </div>
                <div className="text-[10px] mt-1.5 uppercase tracking-[0.15em] font-bold" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </div>
                <div className="text-[10px] mt-1 italic font-serif" style={{ color: "var(--primary)" }}>
                  {stat.growth}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Video showcase */}
        <motion.div className="md:col-span-6 lg:col-span-6 relative hidden md:block"
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <div className="relative h-[620px]">
            {/* Decorative dashed arc */}
            <svg className="absolute -top-8 -right-8 w-40 h-40 opacity-30" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="var(--primary)" strokeWidth="1" strokeDasharray="2 5" />
            </svg>

            {/* Corner plus marks */}
            <span className="absolute -top-3 -right-3 text-3xl font-thin opacity-40 z-10" style={{ color: "var(--primary)" }}>+</span>
            <span className="absolute -bottom-3 -left-3 text-3xl font-thin opacity-40 z-10" style={{ color: "var(--primary)" }}>+</span>

            {/* MAIN video tile — styled as a browser window */}
            <motion.div className="absolute top-6 right-0 w-[92%] h-[72%] rounded-xl overflow-hidden bg-white"
              style={{ boxShadow: "0 40px 80px -20px rgba(10,22,40,0.4), 0 0 0 1px rgba(10,22,40,0.06)" }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}>
              {/* Browser chrome */}
              <div className="h-10 flex items-center gap-2 px-4 border-b"
                style={{ background: "#f8fafc", borderColor: "var(--border)" }}>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-md bg-white border border-[var(--border)] min-w-[180px] justify-center"
                    style={{ color: "var(--text-muted)" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-[10px]">glosmate.tech/build</span>
                  </div>
                </div>
                <div className="w-10" />
              </div>

              {/* Video content */}
              <div className="relative" style={{ height: "calc(100% - 40px)" }}>
                <video autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=90">
                  <source src="/7308108-hd_1920_1080_24fps.mp4" type="video/mp4" />
                </video>
                {/* Very subtle wash so it doesn't look sterile but colors stay intact */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 0%, transparent 60%, rgba(10,22,40,0.45) 100%)" }} />

                {/* LIVE badge (top-left of video area) */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">Live Demo</span>
                </div>

                {/* Timecode (top-right) */}
                <div className="absolute top-4 right-4 bg-black/55 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 font-mono text-[10px] font-bold tracking-wider text-white">
                  {timecode} / 01:24
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="h-px w-8 bg-[#06b6d4]" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#06b6d4]">How we work</p>
                      </div>
                      <p className="font-serif text-xl text-white font-medium leading-snug"
                        style={{ letterSpacing: "-0.01em", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                        From blank canvas<br />to launched website.
                      </p>
                    </div>
                    <button aria-label="Play full demo"
                      className="h-12 w-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                      style={{ boxShadow: "0 12px 28px rgba(0,0,0,0.35)", color: "var(--primary)" }}>
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating metric card — top-left
            <motion.div className="absolute top-0 left-0 bg-white rounded-2xl p-5 w-[240px] z-20"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.25)", border: "1px solid var(--border)" }}
              animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                  This Quarter
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded" style={{ color: "#10b981", background: "rgba(16,185,129,0.1)" }}>
                  <TrendingUp className="h-3 w-3" />+28%
                </div>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="font-serif text-4xl font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
                  <Counter to={47} delay={0.8} />
                </span>
                <span className="text-xs pb-1.5" style={{ color: "var(--text-muted)" }}>projects shipped</span>
              </div>
              <svg width="100%" height="36" viewBox="0 0 220 36" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark-fill-hero" x1="0" y1="0" x2="0" y2="36">
                    <stop offset="0%" stopColor="#0052cc" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0052cc" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 28 L30 23 L55 25 L85 15 L115 18 L145 9 L175 11 L205 5 L220 3 L220 36 L0 36 Z" fill="url(#spark-fill-hero)" />
                <path d="M0 28 L30 23 L55 25 L85 15 L115 18 L145 9 L175 11 L205 5 L220 3"
                  stroke="#0052cc" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="220" cy="3" r="3" fill="#0052cc" />
                <motion.circle cx="220" cy="3" r="7" fill="#0052cc" fillOpacity="0.2"
                  animate={{ r: [4, 10, 4], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }} />
              </svg>
              <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="text-[10px] font-semibold" style={{ color: "var(--text-muted)" }}>vs. last quarter</span>
                <span className="text-[10px] font-bold font-mono" style={{ color: "var(--text-primary)" }}>+10 shipped</span>
              </div>
            </motion.div> */}

            {/* Floating rating card — bottom-right */}
            <motion.div className="absolute bottom-0 right-[-10px] bg-white rounded-2xl p-4 flex items-center gap-3 w-[250px] z-20"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.25)", border: "1px solid var(--border)" }}
              animate={{ y: [0, 10, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
              <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 relative"
                style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)" }}>
                <Star className="h-6 w-6 fill-current" style={{ color: "#f59e0b" }} />
                <motion.span className="absolute inset-0 rounded-xl"
                  style={{ boxShadow: "0 0 0 0 rgba(245,158,11,0.6)" }}
                  animate={{ boxShadow: ["0 0 0 0 rgba(245,158,11,0.6)", "0 0 0 12px rgba(245,158,11,0)"] }}
                  transition={{ duration: 2, repeat: Infinity }} />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-2xl font-semibold leading-none" style={{ color: "var(--text-primary)" }}>4.9</span>
                  <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>/5</span>
                </div>
                <div className="flex gap-0.5 mt-1 mb-1">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-2.5 w-2.5 fill-current" style={{ color: "#f59e0b" }} />))}
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                  200+ verified reviews
                </p>
              </div>
            </motion.div>

            {/* Small badge — middle-right */}
            <motion.div className="absolute top-[48%] right-[-16px] z-20"
              animate={{ rotate: [0, 6, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center relative"
                style={{ boxShadow: "0 16px 32px rgba(0,82,204,0.3)", border: "1px solid var(--border)" }}>
                <div className="h-11 w-11 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0052cc, #06b6d4)" }}>
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Code snippet chip — bottom-left */}
            <motion.div className="absolute bottom-[12%] left-[-8px] bg-[#0a1628] rounded-xl px-4 py-3 flex items-center gap-3 z-20 font-mono"
              style={{ boxShadow: "0 20px 40px rgba(10,22,40,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
              animate={{ x: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <Code2 className="h-4 w-4 text-[#06b6d4]" />
              <div className="flex gap-1 text-[11px]">
                <span className="text-[#a78bfa]">const</span>
                <span className="text-white">site</span>
                <span className="text-[#64748b]">=</span>
                <span className="text-[#06b6d4]">launch</span>
                <span className="text-white">()</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee — now with category tags */}
      <div className="relative z-20 pb-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 pt-6 mb-4 flex items-center gap-4">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: "var(--primary)" }} />
          <p className="text-xs uppercase tracking-[0.22em] font-bold" style={{ color: "var(--text-muted)" }}>
            Technology Stack · 10+ Frameworks
          </p>
          <div className="h-px flex-1" style={{ background: "var(--border)" }} />
        </div>
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)" }}>
          <div className="marquee-track gap-3">
            {[...techs, ...techs].map((t, i) => (
              <div key={i} className="inline-flex items-center gap-2 mx-2 px-3.5 py-1.5 rounded-full bg-white border"
                style={{ borderColor: "var(--border)" }}>
                <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                  style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>{t.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}