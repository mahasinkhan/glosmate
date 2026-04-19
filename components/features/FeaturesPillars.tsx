"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Gauge, Users, Code2, Rocket, Eye, Heart } from "lucide-react";

const pillars = [
  { num: "01", icon: Zap, title: "Rapid Delivery", description: "Agile sprints with weekly demos. We ship in 30 days, not 300.", accent: "#0052cc" },
  { num: "02", icon: Shield, title: "Enterprise Security", description: "Zero-trust architecture, encrypted data, audited access patterns.", accent: "#0052cc" },
  { num: "03", icon: Gauge, title: "Performance-first", description: "Core Web Vitals 95+. Sub-second load times. Tuned for real users.", accent: "#06b6d4" },
  { num: "04", icon: Users, title: "Dedicated Team", description: "Senior engineers only. No junior handoffs. No agency middlemen.", accent: "#06b6d4" },
  { num: "05", icon: Code2, title: "Clean Codebase", description: "Readable, typed, documented. Code your next engineer will thank you for.", accent: "#0052cc" },
  { num: "06", icon: Rocket, title: "Scalable Architecture", description: "Built to handle 10x growth without a rewrite. Cloud-native from day one.", accent: "#0052cc" },
  { num: "07", icon: Eye, title: "Full Transparency", description: "Real-time project board. No status meetings. You see every commit.", accent: "#06b6d4" },
  { num: "08", icon: Heart, title: "Genuine Care", description: "We treat your product like our own. Because craftsmanship can't be faked.", accent: "#06b6d4" },
];

export default function FeaturesPillars() {
  return (
    <section id="pillars" className="relative py-28 px-6 overflow-hidden" style={{ background: "#f6f9fc" }}>
      <div className="absolute inset-0 dot-bg opacity-30" />

      {/* Decorative SVG blobs */}
      <svg className="absolute top-20 right-10 w-64 h-64 opacity-[0.08] hidden md:block" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="#0052cc" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="60" stroke="#0052cc" strokeWidth="1" strokeDasharray="3 5" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">The Eight Pillars</span>
            <h2 className="big-heading mb-4 mx-auto" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Everything we stand for,<br />
              <span className="gradient-text italic font-serif">in eight pillars.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              These aren't marketing claims — they're commitments we make to every client, documented in every contract.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.num} className="card-clean p-6 flex flex-col gap-4 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06 }}>
                {/* Gradient accent stripe on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: `linear-gradient(90deg, ${p.accent}, #06b6d4)` }} />

                {/* Decorative watermark number in background */}
                <span className="absolute top-2 right-3 font-serif text-6xl font-semibold opacity-[0.04] pointer-events-none"
                  style={{ color: p.accent }}>
                  {p.num}
                </span>

                <div className="flex items-center justify-between">
                  <span className="section-num">{p.num}</span>
                </div>
                <div className="icon-box">
                  <Icon className="h-6 w-6" style={{ color: p.accent }} />
                </div>
                <h3 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}