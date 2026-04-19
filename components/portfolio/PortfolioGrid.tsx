"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const filters = ["All", "Web", "Mobile", "E-commerce", "Healthcare", "Education", "Fintech"];

const projects = [
  {
    num: "02", label: "Healthcare", tags: ["Web", "Healthcare"],
    title: "Meridian Health",
    description: "Telehealth platform serving 50,000+ patients across three states. Secure, HIPAA-compliant, calm by design.",
    tech: ["Next.js", "Django", "WebRTC", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=90",
    video: "https://videos.pexels.com/video-files/4124328/4124328-hd_1920_1080_30fps.mp4",
    metric: "99.9%", metricLabel: "Uptime SLA",
  },
  {
    num: "03", label: "Education", tags: ["Web", "Mobile", "Education"],
    title: "LearnLoop",
    description: "Gamified learning platform for K-12. Live progress tracking, adaptive quizzes, and peer leaderboards.",
    tech: ["React", "Express", "MongoDB", "Redis"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1000&q=90",
    video: "https://videos.pexels.com/video-files/4974904/4974904-uhd_2732_1440_25fps.mp4",
    metric: "50k+", metricLabel: "Active learners",
  },
  {
    num: "04", label: "Fintech", tags: ["Mobile", "Fintech"],
    title: "PayFlow",
    description: "Peer-to-peer payments app for freelancers. Multi-currency, instant settlement, beautifully simple.",
    tech: ["React Native", "Node.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=90",
    video: "https://videos.pexels.com/video-files/7947474/7947474-hd_1920_1080_30fps.mp4",
    metric: "₹8Cr+", metricLabel: "Monthly volume",
  },
  {
    num: "05", label: "E-commerce", tags: ["Web", "E-commerce"],
    title: "Verdant Crafts",
    description: "Artisan marketplace with 200+ sellers. Custom order flows, vendor dashboards, international shipping.",
    tech: ["Next.js", "Shopify", "TypeScript", "Algolia"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=90",
    video: "https://videos.pexels.com/video-files/4465023/4465023-hd_1920_1080_30fps.mp4",
    metric: "3.8x", metricLabel: "AOV lift",
  },
  {
    num: "06", label: "Healthcare", tags: ["Mobile", "Healthcare"],
    title: "CalmMind",
    description: "Mental wellness app with therapist matching, guided meditation, and crisis support. Built with care.",
    tech: ["Flutter", "Python", "Firebase", "Twilio"],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1000&q=90",
    video: "https://videos.pexels.com/video-files/7579967/7579967-uhd_2732_1440_25fps.mp4",
    metric: "4.9★", metricLabel: "App Store rating",
  },
  {
    num: "07", label: "Education", tags: ["Web", "Education"],
    title: "TutorDesk",
    description: "B2B platform connecting coaching centers to EdTech tools. Admin dashboards, analytics, billing.",
    tech: ["React", "Django", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=90",
    video: "https://videos.pexels.com/video-files/8369957/8369957-hd_1920_1080_25fps.mp4",
    metric: "200+", metricLabel: "Institutions",
  },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#f6f9fc" }}>
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">All Projects</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Six more projects,<br />
              <span className="gradient-text italic font-serif">six different stories.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            Filter by discipline, industry, or platform. Each one has a full case study.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button key={f} onClick={() => setActive(f)}
                className="relative text-sm font-semibold px-4 py-2.5 rounded-full transition-all"
                style={{
                  background: isActive ? "linear-gradient(135deg, var(--primary), var(--accent-cyan))" : "#ffffff",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: isActive ? "1px solid transparent" : "1px solid var(--border)",
                  boxShadow: isActive ? "0 10px 24px -6px rgba(0,82,204,0.35)" : "0 2px 6px rgba(10,22,40,0.04)",
                }}>
                {f}
                {isActive && (
                  <span className="ml-1.5 text-[10px] opacity-80">
                    {f === "All" ? projects.length : projects.filter(p => p.tags.includes(f)).length}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.div key={p.num} layout
                className="card-clean overflow-hidden flex flex-col group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}>
                <div className="relative h-60 overflow-hidden">
                  <video autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    poster={p.image}>
                    <source src={p.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 z-[1]"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.65) 0%, rgba(10,22,40,0.15) 55%)" }} />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full">
                      <span className="section-num">{p.num}</span>
                      <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                        {p.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur px-2.5 py-1 rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white">Live</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10">
                    <p className="font-serif text-3xl font-semibold text-white leading-none"
                      style={{ letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                      {p.metric}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/90 mt-1">
                      {p.metricLabel}
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-lg transition-all group-hover:bg-[var(--primary)] group-hover:rotate-45 z-10"
                    style={{ color: "var(--primary)" }}>
                    <ArrowUpRight className="h-5 w-5 group-hover:text-white" />
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    {p.tech.map((t) => (<span key={t} className="tag-chip">{t}</span>))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div className="text-center py-16"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="font-serif italic text-xl" style={{ color: "var(--text-muted)" }}>
              No projects match that filter yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}