"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function ServicesTestimonial() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Your consultation image as background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Two_professionals_sitting_202604190915.png"
          alt="Two professionals in a consultation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Soft light overlay — lets the warm natural light show through */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 40%, rgba(246,249,252,0.65) 70%, rgba(246,249,252,0.55) 100%)",
        }} />

      {/* Subtle blue tint from the right to tie it to the brand */}
      <div className="absolute inset-0 z-[2]"
        style={{
          background: "linear-gradient(135deg, transparent 0%, transparent 60%, rgba(0,82,204,0.08) 100%)",
        }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial testimonial block */}
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Client Voices</span>

            {/* Quote icon badge */}
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl mb-8"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))",
                boxShadow: "0 12px 28px -8px rgba(0,82,204,0.4)",
              }}>
              <Quote className="h-6 w-6 text-white fill-current" />
            </div>

            <p className="font-serif text-2xl md:text-4xl font-medium mb-10 leading-[1.2]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              Working with Glosmate felt like having a{" "}
              <span className="italic gradient-text">senior engineering team</span>{" "}
              embedded directly in our company. They shipped faster than our in-house team ever could — with genuine care for every detail.
            </p>

            {/* Author row */}
            <div className="flex flex-wrap items-center gap-6 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white flex-shrink-0"
                  style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }}>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Priya Sharma</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: "var(--primary)" }}>
                    Founder · Meridian Health
                  </p>
                </div>
              </div>

              <div className="h-10 w-px hidden md:block" style={{ background: "var(--border)" }} />

              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#f59e0b" }} />
                  ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                  5.0 rating · 3-month engagement
                </span>
              </div>
            </div>

            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              <div>
                <p className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  6 <span className="text-lg" style={{ color: "var(--text-muted)" }}>weeks</span>
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: "var(--text-muted)" }}>
                  Time to launch
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  3.4x
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: "var(--text-muted)" }}>
                  User growth
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  <span className="gradient-text">99.9%</span>
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: "var(--text-muted)" }}>
                  Uptime hit
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating badge card to anchor the photo side */}
          <motion.div className="md:col-span-5 relative hidden md:block"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
            <div className="relative h-[400px]">
              {/* Floating "Live conversation" card — emphasizes the photo shows real consultation */}
              <motion.div className="absolute top-[15%] right-0 bg-white rounded-2xl p-5 w-[280px]"
                style={{ boxShadow: "0 24px 48px -12px rgba(10,22,40,0.22)", border: "1px solid var(--border)" }}
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                    Discovery Call
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{ color: "#10b981", background: "rgba(16,185,129,0.1)" }}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    LIVE
                  </div>
                </div>
                <p className="font-serif text-lg font-semibold mb-1" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  Free 30-min consultation
                </p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  Every project begins with a real conversation — no sales pitch, no pressure.
                </p>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex -space-x-1.5">
                    <div className="h-6 w-6 rounded-full bg-white border-2 border-white overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-6 w-6 rounded-full bg-white border-2 border-white overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold"
                      style={{ background: "var(--primary)", color: "#fff" }}>
                      +48
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                    This Month
                  </span>
                </div>
              </motion.div>

              {/* Floating metric pill bottom */}
              <motion.div className="absolute bottom-[15%] left-[10%] bg-white rounded-full py-2.5 pl-3 pr-5 flex items-center gap-3"
                style={{ boxShadow: "0 16px 36px -8px rgba(10,22,40,0.2)", border: "1px solid var(--border)" }}
                animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                <div className="h-8 w-8 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))" }}>
                  <Quote className="h-4 w-4 text-white fill-current" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    Verified Review
                  </p>
                  <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>
                    200+ five-star reviews
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: "linear-gradient(90deg, transparent 0%, var(--border) 50%, transparent 100%)" }} />
    </section>
  );
}