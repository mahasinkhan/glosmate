"use client";
import { motion } from "framer-motion";
import { Award, FileText, RefreshCw, Shield } from "lucide-react";

const guarantees = [
  { icon: Award, title: "30-Day Money-Back", description: "If you're not happy with the first milestone, full refund. No questions." },
  { icon: FileText, title: "NDA-First", description: "We sign NDAs before any detailed discussion. Your ideas stay yours." },
  { icon: RefreshCw, title: "Unlimited Revisions", description: "Within scope, as many revisions as you need to get it exactly right." },
  { icon: Shield, title: "100% Code Ownership", description: "On final payment, all code, IP, and assets transfer to you. Forever." },
];

export default function FeaturesGuarantees() {
  return (
    <section className="relative py-28 px-6 section-white overflow-hidden">
      {/* Decorative SVG */}
      <svg className="absolute top-1/2 -translate-y-1/2 left-10 w-48 h-48 opacity-[0.06] hidden md:block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="#0052cc" strokeWidth="1" strokeDasharray="2 4" />
        <path d="M30 50 L45 65 L70 35" stroke="#0052cc" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">Our Guarantees</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Commitments, not<br />
              <span className="gradient-text italic font-serif">marketing copy.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Every promise below is written into our standard contract. We stand behind every word.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div key={g.title} className="card-clean p-7 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />
                <div className="relative h-14 w-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(0,82,204,0.1), rgba(6,182,212,0.1))", border: "1px solid rgba(0,82,204,0.15)" }}>
                  <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: "#10b981" }}>
                    ✓
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {g.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {g.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}