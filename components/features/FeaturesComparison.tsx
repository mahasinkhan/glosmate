"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type FeatureValue = boolean | "sometimes";

type Comparison = {
  feature: string;
  glosmate: FeatureValue;
  agency: FeatureValue;
  freelance: FeatureValue;
};

const comparisons: Comparison[] = [
  { feature: "Senior engineers on every project", glosmate: true, agency: false, freelance: "sometimes" },
  { feature: "Fixed-price quotes, no surprise invoices", glosmate: true, agency: false, freelance: true },
  { feature: "Weekly demos & full transparency", glosmate: true, agency: "sometimes", freelance: false },
  { feature: "Code ownership transferred at launch", glosmate: true, agency: "sometimes", freelance: true },
  { feature: "Post-launch support included", glosmate: true, agency: false, freelance: false },
  { feature: "Design + Engineering in one team", glosmate: true, agency: true, freelance: false },
  { feature: "Enterprise-grade security audits", glosmate: true, agency: "sometimes", freelance: false },
  { feature: "Replies within 4 business hours", glosmate: true, agency: false, freelance: "sometimes" },
];

function Cell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="h-7 w-7 rounded-full flex items-center justify-center"
          style={{ background: "rgba(16,185,129,0.12)" }}>
          <Check className="h-4 w-4" style={{ color: "#059669" }} />
        </div>
      </div>
    );
  }
  if (value === "sometimes") {
    return (
      <div className="flex justify-center">
        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
          style={{ background: "rgba(245,158,11,0.12)", color: "#d97706" }}>
          Sometimes
        </span>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="h-7 w-7 rounded-full flex items-center justify-center"
        style={{ background: "rgba(239,68,68,0.08)" }}>
        <X className="h-4 w-4" style={{ color: "#dc2626" }} />
      </div>
    </div>
  );
}

export default function FeaturesComparison() {
  return (
    <section className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">Why Glosmate</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              The honest<br />
              <span className="gradient-text italic font-serif">comparison.</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Here's how we actually stack up against the alternatives — no marketing spin.
            </p>
          </motion.div>
        </div>

        <motion.div className="rounded-2xl overflow-hidden"
          style={{ background: "#fff", border: "1px solid var(--border)", boxShadow: "0 24px 48px -12px rgba(10,22,40,0.08)" }}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          {/* Header row */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] p-5 md:p-6"
            style={{ background: "linear-gradient(135deg, rgba(0,82,204,0.04) 0%, rgba(6,182,212,0.02) 100%)", borderBottom: "1px solid var(--border)" }}>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
              Feature
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 font-serif text-sm md:text-base font-semibold" style={{ color: "var(--primary)" }}>
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--primary)" }} />
                Glosmate
              </div>
            </div>
            <div className="text-center">
              <span className="font-serif text-sm md:text-base font-semibold" style={{ color: "var(--text-secondary)" }}>Big Agency</span>
            </div>
            <div className="text-center">
              <span className="font-serif text-sm md:text-base font-semibold" style={{ color: "var(--text-secondary)" }}>Freelancer</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, idx) => (
            <motion.div key={row.feature}
              className="grid grid-cols-[1.5fr_1fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] px-5 md:px-6 py-4 items-center"
              style={{ borderBottom: idx < comparisons.length - 1 ? "1px solid var(--border)" : "none",
                background: idx % 2 === 1 ? "rgba(246,249,252,0.5)" : "transparent" }}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }}>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{row.feature}</p>
              <Cell value={row.glosmate} />
              <Cell value={row.agency} />
              <Cell value={row.freelance} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}