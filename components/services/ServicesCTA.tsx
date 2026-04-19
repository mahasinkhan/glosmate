"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(135deg, rgba(0,82,204,0.92) 0%, rgba(0,61,153,0.95) 60%, rgba(6,182,212,0.85) 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-20 z-[2]" />

      {/* Decorative SVG */}
      <svg className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 z-[3]" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">Accepting new projects</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6"
            style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Ready to build<br />
            <span className="italic font-normal">something great?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10">
            Book a free 30-minute consultation. We'll review your idea, scope the work, and send you a detailed estimate.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-white transition-all hover:scale-105"
              style={{ color: "var(--primary)", boxShadow: "0 12px 36px -8px rgba(0,0,0,0.25)" }}>
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:glosmatetech@gmail.com"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full border border-white/30 text-white transition-all hover:bg-white/10">
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}