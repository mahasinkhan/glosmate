"use client";
import { motion } from "framer-motion";

const clientLogos = [
  "Meridian", "LearnLoop", "PayFlow", "Verdant", "CalmMind", "TutorDesk",
  "Axiom", "Lumen", "Northwind", "Helio", "Kairos", "Stellar",
];

export default function PortfolioLogos() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "#f6f9fc" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-10" style={{ background: "var(--primary)" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--primary)" }}>Trusted By</span>
            <span className="h-px w-10" style={{ background: "var(--primary)" }} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
            50+ companies, <span className="gradient-text italic">worldwide.</span>
          </h2>
        </motion.div>

        {/* Logo grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          {clientLogos.map((name, i) => (
            <motion.div key={name}
              className="aspect-[2/1] rounded-xl bg-white flex items-center justify-center transition-all hover:-translate-y-1 group"
              style={{ border: "1px solid var(--border)", boxShadow: "0 2px 8px rgba(10,22,40,0.03)" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ boxShadow: "0 12px 28px -8px rgba(0,82,204,0.15)" }}>
              <span className="font-serif text-lg font-semibold transition-colors group-hover:text-[var(--primary)]"
                style={{ color: "var(--text-secondary)", letterSpacing: "-0.01em" }}>
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p className="text-center mt-10 text-sm font-serif italic"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          … and many more under NDA.
        </motion.p>
      </div>
    </section>
  );
}