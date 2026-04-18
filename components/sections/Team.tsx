"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const team = [
  {
    num: "01", name: "Ayan Khan", role: "Founder & CEO", label: "Strategy",
    bio: "5+ years leading business strategy, marketing, and project management. Drives company vision and forges lasting client partnerships.",
    skills: ["Strategy", "Marketing", "Leadership"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=90",
    quote: "Strategy is about making choices.",
  },
  {
    num: "02", name: "Aryan Saini", role: "CEO & Lead Developer", label: "Engineering",
    bio: "4+ years architecting full-stack systems. Expert in mobile apps, web platforms, and real-time 3D game development.",
    skills: ["Full Stack", "Mobile", "3D Games", "DevOps"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=90",
    quote: "Code is our craft, quality is non-negotiable.",
  },
];

export default function Team() {
  return (
    <section id="our-team" className="relative py-28 px-6 section-white overflow-hidden">
      {/* LIVE ambient video */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.15]"
        poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-white/85" />
      <div className="absolute inset-0 grid-bg opacity-30 z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Meet the Team</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              The people behind<br />
              <span className="gradient-text italic font-serif">the products.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            A compact team of dedicated senior professionals, personally committed to the outcome of every project we take on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {team.map((member, idx) => (
            <motion.div key={member.name} className="card-clean overflow-hidden group"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.2 }}>
              <div className="relative h-96 overflow-hidden">
                <img src={member.image} alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "saturate(0.95)" }} />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.2) 40%, transparent 70%)" }} />

                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full">
                  <span className="section-num">{member.num}</span>
                  <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>{member.label}</span>
                </div>

                <div className="absolute top-5 right-5 flex gap-2">
                  <button className="h-9 w-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center transition hover:bg-[var(--primary)] hover:text-white"
                    style={{ color: "var(--primary)" }} aria-label="LinkedIn">
                    <LinkedInIcon className="h-4 w-4" />
                  </button>
                  <button className="h-9 w-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center transition hover:bg-[var(--primary)] hover:text-white"
                    style={{ color: "var(--primary)" }} aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="font-serif text-4xl leading-none" style={{ color: "#06b6d4" }}>"</span>
                    <p className="font-serif italic text-white text-base leading-snug pt-1" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
                      {member.quote}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/25">
                    <h3 className="font-serif text-2xl font-semibold text-white" style={{ letterSpacing: "-0.02em" }}>{member.name}</h3>
                    <p className="text-xs font-semibold mt-1 uppercase tracking-widest" style={{ color: "#06b6d4" }}>{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col gap-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{member.bio}</p>
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {member.skills.map((skill) => (<span key={skill} className="tag-chip">{skill}</span>))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}