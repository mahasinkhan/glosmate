"use client";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Zap, Award, MessageCircle } from "lucide-react";

const values = [
  { num: "01", icon: Heart, title: "Care deeply", description: "We treat every product like our own. Because craftsmanship can't be faked." },
  { num: "02", icon: Shield, title: "Own our work", description: "Ship it, support it, stand behind it. No finger-pointing, ever." },
  { num: "03", icon: Users, title: "Rise together", description: "Teammates first. We share credit, absorb blame, and teach generously." },
  { num: "04", icon: Zap, title: "Move with calm", description: "Fast doesn't mean frantic. We work at pace without the panic." },
  { num: "05", icon: Award, title: "Stay curious", description: "Learning is non-negotiable. Yesterday's expertise expires by default." },
  { num: "06", icon: MessageCircle, title: "Communicate honestly", description: "Say the hard thing kindly. Silence is more expensive than a tough conversation." },
];

export default function TeamValues() {
  return (
    <section className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mesh-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">How We Show Up</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Six principles that<br />
              <span className="gradient-text italic font-serif">guide every day.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            Not aspirational posters on a wall — actual behaviors we hire for, review against, and occasionally remind each other about over coffee.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.num} className="card-clean p-7 flex flex-col gap-4 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />

                {/* Watermark number */}
                <span className="absolute top-2 right-3 font-serif text-6xl font-semibold opacity-[0.04] pointer-events-none"
                  style={{ color: "var(--primary)" }}>
                  {v.num}
                </span>

                <div className="flex items-center justify-between">
                  <span className="section-num">{v.num}</span>
                </div>
                <div className="icon-box">
                  <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                </div>
                <h3 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}