"use client";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, ArrowRight, MapPin } from "lucide-react";

const contactInfo = [
  { num: "01", icon: MessageCircle, label: "WhatsApp", value: "+91 86976 36393", sub: "Instant response" },
  { num: "02", icon: Mail, label: "Email", value: "glosmatetech@gmail.com", sub: "Reply within 4 hrs" },
  { num: "03", icon: Clock, label: "Availability", value: "24/7 Support", sub: "Always available" },
  { num: "04", icon: MapPin, label: "Location", value: "Kolkata, India", sub: "Serving globally" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* LIVE full-bleed atmospheric video */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80">
        <source src="https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(246,249,252,0.88) 0%, rgba(246,249,252,0.94) 100%)" }} />
      <div className="absolute inset-0 grid-bg opacity-40 z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Let's build something <br />
              <span className="gradient-text italic font-serif">remarkable.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            Transform your concept into a successful digital product. Book a free consultation and detailed estimate — no strings attached.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} className="card-clean p-7 flex flex-col gap-4 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }}>
                <div className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />
                <div className="flex items-center justify-between">
                  <span className="section-num">{item.num}</span>
                  <div className="icon-box" style={{ height: 42, width: 42 }}>
                    <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                  <p className="font-serif text-lg font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LIVE video CTA card */}
        <motion.div className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <video autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1600&q=80">
            <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(135deg, rgba(0,82,204,0.9) 0%, rgba(0,61,153,0.94) 60%, rgba(6,182,212,0.8) 100%)" }} />
          <div className="absolute inset-0 grid-bg opacity-20 z-[2]" />

          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white">Online Now</span>
              </div>
              <h3 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-white" style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                Chat on WhatsApp <span className="italic font-normal">now.</span>
              </h3>
              <p className="max-w-md text-white/85 text-base">Get immediate assistance and a detailed quote within minutes, directly from our senior team.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="https://wa.me/918697636393" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full bg-white transition-all hover:scale-105"
                style={{ color: "var(--primary)", boxShadow: "0 12px 36px -8px rgba(0,0,0,0.25)" }}>
                Chat Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:glosmatetech@gmail.com"
                className="inline-flex items-center justify-center gap-2 font-medium px-8 py-3 text-sm text-white/90 hover:text-white transition-colors">
                Send an Email →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}