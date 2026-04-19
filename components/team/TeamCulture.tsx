"use client";
import { motion } from "framer-motion";
import { Coffee, Heart, Music, Mountain } from "lucide-react";

const moments = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
    title: "Morning standups", label: "Daily ritual",
    description: "Ten minutes. No slides. Just what we shipped, what's stuck, and who needs help.",
    icon: Coffee,
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85",
    title: "Friday demos", label: "Every week",
    description: "Ship something every week. Demo it live. Small wins compound into big shipments.",
    icon: Heart,
  },
  {
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=900&q=85",
    title: "Annual offsite", label: "Once a year",
    description: "A week in the mountains — no laptops on day one. Reset, reconnect, realign.",
    icon: Mountain,
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900&q=85",
    title: "Learning hour", label: "Fridays at 4",
    description: "Someone teaches something — could be Rust internals, could be kimchi making.",
    icon: Music,
  },
];

export default function TeamCulture() {
  return (
    <section className="relative py-28 px-6 section-white overflow-hidden">
      {/* SVG decorative grid bottom-right */}
      <svg className="absolute bottom-20 right-10 w-48 h-48 opacity-[0.08] hidden md:block" viewBox="0 0 200 200" fill="none">
        {[...Array(8)].map((_, row) =>
          [...Array(8)].map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 25 + 4} cy={row * 25 + 4} r="2" fill="#0052cc" opacity={0.2 + row * 0.08} />
          ))
        )}
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Inside the Studio</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Rituals that keep<br />
              <span className="gradient-text italic font-serif">us human.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            Small traditions, repeated until they become culture. This is how we stay connected while moving fast.
          </motion.p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[280px]">
          {moments.map((m, idx) => {
            const Icon = m.icon;
            // First & third items span 4 cols, second & fourth span 2 cols for asymmetric rhythm
            const span = idx === 0 || idx === 3 ? "md:col-span-4" : "md:col-span-2";
            return (
              <motion.div key={m.title}
                className={"relative rounded-2xl overflow-hidden group cursor-pointer " + span}
                style={{ boxShadow: "0 16px 36px -8px rgba(10,22,40,0.15)" }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <img src={m.image} alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.25) 50%, transparent 100%)" }} />

                {/* Top-left icon chip */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
                  <Icon className="h-3 w-3 text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">{m.label}</span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
                    {m.title}
                  </h3>
                  <p className="text-sm text-white/85 max-w-md leading-relaxed" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    {m.description}
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