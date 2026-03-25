"use client";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import { person, education } from "@/lib/data";

export default function About() {
  const { ref, inView } = useReveal();
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity:0, x:-50 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.9 }}>
            {/* Quote card */}
            <div className="rounded-3xl p-9 relative overflow-hidden mb-6" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
              <div className="font-display text-8xl font-bold opacity-15 leading-none mb-3" style={{ color:"var(--gold)" }}>"</div>
              <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed" style={{ color:"var(--fg)" }}>
                Belajar bukan sekadar menghafal, tapi memahami dan menerapkan.
              </blockquote>
              <div className="flex items-center gap-3 mt-5">
                <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
                <span className="font-mono text-xs" style={{ color:"var(--fg-muted)" }}>{person.name}</span>
              </div>
              <div className="absolute bottom-0 right-0 w-28 h-28 rounded-tl-full opacity-[0.06]" style={{ background:"var(--gold)" }} />
            </div>

            {/* Education card */}
            <div className="rounded-2xl p-6" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
              <p className="section-tag mb-3">Pendidikan</p>
              <h4 className="font-display font-semibold text-xl" style={{ color:"var(--fg)" }}>{education.school}</h4>
              <p className="text-sm mt-1" style={{ color:"var(--gold)" }}>{education.major}</p>
              <p className="text-xs mt-1 font-mono" style={{ color:"var(--fg-muted)" }}>{education.period}</p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity:0, x:50 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.9, delay:0.15 }}
            className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
              <span className="section-tag">Tentang Saya</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color:"var(--fg)" }}>
              Siapa <span className="italic gold-text">Saya</span>?
            </h2>

            <p className="text-base leading-loose" style={{ color:"var(--fg-soft)" }}>{person.about}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[["2026","Lulus"],["2","Sertifikat"],["100%","Semangat"]].map(([n,l]) => (
                <div key={l} className="text-center py-4 rounded-2xl" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
                  <div className="font-display font-bold text-2xl gold-text">{n}</div>
                  <div className="text-xs mt-1" style={{ color:"var(--fg-muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
