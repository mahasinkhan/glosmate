"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, DollarSign, Clock, Shield, Volume2, VolumeX, Maximize2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { num: "01", icon: Zap, label: "Speed", title: "Rapid Delivery",
    description: "Agile methodology ensures on-time delivery without ever compromising on engineering quality." },
  { num: "02", icon: DollarSign, label: "Value", title: "Cost-Effective",
    description: "Enterprise-quality craftsmanship at the most competitive pricing across the Indian market." },
  { num: "03", icon: Clock, label: "Support", title: "24/7 Support",
    description: "Round-the-clock technical support and proactive maintenance for every client engagement." },
  { num: "04", icon: Shield, label: "Security", title: "Secure by Design",
    description: "Enterprise-grade security and data protection baked into every product from day one." },
];

export default function WhyChooseUs() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!headingRef.current) return;
    gsap.fromTo(headingRef.current, { backgroundPositionX: "0%" },
      { backgroundPositionX: "100%",
        scrollTrigger: { trigger: headingRef.current, start: "top 80%", end: "bottom 20%", scrub: 1 },
        ease: "none" });
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const requestFullscreen = () => {
    if (videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen();
  };

  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      {/* Soft ambient background */}
      <div className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(180deg, #f6f9fc 0%, #ffffff 100%)" }} />
      <div className="absolute inset-0 dot-bg opacity-30 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 ref={headingRef} className="big-heading mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)",
                background: "linear-gradient(135deg, #0a1628 30%, #0052cc 60%, #06b6d4 100%)",
                backgroundSize: "200%", WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Built for growth,<br />trusted by leaders.
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            We combine deep technical mastery with genuine business understanding — delivering products that don't just launch, but perform at scale.
          </motion.p>
        </div>

        {/* Hero cinematic video — full-width showcase */}
        <motion.div className="relative mb-16 group"
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1 }}>
          {/* Decorative frame marks */}
          <span className="absolute -top-3 -left-3 text-2xl font-thin opacity-50 z-10" style={{ color: "var(--primary)" }}>+</span>
          <span className="absolute -top-3 -right-3 text-2xl font-thin opacity-50 z-10" style={{ color: "var(--primary)" }}>+</span>
          <span className="absolute -bottom-3 -left-3 text-2xl font-thin opacity-50 z-10" style={{ color: "var(--primary)" }}>+</span>
          <span className="absolute -bottom-3 -right-3 text-2xl font-thin opacity-50 z-10" style={{ color: "var(--primary)" }}>+</span>

          <div className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 40px 80px -20px rgba(10, 22, 40, 0.35)", border: "1px solid rgba(255,255,255,0.8)" }}>
            {/* The video */}
            <video ref={videoRef} autoPlay muted loop playsInline
              className="w-full h-[520px] md:h-[600px] object-cover"
              poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85">
              <source src="/Person_working_beside_202604182149.mp4" type="video/mp4" />
            </video>

            {/* Subtle cinematic vignette — keeps the natural colors of your video visible */}
            <div className="absolute inset-0 pointer-events-none z-[1]"
              style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,22,40,0.25) 100%)" }} />
            {/* Bottom gradient for text legibility */}
            <div className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none z-[1]"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.3) 50%, transparent 100%)" }} />
            {/* Top subtle gradient for badge legibility */}
            <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-[1]"
              style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.4) 0%, transparent 100%)" }} />

            {/* Top-left: Live badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">Live</span>
              </div>
              <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Our Culture</span>
              </div>
            </div>

            {/* Top-right: Video controls */}
            <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
              <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}
                className="h-10 w-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:bg-white hover:text-[var(--primary)]"
                style={{ color: "#fff" }}>
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <button onClick={requestFullscreen} aria-label="Fullscreen"
                className="h-10 w-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:bg-white hover:text-[var(--primary)]"
                style={{ color: "#fff" }}>
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            {/* Bottom content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-12 bg-[#06b6d4]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#06b6d4]">
                      The Glosmate Philosophy
                    </span>
                  </div>
                  <p className="font-serif italic text-2xl md:text-4xl text-white leading-tight mb-4"
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                    "Great work happens when minds are clear, focus is undisturbed, and craftsmanship is the quiet discipline."
                  </p>
                  <p className="text-white/85 text-sm md:text-base max-w-2xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    We believe in building with intention — where calm focus meets deep technical expertise to ship products that genuinely matter.
                  </p>
                </div>

                {/* Mini stats pillar */}
                <div className="md:col-span-4 flex md:flex-col gap-6 md:gap-4 md:items-end md:text-right">
                  <div>
                    <p className="font-serif text-4xl md:text-5xl font-semibold text-white leading-none"
                      style={{ letterSpacing: "-0.03em", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                      200+
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mt-2">
                      Projects Shipped
                    </p>
                  </div>
                  <div className="hidden md:block h-px w-16 bg-white/25 ml-auto" />
                  <div>
                    <p className="font-serif text-4xl md:text-5xl font-semibold text-white leading-none"
                      style={{ letterSpacing: "-0.03em", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                      4.9<span className="text-xl text-white/70">/5</span>
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mt-2">
                      Client Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating quote card — extends below video on desktop */}
          <motion.div className="hidden lg:block absolute -bottom-8 left-8 bg-white rounded-2xl px-6 py-4 flex items-center gap-4 z-20"
            style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.25)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex items-center gap-4" style={{ borderLeft: "1px solid var(--border)", paddingLeft: "1rem" }}>
              <div>
                <p className="font-serif text-sm font-semibold leading-none" style={{ color: "var(--text-primary)" }}>
                  Trusted by 50+ teams
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-1.5" style={{ color: "var(--text-muted)" }}>
                  Across 12 industries
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Four-pillar reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div key={reason.title} className="card-clean p-7 flex flex-col gap-4 relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />

                <div className="flex items-center justify-between">
                  <span className="section-num">{reason.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                    {reason.label}
                  </span>
                </div>
                <div className="icon-box">
                  <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}