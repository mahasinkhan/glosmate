"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function PortfolioTestimonial() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.15]"
        poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/3196284/3196284-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,249,252,0.95) 100%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl mb-8"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))",
              boxShadow: "0 16px 36px -8px rgba(0,82,204,0.4)",
            }}>
            <Quote className="h-7 w-7 text-white fill-current" />
          </div>

          <p className="font-serif text-3xl md:text-5xl font-medium mb-10 leading-[1.15]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            Every project ships with <span className="italic gradient-text">one common thread</span> — the same team, the same care, from first conversation to production launch.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#f59e0b" }} />
              ))}
            </div>
            <div className="h-6 w-px" style={{ background: "var(--border)" }} />
            <p className="font-serif italic text-lg" style={{ color: "var(--text-secondary)" }}>
              4.9/5 from 200+ reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}