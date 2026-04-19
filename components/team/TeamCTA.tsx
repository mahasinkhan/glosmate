"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export default function TeamCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80">
        <source src="/Young_professionals_walking_202604190951.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(135deg, rgba(0,82,204,0.92) 0%, rgba(0,61,153,0.95) 60%, rgba(6,182,212,0.82) 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-20 z-[2]" />

      <svg className="absolute top-10 left-10 w-48 h-48 opacity-15 z-[3]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">Let's meet the team</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6"
            style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Pick a time.<br />
            <span className="italic font-normal">We'll bring coffee.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto mb-10">
            Whether you're shipping your first product or your fiftieth — let's talk. No pitch, just a real conversation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-white transition-all hover:scale-105"
              style={{ color: "var(--primary)", boxShadow: "0 12px 36px -8px rgba(0,0,0,0.25)" }}>
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:glosmatetech@gmail.com"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full border border-white/30 text-white transition-all hover:bg-white/10">
              <Calendar className="h-5 w-5" /> Book a call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}