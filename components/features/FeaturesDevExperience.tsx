"use client";
import { motion } from "framer-motion";
import { Terminal, GitBranch, CheckCircle2 } from "lucide-react";

export default function FeaturesDevExperience() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#f6f9fc" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Developer Experience</span>
            <h2 className="big-heading mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Code you can<br />
              <span className="gradient-text italic font-serif">actually read.</span>
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We don't write throwaway code. Every project ships with full TypeScript types, tested components, documented APIs, and a readme that future engineers will actually thank us for.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                { title: "100% TypeScript", sub: "Strictly typed, zero any" },
                { title: "Test coverage > 80%", sub: "Jest, Playwright, Cypress" },
                { title: "CI/CD on every commit", sub: "GitHub Actions, automated deploys" },
                { title: "Documented with Storybook", sub: "Components you can see and touch" },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(16,185,129,0.12)" }}>
                    <CheckCircle2 className="h-4 w-4" style={{ color: "#059669" }} />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold" style={{ color: "var(--text-primary)" }}>{item.title}</p>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Code editor mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl rotate-12 opacity-20"
                style={{ background: "linear-gradient(135deg, #0052cc, #06b6d4)" }} />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-2xl -rotate-6 opacity-10"
                style={{ background: "linear-gradient(135deg, #06b6d4, #0052cc)" }} />

              <div className="relative rounded-2xl overflow-hidden"
                style={{ background: "#0a1628", boxShadow: "0 30px 60px -15px rgba(10,22,40,0.4), 0 0 0 1px rgba(255,255,255,0.08)" }}>
                {/* Editor chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <Terminal className="h-3 w-3 text-white/40" />
                    <span className="text-[11px] font-mono text-white/60">components/Button.tsx</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-white/50 font-mono">
                    <GitBranch className="h-3 w-3" />
                    <span>main</span>
                  </div>
                </div>

                {/* Code content */}
                <pre className="p-6 text-[13px] leading-relaxed font-mono overflow-x-auto">
                  <code>
                    <div className="text-white/40"><span className="inline-block w-6">1</span>{'// Well-typed, tested, documented'}</div>
                    <div><span className="text-white/40 inline-block w-6">2</span><span className="text-[#a78bfa]">import</span> <span className="text-white">{"{ forwardRef }"}</span> <span className="text-[#a78bfa]">from</span> <span className="text-[#10b981]">"react"</span><span className="text-white">;</span></div>
                    <div><span className="text-white/40 inline-block w-6">3</span><span className="text-[#a78bfa]">import</span> <span className="text-white">type</span> <span className="text-white">{"{ ButtonProps }"}</span> <span className="text-[#a78bfa]">from</span> <span className="text-[#10b981]">"./types"</span><span className="text-white">;</span></div>
                    <div><span className="text-white/40 inline-block w-6">4</span></div>
                    <div><span className="text-white/40 inline-block w-6">5</span><span className="text-[#a78bfa]">export const</span> <span className="text-[#fbbf24]">Button</span> <span className="text-white">= forwardRef&lt;</span></div>
                    <div><span className="text-white/40 inline-block w-6">6</span><span className="text-white">  HTMLButtonElement,</span></div>
                    <div><span className="text-white/40 inline-block w-6">7</span><span className="text-white">  ButtonProps</span></div>
                    <div><span className="text-white/40 inline-block w-6">8</span><span className="text-white">&gt;((</span><span className="text-[#06b6d4]">{"{ variant, size, ...rest }"}</span><span className="text-white">, ref) =&gt; {'{'}</span></div>
                    <div><span className="text-white/40 inline-block w-6">9</span><span className="text-white">  </span><span className="text-[#a78bfa]">return</span> <span className="text-white">(</span></div>
                    <div><span className="text-white/40 inline-block w-6">10</span><span className="text-white">    &lt;</span><span className="text-[#06b6d4]">button</span></div>
                    <div><span className="text-white/40 inline-block w-6">11</span><span className="text-white">      </span><span className="text-[#fbbf24]">ref</span><span className="text-white">={'{ref}'}</span></div>
                    <div><span className="text-white/40 inline-block w-6">12</span><span className="text-white">      </span><span className="text-[#fbbf24]">className</span><span className="text-white">={'{cn(variant, size)}'}</span></div>
                    <div><span className="text-white/40 inline-block w-6">13</span><span className="text-white">      {'{...rest}'}</span></div>
                    <div><span className="text-white/40 inline-block w-6">14</span><span className="text-white">    /&gt;</span></div>
                    <div><span className="text-white/40 inline-block w-6">15</span><span className="text-white">  );</span></div>
                    <div><span className="text-white/40 inline-block w-6">16</span><span className="text-white">{'}'});</span></div>
                    <div><span className="text-white/40 inline-block w-6">17</span></div>
                    <div><span className="text-white/40 inline-block w-6">18</span><span className="text-[#fbbf24]">Button</span><span className="text-white">.</span><span className="text-[#06b6d4]">displayName</span> <span className="text-white">=</span> <span className="text-[#10b981]">"Button"</span><span className="text-white">;</span></div>
                  </code>
                </pre>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-[10px] font-mono">
                  <div className="flex items-center gap-3 text-white/50">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      TypeScript OK
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      18 tests pass
                    </span>
                  </div>
                  <span className="text-[#06b6d4]">UTF-8 · LF · TS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}