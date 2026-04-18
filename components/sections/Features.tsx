"use client";
import { motion } from "framer-motion";
import { Smartphone, Globe, Palette, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01", icon: Smartphone, label: "Mobile Engineering",
    title: "Mobile App Development",
    description: "Native iOS & Android apps engineered with Swift, Kotlin, and React Native. High-performance, scalable mobile experiences that users love.",
    points: ["Native iOS & Android", "Cross-Platform Frameworks", "App Store Optimization", "Lifecycle Maintenance"],
    video: "https://videos.pexels.com/video-files/5077046/5077046-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85",
  },
  {
    num: "02", icon: Globe, label: "Web Platforms",
    title: "Web Development",
    description: "Modern, responsive web platforms built on React, Next.js, and Node.js. SEO-optimized, lightning-fast, and architected to scale with your business.",
    points: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "Enterprise APIs"],
    video: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85",
  },
  {
    num: "03", icon: Palette, label: "Design Systems",
    title: "UI/UX Design",
    description: "Human-centered design blending aesthetics and function. We craft digital experiences your customers genuinely enjoy using, every single day.",
    points: ["User Interface Design", "UX Strategy & Research", "Prototyping & Wireframing", "Design Systems"],
    video: "https://videos.pexels.com/video-files/7989462/7989462-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=85",
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-28 px-6 section-gray overflow-hidden">
      {/* LIVE ambient background video */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.15]"
        poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/3256542/3256542-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(246,249,252,0.88) 0%, rgba(246,249,252,0.92) 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-50 z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">What We Offer</span>
            <h2 className="big-heading mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Premium engineering,<br />
              <span className="gradient-text italic font-serif">delivered with care.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            Cutting-edge digital solutions that drive measurable growth and real user engagement. Three core disciplines, one unified standard of excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} className="card-clean overflow-hidden flex flex-col group"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.12 }}>
                <div className="h-56 overflow-hidden relative">
                  {/* LIVE autoplay video */}
                  <video autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    poster={service.poster}>
                    <source src={service.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 z-[1]"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.45), rgba(10,22,40,0.1) 55%)" }} />

                  <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full z-10">
                    <span className="section-num">{service.num}</span>
                    <span className="h-1 w-1 rounded-full" style={{ background: "var(--primary)" }} />
                    <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>{service.label}</span>
                  </div>

                  {/* LIVE indicator */}
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/50 backdrop-blur px-2.5 py-1 rounded-full z-10">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white">Live</span>
                  </div>

                  <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center transition-all group-hover:bg-[var(--primary)] z-10"
                    style={{ color: "var(--primary)" }}>
                    <ArrowUpRight className="h-4 w-4 group-hover:text-white" />
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-5 flex-1">
                  <div className="icon-box">
                    <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>{service.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{service.description}</p>
                  <ul className="flex flex-col gap-3 pt-5 flex-1" style={{ borderTop: "1px solid var(--border)" }}>
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "var(--primary)" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}