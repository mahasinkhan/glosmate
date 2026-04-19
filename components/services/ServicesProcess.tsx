"use client";
import { motion } from "framer-motion";
import { MessagesSquare, Pencil, Code2, Rocket, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: MessagesSquare, title: "Discover", description: "Deep-dive workshop to understand your goals, users, and constraints.", duration: "2-3 days" },
  { num: "02", icon: Pencil, title: "Design", description: "Wireframes, prototypes, and pixel-perfect designs you sign off on.", duration: "1-2 weeks" },
  { num: "03", icon: Code2, title: "Build", description: "Engineering sprints with weekly demos and full transparency.", duration: "4-8 weeks" },
  { num: "04", icon: Rocket, title: "Launch", description: "Production deployment with zero-downtime rollout and monitoring.", duration: "3-5 days" },
  { num: "05", icon: Headphones, title: "Support", description: "Lifetime maintenance, iteration, and 24/7 technical support.", duration: "Ongoing" },
];

export default function ServicesProcess() {
  return (
    <section className="relative py-28 px-6 section-gray overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />

      {/* Decorative SVG wave */}
      <svg className="absolute top-0 left-0 w-full h-20 opacity-40" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="white" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">Our Process</span>
            <h2 className="big-heading mb-5 mx-auto" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              A proven path from<br />
              <span className="gradient-text italic font-serif">idea to impact.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Five stages. Zero surprises. Full transparency at every step.
            </p>
          </motion.div>
        </div>

        {/* Horizontal timeline with connecting SVG line */}
        <div className="relative">
          {/* Animated dotted path behind steps (desktop) */}
          <svg className="absolute top-10 left-0 w-full h-4 hidden lg:block" viewBox="0 0 1200 20" preserveAspectRatio="none" fill="none">
            <line x1="0" y1="10" x2="1200" y2="10" stroke="#0052cc" strokeWidth="2" strokeDasharray="6 8" opacity="0.3" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.num} className="relative"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                  {/* Step node */}
                  <div className="relative h-20 w-20 rounded-full bg-white flex items-center justify-center mx-auto mb-6"
                    style={{ boxShadow: "0 12px 28px rgba(0,82,204,0.15)", border: "1px solid var(--border)" }}>
                    <div className="h-14 w-14 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))" }}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white flex items-center justify-center text-[11px] font-bold font-serif"
                      style={{ border: "1px solid var(--border)", color: "var(--primary)" }}>
                      {step.num}
                    </span>
                  </div>

                  <div className="text-center">
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                      {step.description}
                    </p>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                      {step.duration}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}