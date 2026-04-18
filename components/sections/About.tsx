"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01", label: "E-Commerce", title: "Premium Retail Platform",
    description: "End-to-end e-commerce ecosystem with real-time inventory, multi-gateway payments, and advanced analytics dashboards.",
    tags: ["React Native", "Node.js", "MongoDB", "Stripe"],
    video: "https://videos.pexels.com/video-files/5053740/5053740-uhd_3840_2160_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    metric: "3.2x", metricLabel: "Conversion lift",
  },
  {
    num: "02", label: "Healthcare", title: "Medical Management System",
    description: "Integrated healthcare platform for patient management, appointment scheduling, and secure telemedicine consultations.",
    tags: ["Flutter", "Python", "PostgreSQL", "WebRTC"],
    video: "https://videos.pexels.com/video-files/4124328/4124328-hd_1920_1080_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85",
    metric: "99.9%", metricLabel: "Uptime SLA",
  },
  {
    num: "03", label: "Education", title: "Learning Management System",
    description: "Interactive e-learning platform with course authoring, HD video streaming, and granular progress tracking.",
    tags: ["React", "Express.js", "MySQL", "AWS"],
    video: "https://videos.pexels.com/video-files/4974904/4974904-uhd_2732_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&q=85",
    metric: "50k+", metricLabel: "Active learners",
  },
];

export default function About() {
  return (
    <section id="portfolio" className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mesh-bg opacity-70 pointer-events-none" />
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Our Work</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Featured <span className="gradient-text italic font-serif">projects.</span>
            </h2>
            <p className="text-lg max-w-xl" style={{ color: "var(--text-muted)" }}>
              Digital transformations delivered across industries — each built to perform at enterprise scale.
            </p>
          </motion.div>
          <motion.a href="#contact" className="btn-secondary self-start md:self-auto"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div key={project.title} className="card-clean overflow-hidden flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.15 }}>
              <div className="relative h-64 overflow-hidden">
                {/* LIVE autoplay video */}
                <video autoPlay muted loop playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  poster={project.poster}>
                  <source src={project.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-[1]"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, rgba(10,22,40,0.15) 55%)" }} />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full">
                    <span className="section-num">{project.num}</span>
                    <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>{project.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur px-2.5 py-1 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white">Live</span>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 z-10">
                  <p className="font-serif text-3xl font-semibold text-white leading-none" style={{ letterSpacing: "-0.02em", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    {project.metric}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/90 mt-1">{project.metricLabel}</p>
                </div>

                <div className="absolute bottom-5 right-5 h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-lg transition-all group-hover:bg-[var(--primary)] group-hover:rotate-45 z-10"
                  style={{ color: "var(--primary)" }}>
                  <ArrowUpRight className="h-5 w-5 group-hover:text-white" />
                </div>
              </div>
              <div className="p-7 flex flex-col gap-4 flex-1">
                <h3 className="font-serif text-2xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{project.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {project.tags.map((tag) => (<span key={tag} className="tag-chip">{tag}</span>))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}