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

const stats = [
  { num: "01", value: 200, suffix: "+", label: "Projects delivered", sub: "+42 this year" },
  { num: "02", value: 4.9, decimals: 1, label: "Client satisfaction", sub: "From 200+ verified reviews" },
  { num: "03", value: 98, suffix: "%", label: "On-time delivery", sub: "Industry average: 61%" },
  { num: "04", value: 12, suffix: "+", label: "Industries served", sub: "Health, edtech, fintech & more" },
];

export default function FeaturesStats() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Brand gradient background */}
      <div className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, #0052cc 0%, #003d99 60%, #06b6d4 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-10 z-[1]" />

      {/* Decorative SVG rings */}
      <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-15 z-[2]" viewBox="0 0 500 500" fill="none">
        <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="250" cy="250" r="140" stroke="white" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="250" cy="250" r="80" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
      <svg className="absolute -bottom-10 -left-10 w-[300px] h-[300px] opacity-10 z-[2]" viewBox="0 0 300 300" fill="none">
        {[...Array(10)].map((_, row) =>
          [...Array(10)].map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 30 + 5} cy={row * 30 + 5} r="2" fill="white" opacity={0.3 + row * 0.05} />
          ))
        )}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-10 bg-[#06b6d4]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#06b6d4]">The Numbers</span>
              <span className="h-px w-10 bg-[#06b6d4]" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-white mb-4"
              style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Results we're<br />
              <span className="italic">genuinely proud of.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((s, i) => (
            <motion.div key={s.num} className="relative text-center md:text-left md:px-8"
              style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.15)" } : {}}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <span className="font-serif text-sm font-semibold text-[#06b6d4]">{s.num}</span>
              <div className="font-serif text-6xl md:text-7xl font-medium text-white mt-3 mb-2"
                style={{ letterSpacing: "-0.04em", lineHeight: 1 }}>
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} delay={i * 0.15} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/90">
                {s.label}
              </p>
              <p className="font-serif italic text-sm text-[#06b6d4] mt-2">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}