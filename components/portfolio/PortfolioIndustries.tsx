"use client";
import { motion } from "framer-motion";
import { ShoppingBag, HeartPulse, GraduationCap, Wallet, Building2, Hammer } from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-commerce", count: "18 projects", description: "Retail platforms, marketplaces, custom checkouts" },
  { icon: HeartPulse, name: "Healthcare", count: "12 projects", description: "Patient portals, telemedicine, EHR systems" },
  { icon: GraduationCap, name: "Education", count: "9 projects", description: "LMS, tutoring, gamified learning" },
  { icon: Wallet, name: "Fintech", count: "7 projects", description: "Payments, lending, personal finance apps" },
  { icon: Building2, name: "SaaS & B2B", count: "15 projects", description: "Dashboards, workflow tools, admin panels" },
  { icon: Hammer, name: "Construction", count: "6 projects", description: "Site management, safety training, compliance" },
];

export default function PortfolioIndustries() {
  return (
    <section id="industries" className="relative py-28 px-6 section-white overflow-hidden">
      {/* SVG circuit decoration */}
      <svg className="absolute top-10 right-10 w-64 h-64 opacity-[0.08] hidden md:block" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="4" fill="#0052cc" />
        <circle cx="40" cy="60" r="3" fill="#0052cc" />
        <circle cx="160" cy="60" r="3" fill="#0052cc" />
        <circle cx="60" cy="160" r="3" fill="#0052cc" />
        <circle cx="150" cy="150" r="3" fill="#0052cc" />
        <line x1="100" y1="100" x2="40" y2="60" stroke="#0052cc" strokeWidth="1" />
        <line x1="100" y1="100" x2="160" y2="60" stroke="#0052cc" strokeWidth="1" />
        <line x1="100" y1="100" x2="60" y2="160" stroke="#0052cc" strokeWidth="1" />
        <line x1="100" y1="100" x2="150" y2="150" stroke="#0052cc" strokeWidth="1" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">By the Industry</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Twelve industries,<br />
              <span className="gradient-text italic font-serif">one standard.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            We've shipped work across wildly different domains. The details change — our care, craft, and approach do not.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div key={ind.name} className="card-clean p-6 flex items-start gap-5 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />

                <div className="icon-box flex-shrink-0">
                  <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "var(--primary)" }}>
                    {ind.count}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}