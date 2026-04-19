"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Volume2, VolumeX, Maximize2, Sparkles, Code2, Clock, Coffee } from "lucide-react";

export default function FeaturesHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [timecode, setTimecode] = useState("00:03");

  useEffect(() => {
    let seconds = 3;
    const id = setInterval(() => {
      seconds = (seconds + 1) % 145;
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      setTimecode(`${m}:${s}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const openFullscreen = () => {
    if (videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen();
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-24 pb-10" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%)" }}>
      {/* Ambient decorations */}
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-[10%] left-[-200px] w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052cc 0%, transparent 70%)" }} />
      <div className="absolute bottom-[5%] right-[-150px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }} />

      {/* Editorial corner marks */}
      <div className="absolute top-28 left-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="h-px w-10" style={{ background: "var(--primary)" }} />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>The Features</span>
      </div>
      <div className="absolute top-28 right-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>Ch. 01 — Capability</span>
        <span className="h-px w-10" style={{ background: "var(--primary)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        {/* Top headline block — centered editorial intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="tag-chip inline-flex items-center gap-1.5 mb-6">
              <Sparkles className="h-3 w-3" />
              What makes Glosmate different
            </div>
            <h1 className="big-heading mb-4"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}>
              Built for teams<br />
              who value{" "}
              <span className="relative inline-block">
                <span className="gradient-text italic font-serif" style={{ fontWeight: 500 }}>the craft.</span>
                <svg className="absolute left-0 right-0 -bottom-2 w-full" height="12" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9C60 3 120 3 180 6C240 9 280 8 298 4" stroke="url(#feat-underline)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs><linearGradient id="feat-underline" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#0052cc" /><stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient></defs>
                </svg>
              </span>
            </h1>
          </motion.div>

          <motion.div className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Eight core capabilities, rigorously engineered. No shortcuts, no surprises — just dependable work delivered by senior hands who care about the outcome.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#pillars" className="btn-primary group">
                Explore Features <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#workflow" className="btn-secondary">See our workflow →</a>
            </div>
          </motion.div>
        </div>

        {/* CINEMATIC VIDEO SHOWCASE */}
        <motion.div className="relative"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          {/* Editorial corner plus marks */}
          <span className="absolute -top-3 -left-3 text-2xl font-thin opacity-50 z-20" style={{ color: "var(--primary)" }}>+</span>
          <span className="absolute -top-3 -right-3 text-2xl font-thin opacity-50 z-20" style={{ color: "var(--primary)" }}>+</span>
          <span className="absolute -bottom-3 -left-3 text-2xl font-thin opacity-50 z-20" style={{ color: "var(--primary)" }}>+</span>
          <span className="absolute -bottom-3 -right-3 text-2xl font-thin opacity-50 z-20" style={{ color: "var(--primary)" }}>+</span>

          <div className="relative rounded-2xl overflow-hidden group"
            style={{ boxShadow: "0 50px 100px -20px rgba(10,22,40,0.4), 0 0 0 1px rgba(10,22,40,0.06)" }}>
            {/* Video */}
            <video ref={videoRef} autoPlay muted loop playsInline
              className="w-full h-[420px] md:h-[560px] object-cover"
              poster="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1600&q=85">
              <source src="/Man_typing_on_202604190931.mp4" type="video/mp4" />
            </video>

            {/* Subtle cinematic vignette — preserves morning sunlight warmth */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(10,22,40,0.35) 100%)" }} />
            {/* Bottom gradient for legibility */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.4) 50%, transparent 100%)" }} />
            {/* Top subtle gradient for badges */}
            <div className="absolute inset-x-0 top-0 h-28 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.5) 0%, transparent 100%)" }} />

            {/* TOP-LEFT: LIVE + chapter */}
            <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
              <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">Live</span>
              </div>
              <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">In the Field · A Day in Focus</span>
              </div>
            </div>

            {/* TOP-RIGHT: Video controls */}
            <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
              <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 font-mono text-[10px] font-bold tracking-wider text-white">
                {timecode} / 02:24
              </div>
              <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}
                className="h-9 w-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:bg-white hover:text-[var(--primary)]"
                style={{ color: "#fff" }}>
                {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
              <button onClick={openFullscreen} aria-label="Fullscreen"
                className="h-9 w-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:bg-white hover:text-[var(--primary)]"
                style={{ color: "#fff" }}>
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* MIDDLE: ambient floating metrics bar (hidden on hover for cleanness) */}
            <div className="absolute top-[45%] left-5 hidden md:flex flex-col gap-2 z-10 transition-opacity group-hover:opacity-0">
              <div className="bg-white/12 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                <Clock className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">6 hrs deep work</span>
              </div>
              <div className="bg-white/12 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                <Coffee className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Three cups</span>
              </div>
              <div className="bg-white/12 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-2">
                <Code2 className="h-3 w-3 text-white" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">2,400 lines shipped</span>
              </div>
            </div>

            {/* BOTTOM: headline quote + play */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-9">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-10 bg-[#06b6d4]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#06b6d4]">
                      Our Craft, On Record
                    </span>
                  </div>
                  <p className="font-serif italic text-2xl md:text-4xl text-white leading-[1.15] mb-2"
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                    "Calm hands,<br />steady code,<br />honest work."
                  </p>
                </div>
                <div className="md:col-span-3 flex md:justify-end">
                  <motion.button aria-label="Play full video"
                    className="h-14 w-14 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                    style={{ boxShadow: "0 16px 36px rgba(0,0,0,0.4)", color: "var(--primary)" }}
                    animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2.4, repeat: Infinity }}>
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom metric strip — on a floating bar below the video */}
          <div className="relative z-20 -mt-8 mx-4 md:mx-12">
            <div className="rounded-2xl bg-white p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.18)", border: "1px solid var(--border)" }}>
              {[
                { num: "01", value: "98%", label: "On-time delivery" },
                { num: "02", value: "< 4h", label: "Average reply" },
                { num: "03", value: "30d", label: "Ship standard" },
                { num: "04", value: "100%", label: "Code ownership" },
              ].map((m, i) => (
                <div key={m.num} className={"flex flex-col " + (i > 0 ? "md:pl-6" : "")}
                  style={i > 0 ? { borderLeft: "1px solid var(--border)" } : {}}>
                  <span className="section-num">{m.num}</span>
                  <span className="font-serif text-3xl font-semibold mt-1" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                    {m.value}
                  </span>
                  <span className="text-[10px] mt-1 uppercase tracking-[0.15em] font-bold" style={{ color: "var(--text-muted)" }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}