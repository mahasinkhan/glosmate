"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";

const roles = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "Kolkata · Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Remote · India", type: "Full-time" },
  { title: "DevOps Engineer", department: "Infrastructure", location: "Kolkata · Hybrid", type: "Full-time" },
  { title: "Mobile Engineer (iOS/Android)", department: "Engineering", location: "Remote · India", type: "Contract" },
];

export default function TeamOpenRoles() {
  return (
    <section id="open-roles" className="relative py-28 px-6 overflow-hidden" style={{ background: "#f6f9fc" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 mb-5 tag-chip">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              We're hiring · 4 open roles
            </div>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Come build with us.<br />
              <span className="gradient-text italic font-serif">We'd love that.</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              We hire for judgment, craft, and kindness — in that order. Competitive pay, real ownership, and work you'll be proud of.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3">
          {roles.map((r, idx) => (
            <motion.a key={r.title} href="mailto:glosmatetech@gmail.com?subject=Application"
              className="group card-clean p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
              <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="section-num">0{idx + 1}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                    {r.department}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                  {r.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    <span className="font-medium">{r.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    <span className="font-medium">{r.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 md:flex-col md:items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--primary)" }}>
                  Apply now
                </span>
                <div className="h-11 w-11 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-45"
                  style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)" }}>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Don't see your role? */}
        <motion.div className="mt-10 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>Don't see your role?</p>
          <a href="mailto:glosmatetech@gmail.com" className="inline-flex items-center gap-1.5 font-serif italic text-lg hover:underline"
            style={{ color: "var(--primary)" }}>
            Tell us who you are → glosmatetech@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}