"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter", price: "49,999", period: "one-time",
    description: "Perfect for solo founders and small businesses.",
    features: ["Single-page website", "Responsive design", "Basic SEO setup", "2 rounds of revisions", "30-day support"],
    popular: false,
  },
  {
    name: "Growth", price: "1,49,999", period: "one-time",
    description: "Full-featured web or mobile app for growing teams.",
    features: ["Multi-page web app or MVP mobile", "Custom UI/UX design", "Backend & API", "Payment integration", "3-month support", "Analytics setup"],
    popular: true,
  },
  {
    name: "Enterprise", price: "Custom", period: "project-based",
    description: "Built for scale — dedicated team, SLAs, everything.",
    features: ["Dedicated engineering pod", "Multi-platform (iOS+Android+Web)", "Enterprise-grade security", "Custom integrations", "24/7 support & SLA", "Architecture consulting"],
    popular: false,
  },
];

export default function ServicesPricing() {
  return (
    <section id="pricing" className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] mesh-bg opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">Transparent Pricing</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Plans that grow<br />
              <span className="gradient-text italic font-serif">with your ambition.</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              No hidden fees. No surprise invoices. Pick a tier or request a custom quote.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div key={tier.name}
              className={"relative rounded-2xl p-8 flex flex-col gap-6 " + (tier.popular ? "text-white" : "")}
              style={tier.popular ? {
                background: "linear-gradient(135deg, #0052cc 0%, #003d99 60%, #06b6d4 100%)",
                boxShadow: "0 30px 60px -15px rgba(0,82,204,0.4)",
                transform: "scale(1.03)",
              } : {
                background: "#ffffff",
                border: "1px solid var(--border)",
                boxShadow: "0 10px 30px -10px rgba(10,22,40,0.08)",
              }}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl font-semibold mb-2" style={{ letterSpacing: "-0.01em" }}>{tier.name}</h3>
                <p className="text-sm" style={{ color: tier.popular ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}>
                  {tier.description}
                </p>
              </div>

              <div className="pb-6" style={{ borderBottom: tier.popular ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border)" }}>
                <div className="flex items-baseline gap-1">
                  {tier.price !== "Custom" && <span className="text-lg font-semibold" style={{ color: tier.popular ? "rgba(255,255,255,0.8)" : "var(--text-muted)" }}>₹</span>}
                  <span className="font-serif text-5xl font-semibold" style={{ letterSpacing: "-0.03em" }}>{tier.price}</span>
                </div>
                <p className="text-xs mt-1 uppercase tracking-widest font-bold"
                  style={{ color: tier.popular ? "rgba(255,255,255,0.7)" : "var(--text-muted)" }}>
                  {tier.period}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: tier.popular ? "rgba(255,255,255,0.2)" : "rgba(0,82,204,0.1)" }}>
                      <Check className="h-3 w-3" style={{ color: tier.popular ? "#fff" : "var(--primary)" }} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                className={"inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-full transition-all hover:scale-[1.02] " +
                  (tier.popular ? "bg-white text-[var(--primary)]" : "")}
                style={tier.popular ? {} : {
                  background: "var(--primary)", color: "#fff",
                }}>
                {tier.price === "Custom" ? "Request Quote" : "Get Started"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}