"use client";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Tailwind CSS", color: "#06b6d4" },
      { name: "Vue.js", color: "#41b883" },
    ],
  },
  {
    label: "Mobile",
    techs: [
      { name: "React Native", color: "#61dafb" },
      { name: "Flutter", color: "#02569b" },
      { name: "Swift", color: "#f05138" },
      { name: "Kotlin", color: "#7f52ff" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", color: "#339933" },
      { name: "Django", color: "#092e20" },
      { name: "Python", color: "#3776ab" },
      { name: "Express", color: "#000000" },
      { name: "GraphQL", color: "#e535ab" },
    ],
  },
  {
    label: "Cloud & DevOps",
    techs: [
      { name: "AWS", color: "#ff9900" },
      { name: "Vercel", color: "#000000" },
      { name: "Docker", color: "#2496ed" },
      { name: "PostgreSQL", color: "#4169e1" },
      { name: "MongoDB", color: "#47a248" },
    ],
  },
];

export default function ServicesTech() {
  return (
    <section className="relative py-28 px-6 section-gray overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* SVG circuit decoration */}
      <svg className="absolute top-10 right-10 w-64 h-64 opacity-10 hidden md:block" viewBox="0 0 200 200" fill="none">
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
            <span className="eyebrow">Technology Stack</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Modern tools,<br />
              <span className="gradient-text italic font-serif">battle-tested stacks.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            We work with industry-standard technologies — the same ones powering products at Stripe, Shopify, and Linear.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div key={cat.label} className="card-clean p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-semibold" style={{ color: "var(--primary)" }}>0{idx + 1}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                  {cat.techs.length} tools
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                {cat.label}
              </h3>
              <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                {cat.techs.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2.5 text-sm">
                    <span className="h-2 w-2 rounded-full" style={{ background: tech.color }} />
                    <span className="font-medium" style={{ color: "var(--text-secondary)" }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}