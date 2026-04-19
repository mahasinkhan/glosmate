"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, TrendingUp } from "lucide-react";

export default function PortfolioFeatured() {
  return (
    <section id="featured" className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mesh-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">Case Study 01 · Featured</span>
            <h2 className="big-heading" style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>
              The case study<br />
              <span className="gradient-text italic font-serif">that tells it all.</span>
            </h2>
          </motion.div>
          <motion.div className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="section-num">Premium Retail</span>
          </motion.div>
        </div>

        {/* Main layout — 2 column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Video/image tile */}
          <motion.div className="lg:col-span-7 relative"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="absolute -top-3 -left-3 text-2xl font-thin opacity-50 z-20" style={{ color: "var(--primary)" }}>+</span>
            <span className="absolute -top-3 -right-3 text-2xl font-thin opacity-50 z-20" style={{ color: "var(--primary)" }}>+</span>

            <div className="relative rounded-2xl overflow-hidden group"
              style={{ boxShadow: "0 40px 80px -20px rgba(10,22,40,0.3)", border: "1px solid var(--border)" }}>
              {/* Browser chrome */}
              <div className="h-10 flex items-center gap-2 px-4 border-b"
                style={{ background: "#f8fafc", borderColor: "var(--border)" }}>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-md bg-white border border-[var(--border)] min-w-[200px] justify-center"
                    style={{ color: "var(--text-muted)" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-[10px]">meridian.shop/products</span>
                  </div>
                </div>
                <div className="w-10" />
              </div>

              <video autoPlay muted loop playsInline
                className="w-full h-[480px] object-cover"
                poster="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=90">
                <source src="https://videos.pexels.com/video-files/5053740/5053740-uhd_3840_2160_25fps.mp4" type="video/mp4" />
              </video>

              <div className="absolute bottom-0 inset-x-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7), transparent)" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-px w-8 bg-[#06b6d4]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#06b6d4]">Launched Oct 2025</span>
                    </div>
                    <p className="font-serif italic text-xl text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                      Meridian — the premium retail platform.
                    </p>
                  </div>
                  <button className="h-12 w-12 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
                    style={{ color: "var(--primary)", boxShadow: "0 12px 28px rgba(0,0,0,0.3)" }}>
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Case study details */}
          <motion.div className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="tag-chip">E-commerce</span>
              <span className="tag-chip">React Native</span>
              <span className="tag-chip">Node.js</span>
              <span className="tag-chip">Stripe</span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-semibold leading-tight"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              From 200 daily orders<br />
              <span className="italic" style={{ color: "var(--primary)" }}>to 2,400 in six months.</span>
            </h3>

            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Meridian came to us with a broken WooCommerce site and big ambitions. We rebuilt the entire stack — React Native mobile, Next.js storefront, custom order management — and shipped it in nine weeks.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="h-3 w-3" style={{ color: "#10b981" }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#059669" }}>Growth</span>
                </div>
                <p className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  12x
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: "var(--text-muted)" }}>Daily orders</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="h-3 w-3" style={{ color: "#10b981" }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#059669" }}>Conversion</span>
                </div>
                <p className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  3.8%
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: "var(--text-muted)" }}>Up from 1.1%</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--primary)" }}>Speed</span>
                </div>
                <p className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  0.9s
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: "var(--text-muted)" }}>Page load</p>
              </div>
            </div>

            {/* Client quote */}
            <div className="relative pl-5 mt-2" style={{ borderLeft: "3px solid var(--primary)" }}>
              <p className="font-serif italic text-base leading-snug mb-3" style={{ color: "var(--text-secondary)" }}>
                "Our revenue went up 11x in six months. The team felt like senior engineers embedded in our company — not an outside vendor."
              </p>
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-white"
                  style={{ boxShadow: "0 4px 12px rgba(10,22,40,0.1)" }}>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Aanya Mehta</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--primary)" }}>Founder · Meridian</p>
                </div>
              </div>
            </div>

            <a href="#" className="inline-flex items-center gap-2 font-semibold text-sm group self-start"
              style={{ color: "var(--primary)" }}>
              Read the full case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}