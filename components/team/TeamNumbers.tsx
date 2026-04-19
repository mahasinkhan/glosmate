"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Counter({ to, suffix = "", decimals = 0, delay = 0 }: { to: number; suffix?: string; decimals?: number; delay?: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(decimals) + suffix);
  useEffect(() => {
    const c = animate(count, to, { duration: 2, delay, ease: [0.16, 1, 0.3, 1] });
    return c.stop;
  }, [to, delay]);
  return <motion.span>{display}</motion.span>;
}

const items = [
  { num: "01", value: 12, suffix: "", label: "Team members", sub: "Growing by ~3 per year" },
  { num: "02", value: 8, suffix: "+", label: "Avg. years experience", sub: "Senior across the board" },
  { num: "03", value: 4, suffix: "", label: "Time zones", sub: "Remote-friendly, async-first" },
  { num: "04", value: 100, suffix: "%", label: "Senior engineers", sub: "Zero junior handoffs" },
];

export default function TeamNumbers() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0052cc 50%, #06b6d4 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-10 z-[1]" />

      <svg className="absolute -top-20 -left-20 w-[450px] h-[450px] opacity-15 z-[2]" viewBox="0 0 450 450" fill="none">
        <circle cx="225" cy="225" r="180" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="225" cy="225" r="120" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-10 bg-[#06b6d4]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#06b6d4]">The Team in Numbers</span>
              <span className="h-px w-10 bg-[#06b6d4]" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-white mb-3"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Small by design.<br />
              <span className="italic">Senior by default.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {items.map((s, i) => (
            <motion.div key={s.num} className="relative text-center md:text-left md:px-8"
              style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.15)" } : {}}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <span className="font-serif text-sm font-semibold text-[#06b6d4]">{s.num}</span>
              <div className="font-serif text-6xl md:text-7xl font-medium text-white mt-3 mb-2"
                style={{ letterSpacing: "-0.04em", lineHeight: 1 }}>
                <Counter to={s.value} suffix={s.suffix} decimals={0} delay={i * 0.15} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/90">{s.label}</p>
              <p className="font-serif italic text-sm text-[#06b6d4] mt-2">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}