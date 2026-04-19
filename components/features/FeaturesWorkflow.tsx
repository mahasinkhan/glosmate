"use client";
import { motion } from "framer-motion";
import { Compass, PenTool, Cog, Rocket, LifeBuoy, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01", icon: Compass, phase: "Discover", time: "Week 0–1",
    title: "Understanding your north star",
    description: "We start with a deep-dive workshop — your goals, users, competitors, and constraints. You leave with a written product strategy.",
    outputs: ["Product strategy doc", "User journey maps", "Technical requirements"],
  },
  {
    num: "02", icon: PenTool, phase: "Design", time: "Week 1–3",
    title: "Wireframes to pixel-perfect",
    description: "From low-fidelity sketches to fully interactive Figma prototypes — every screen reviewed, tested, signed off before a line of code.",
    outputs: ["Interactive prototype", "Design system", "Component library"],
  },
  {
    num: "03", icon: Cog, phase: "Build", time: "Week 3–9",
    title: "Engineering in focused sprints",
    description: "Weekly demos, daily stand-ups (if you want them), and a real-time Kanban board you can check anytime. Total transparency.",
    outputs: ["Working software", "Weekly demos", "Live Kanban board"],
  },
  {
    num: "04", icon: Rocket, phase: "Launch", time: "Week 9–10",
    title: "Zero-downtime deployment",
    description: "Staging, QA, security audit, production rollout — all orchestrated so your users never notice anything except the new features.",
    outputs: ["Production deployment", "Monitoring dashboard", "Launch playbook"],
  },
  {
    num: "05", icon: LifeBuoy, phase: "Support", time: "Ongoing",
    title: "We don't disappear after launch",
    description: "30–90 days of free hypercare, then affordable retainers or pay-as-you-go. Your product keeps evolving with real users.",
    outputs: ["24/7 on-call", "Monthly reports", "Iteration sprints"],
  },
];

export default function FeaturesWorkflow() {
  return (
    <section id="workflow" className="relative py-28 px-6 section-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] mesh-bg opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
          <motion.div className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow">How We Work</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              A proven path.<br />
              <span className="gradient-text italic font-serif">Five stages. Zero surprises.</span>
            </h2>
          </motion.div>
          <motion.p className="md:col-span-5 text-lg" style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            Every project follows this workflow. Every stage has clear deliverables. You always know what's coming next.
          </motion.p>
        </div>

        {/* Phase progress bar — desktop */}
        <motion.div className="hidden lg:block mb-16 mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="relative">
            {/* Track line */}
            <div className="absolute top-5 left-[10%] right-[10%] h-px"
              style={{ background: "linear-gradient(90deg, var(--primary) 0%, var(--accent-cyan) 100%)" }} />
            <div className="grid grid-cols-5 relative">
              {steps.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center gap-3 relative">
                  <div className="relative h-10 w-10 rounded-full bg-white flex items-center justify-center"
                    style={{ boxShadow: "0 8px 16px -4px rgba(0,82,204,0.25)", border: "2px solid #fff" }}>
                    <div className="h-6 w-6 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))" }}>
                      <span className="text-[10px] font-bold text-white font-serif">{i + 1}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--text-primary)" }}>
                    {step.phase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline rows */}
        <div className="relative">
          {/* Central connecting line — spans whole timeline on desktop */}
          <div className="absolute top-0 bottom-0 left-[30px] md:left-1/2 md:-translate-x-1/2 w-px hidden sm:block"
            style={{ background: "linear-gradient(180deg, transparent 0%, var(--primary) 8%, var(--accent-cyan) 92%, transparent 100%)" }} />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.div key={step.num} className="relative"
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }}>

                  {/* Center icon node — positioned on the vertical line */}
                  <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                    <motion.div
                      className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center"
                      style={{
                        boxShadow: "0 12px 32px -8px rgba(0,82,204,0.35), 0 0 0 8px #ffffff",
                      }}
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}>
                      <div className="h-11 w-11 rounded-full flex items-center justify-center relative overflow-hidden"
                        style={{ background: "linear-gradient(135deg, var(--primary), var(--accent-cyan))" }}>
                        <Icon className="h-5 w-5 text-white relative z-10" />
                        {/* Shine */}
                        <div className="absolute inset-0 opacity-30"
                          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)" }} />
                      </div>
                      {/* Number badge */}
                      <span className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-white flex items-center justify-center font-serif text-[10px] font-bold"
                        style={{ border: "1px solid var(--border)", color: "var(--primary)", boxShadow: "0 2px 6px rgba(10,22,40,0.1)" }}>
                        {step.num}
                      </span>
                    </motion.div>
                  </div>

                  {/* Desktop: alternating left/right layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-16">
                    {/* Phase label side */}
                    <div className={isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:order-2"}>
                      <div className={"inline-flex flex-col gap-2 " + (isLeft ? "md:items-end" : "md:items-start")}>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-3xl font-semibold" style={{ color: "var(--primary)" }}>
                            {step.num}
                          </span>
                          <span className="h-px w-8" style={{ background: "var(--primary)" }} />
                        </div>
                        <h4 className="font-serif text-3xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                          {step.phase}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                          style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)", border: "1px solid rgba(0,82,204,0.15)" }}>
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                          {step.time}
                        </span>
                      </div>
                    </div>

                    {/* Content card side */}
                    <div className={isLeft ? "md:pl-16" : "md:pr-16 md:order-1 md:text-right"}>
                      <div className="card-clean p-7 relative overflow-hidden group">
                        {/* Gradient accent stripe */}
                        <div className={"absolute top-0 h-1 transition-transform duration-500 " + (isLeft ? "left-0 right-0" : "left-0 right-0")}
                          style={{
                            background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))",
                            transformOrigin: isLeft ? "left" : "right",
                          }} />

                        {/* Connecting dot to vertical line */}
                        <div className={"absolute top-6 h-3 w-3 rounded-full hidden md:block " + (isLeft ? "-left-[8px]" : "-right-[8px]")}
                          style={{ background: "var(--primary)", boxShadow: "0 0 0 4px #fff" }} />

                        <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-left"
                          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                          {step.title}
                        </h3>
                        <p className="text-base leading-relaxed mb-5 text-left" style={{ color: "var(--text-secondary)" }}>
                          {step.description}
                        </p>
                        <div className="pt-5 text-left" style={{ borderTop: "1px solid var(--border)" }}>
                          <div className="flex items-center gap-2 mb-3">
                            <ArrowRight className="h-3.5 w-3.5" style={{ color: "var(--primary)" }} />
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                              You'll receive
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {step.outputs.map((out) => (<span key={out} className="tag-chip">{out}</span>))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: single stacked layout — left-aligned with icon on the line */}
                  <div className="md:hidden pl-[90px]">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-serif text-2xl font-semibold" style={{ color: "var(--primary)" }}>
                          {step.num}
                        </span>
                        <span className="h-px w-6" style={{ background: "var(--primary)" }} />
                        <h4 className="font-serif text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                          {step.phase}
                        </h4>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                        style={{ background: "rgba(0,82,204,0.08)", color: "var(--primary)", border: "1px solid rgba(0,82,204,0.15)" }}>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                        {step.time}
                      </span>
                    </div>

                    <div className="card-clean p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1"
                        style={{ background: "linear-gradient(90deg, var(--primary), var(--accent-cyan))" }} />
                      <h3 className="font-serif text-xl font-semibold mb-3"
                        style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                        {step.description}
                      </p>
                      <div className="pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                        <div className="flex items-center gap-2 mb-3">
                          <ArrowRight className="h-3 w-3" style={{ color: "var(--primary)" }} />
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
                            You'll receive
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.outputs.map((out) => (<span key={out} className="tag-chip">{out}</span>))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom completion badge */}
        <motion.div className="flex justify-center mt-20"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(0,82,204,0.06), rgba(6,182,212,0.04))",
              border: "1px solid rgba(0,82,204,0.15)",
            }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--primary)" }}>
              Your project, live in 10 weeks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}