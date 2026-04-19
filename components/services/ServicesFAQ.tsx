"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a typical project take?", a: "A landing page takes 2-3 weeks. Full web apps run 6-10 weeks. Mobile apps 8-14 weeks. We share weekly demos so you always know where things stand." },
  { q: "Do you work with international clients?", a: "Yes — we've delivered projects to clients in the US, UK, UAE, and across Europe. All communication is in English, and we adjust our hours to overlap with your timezone." },
  { q: "What happens after launch?", a: "Every project includes free support for 30-90 days (depending on tier). After that, we offer affordable maintenance retainers or pay-as-you-go support." },
  { q: "Can you join an existing team or codebase?", a: "Absolutely. We regularly augment in-house teams or take over existing codebases. We start with a short audit, then propose a clear plan." },
  { q: "Do I own the code and design files?", a: "Yes — 100%. On final payment, all IP, code, design files, and assets transfer to you. We never lock clients into proprietary tools." },
  { q: "Can you sign an NDA?", a: "Always. We sign NDAs before any detailed discussion if your project is sensitive. Our standard contract also includes confidentiality clauses." },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 px-6 section-gray overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="eyebrow justify-center">Frequently Asked</span>
            <h2 className="big-heading mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Answers to the<br />
              <span className="gradient-text italic font-serif">questions that matter.</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <motion.div key={faq.q} className="card-clean overflow-hidden"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                <button onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="font-serif text-sm font-semibold flex-shrink-0" style={{ color: "var(--primary)" }}>
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-lg md:text-xl font-semibold" style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                      {faq.q}
                    </span>
                  </div>
                  <motion.span className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: isOpen ? "var(--primary)" : "rgba(0,82,204,0.08)", color: isOpen ? "#fff" : "var(--primary)" }}
                    animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                      <div className="px-6 pb-6 pl-[60px] text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}