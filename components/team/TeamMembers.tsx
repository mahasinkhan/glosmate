"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Coffee } from "lucide-react";

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const team = [
  {
    num: "01", name: "Ayan Khan", role: "Founder & CEO", label: "Strategy",
    bio: "5+ years leading business strategy, marketing, and project management. Drives company vision and forges lasting client partnerships.",
    quote: "Strategy is about making choices.",
    skills: ["Strategy", "Marketing", "Leadership", "Partnerships"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=90",
    location: "Kolkata", coffee: "Filter, black",
  },
  {
    num: "02", name: "Aryan Saini", role: "CEO & Lead Developer", label: "Engineering",
    bio: "4+ years architecting full-stack systems. Expert in mobile apps, web platforms, and real-time 3D game development.",
    quote: "Code is our craft, quality is non-negotiable.",
    skills: ["Full Stack", "Mobile", "3D Games", "DevOps"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=90",
    location: "Kolkata", coffee: "Cappuccino",
  },
  {
    num: "03", name: "Priya Sharma", role: "Design Lead", label: "Product Design",
    bio: "6+ years shaping digital products that put people first. Leads our design system and interaction design practice.",
    quote: "Great design is invisible until you need it.",
    skills: ["UX Research", "Design Systems", "Figma", "Prototyping"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=90",
    location: "Bengaluru", coffee: "Matcha latte",
  },
  {
    num: "04", name: "Rahul Verma", role: "Senior Engineer", label: "Backend",
    bio: "7+ years building APIs that scale. Obsessed with performance, observability, and clean architecture.",
    quote: "Boring code is beautiful code.",
    skills: ["Node.js", "Python", "AWS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=90",
    location: "Delhi", coffee: "Espresso, double",
  },
];

export default function TeamMembers() {
  return (
    <section id="members" className="relative py-28 px-6 overflow-hidden" style={{ background: "#f6f9fc" }}>
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">The Roster</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              The people you'll<br />
              <span className="gradient-text italic font-serif">actually work with.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            No account managers, no offshore handoffs. The person on your first call is the person shipping your code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, idx) => (
            <motion.div key={m.num} className="group"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
              <div className="rounded-2xl overflow-hidden bg-white relative"
                style={{ boxShadow: "0 16px 40px -12px rgba(10,22,40,0.1)", border: "1px solid var(--border)" }}>
                {/* Portrait */}
                <div className="relative h-80 overflow-hidden">
                  <img src={m.image} alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "saturate(0.95)" }} />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.1) 45%, transparent 70%)" }} />

                  {/* Top-left badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-full">
                    <span className="section-num">{m.num}</span>
                    <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                      {m.label}
                    </span>
                  </div>

                  {/* Top-right socials */}
                  <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center transition hover:bg-[var(--primary)] hover:text-white"
                      style={{ color: "var(--primary)" }} aria-label="LinkedIn">
                      <LinkedInIcon className="h-3.5 w-3.5" />
                    </button>
                    <button className="h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center transition hover:bg-[var(--primary)] hover:text-white"
                      style={{ color: "var(--primary)" }} aria-label="Email">
                      <Mail className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-2xl font-semibold text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
                      {m.name}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#06b6d4]">
                      {m.role}
                    </p>
                  </div>
                </div>

                {/* Quote + details */}
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <span className="font-serif text-3xl leading-none flex-shrink-0" style={{ color: "var(--primary)" }}>"</span>
                    <p className="font-serif italic text-sm leading-snug pt-1" style={{ color: "var(--text-secondary)" }}>
                      {m.quote}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {m.bio}
                  </p>

                  {/* Fun meta row */}
                  <div className="flex items-center justify-between gap-2 pt-3 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" style={{ color: "var(--primary)" }} />
                      {m.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Coffee className="h-3 w-3" style={{ color: "var(--primary)" }} />
                      {m.coffee}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {m.skills.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ background: "rgba(0,82,204,0.06)", color: "var(--primary)", border: "1px solid rgba(0,82,204,0.12)" }}>
                        {s}
                      </span>
                    ))}
                    {m.skills.length > 3 && (
                      <span className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ background: "rgba(0,82,204,0.06)", color: "var(--primary)" }}>
                        +{m.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "And 8 more" teaser */}
        <motion.div className="flex justify-center mt-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 bg-white rounded-full pl-2 pr-6 py-2"
            style={{ boxShadow: "0 10px 28px -8px rgba(10,22,40,0.12)", border: "1px solid var(--border)" }}>
            <div className="flex -space-x-2">
              {["1438761681033-6461ffad8d80", "1500648767791-00dcc994a43e", "1507003211169-0a1dd7228f2d", "1534528741775-53994a69daeb"].map((id) => (
                <div key={id} className="h-9 w-9 rounded-full border-2 border-white overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${id}?w=100&q=80`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="h-9 w-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))", color: "#fff" }}>
                +8
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                and 8 more teammates
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>
                Engineers, designers, QA, ops
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}