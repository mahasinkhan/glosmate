"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Volume2, VolumeX, Maximize2, Sparkles, MapPin, Users } from "lucide-react";

export default function TeamHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [timecode, setTimecode] = useState("00:04");

  useEffect(() => {
    let seconds = 4;
    const id = setInterval(() => {
      seconds = (seconds + 1) % 95;
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
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-24 pb-10"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%)" }}>
      {/* Ambient decorations */}
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute top-[12%] right-[-200px] w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }} />
      <div className="absolute bottom-[8%] left-[-150px] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052cc 0%, transparent 70%)" }} />

      {/* Editorial corner marks */}
      <div className="absolute top-28 left-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="h-px w-10" style={{ background: "var(--primary)" }} />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>The Humans</span>
      </div>
      <div className="absolute top-28 right-6 hidden md:flex items-center gap-2 pointer-events-none z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--primary)" }}>Ch. 03 — Team</span>
        <span className="h-px w-10" style={{ background: "var(--primary)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        {/* Intro block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="tag-chip inline-flex items-center gap-1.5 mb-6">
              <Users className="h-3 w-3" />
              Meet the team
            </div>
            <h1 className="big-heading mb-4" style={{ fontSize: "clamp(2.8rem, 7vw, 5.2rem)" }}>
              Senior hands.<br />
              <span className="relative inline-block">
                <span className="gradient-text italic font-serif" style={{ fontWeight: 500 }}>Honest hearts.</span>
                <svg className="absolute left-0 right-0 -bottom-2 w-full" height="12" viewBox="0 0 320 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9C60 3 130 3 200 6C260 9 300 8 318 4" stroke="url(#team-underline)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs><linearGradient id="team-underline" x1="0" y1="0" x2="320" y2="0">
                    <stop offset="0%" stopColor="#0052cc" /><stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient></defs>
                </svg>
              </span>
            </h1>
          </motion.div>
          <motion.div className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              A small, senior team based in Kolkata — shipping products for founders, CTOs, and leaders across twelve industries. No juniors. No middlemen. Just people who care.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#members" className="btn-primary group">
                Meet everyone <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#open-roles" className="btn-secondary">We're hiring →</a>
            </div>
          </motion.div>
        </div>

        {/* CINEMATIC VIDEO — the walking team */}
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
              className="w-full h-[460px] md:h-[600px] object-cover"
              poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85">
              <source src="/Young_professionals_walking_202604190951.mp4" type="video/mp4" />
            </video>

            {/* Soft vignette — preserves the warm morning sunlight */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,22,40,0.3) 100%)" }} />
            {/* Bottom gradient for legibility */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.4) 50%, transparent 100%)" }} />
            {/* Top subtle gradient */}
            <div className="absolute inset-x-0 top-0 h-28 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.4) 0%, transparent 100%)" }} />

            {/* TOP-LEFT: Live + scene label */}
            <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
              <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">Live</span>
              </div>
              <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Morning · Outside HQ</span>
              </div>
            </div>

            {/* TOP-RIGHT: Video controls */}
            <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
              <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 font-mono text-[10px] font-bold tracking-wider text-white">
                {timecode} / 01:32
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

            {/* BOTTOM: headline + meta */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-10 bg-[#06b6d4]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#06b6d4]">
                      Chapter Three · The People
                    </span>
                  </div>
                  <p className="font-serif italic text-2xl md:text-5xl text-white leading-[1.1] mb-3"
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)", letterSpacing: "-0.02em" }}>
                    "Small team.<br />
                    Big standards.<br />
                    Warm together."
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" style={{ color: "#06b6d4" }} />
                      <span className="text-xs text-white/80 font-medium">Kolkata, India</span>
                    </div>
                    <div className="h-3 w-px bg-white/20" />
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5" style={{ color: "#06b6d4" }} />
                      <span className="text-xs text-white/80 font-medium">12 teammates</span>
                    </div>
                    <div className="h-3 w-px bg-white/20" />
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5" style={{ color: "#06b6d4" }} />
                      <span className="text-xs text-white/80 font-medium">Remote-friendly</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <motion.button aria-label="Play full film"
                    className="h-14 w-14 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                    style={{ boxShadow: "0 16px 36px rgba(0,0,0,0.4)", color: "var(--primary)" }}
                    animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2.4, repeat: Infinity }}>
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating meta bar — overlaps the bottom of the video */}
          <div className="relative z-20 -mt-8 mx-4 md:mx-12">
            <div className="rounded-2xl bg-white p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
              style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.18)", border: "1px solid var(--border)" }}>
              {[
                { num: "01", value: "12", label: "Team members" },
                { num: "02", value: "8+", label: "Average years exp." },
                { num: "03", value: "4", label: "Time zones" },
                { num: "04", value: "100%", label: "Senior engineers" },
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