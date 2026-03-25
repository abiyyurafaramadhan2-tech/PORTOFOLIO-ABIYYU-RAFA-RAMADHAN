"use client";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import { hardSkills, softSkills } from "@/lib/data";

export default function Skills() {
  const { ref, inView } = useReveal();
  return (
    <section id="skills" className="py-24 md:py-36" style={{ background:"var(--bg-soft)" }}>
      <div className="max-w-6xl mx-auto px-5 lg:px-10">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
            <span className="section-tag">Keahlian</span>
            <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color:"var(--fg)" }}>
            Apa yang Saya <span className="italic gold-text">Kuasai</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Hard skills */}
          <motion.div initial={{ opacity:0, x:-40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8 }}
            className="rounded-3xl p-8" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
            <h3 className="font-display font-semibold text-xl mb-7 flex items-center gap-2" style={{ color:"var(--fg)" }}>
              <span style={{ color:"var(--gold)" }}>⚙️</span> Hard Skills
            </h3>
            <div className="flex flex-col gap-5">
              {hardSkills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color:"var(--fg-soft)" }}>{s.name}</span>
                    <span className="font-mono text-xs" style={{ color:"var(--gold)" }}>{s.level}%</span>
                  </div>
                  <div className="w-full h-px rounded-full" style={{ background:"var(--border)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background:"linear-gradient(90deg,var(--gold),var(--gold-l))" }}
                      initial={{ width:0 }}
                      animate={inView ? { width:`${s.level}%` } : { width:0 }}
                      transition={{ duration:1.1, delay:0.2+i*0.1, ease:"easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft skills */}
          <motion.div initial={{ opacity:0, x:40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.1 }}
            className="rounded-3xl p-8" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
            <h3 className="font-display font-semibold text-xl mb-7 flex items-center gap-2" style={{ color:"var(--fg)" }}>
              <span style={{ color:"var(--gold)" }}>🤝</span> Soft Skills
            </h3>
            <div className="flex flex-col gap-3">
              {softSkills.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity:0, x:20 }}
                  animate={inView ? { opacity:1, x:0 } : {}}
                  transition={{ duration:0.5, delay:0.1+i*0.1 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl"
                  style={{ background:"var(--bg-soft)", border:"1px solid var(--border)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background:"var(--gold)" }} />
                  <span className="text-sm" style={{ color:"var(--fg-soft)" }}>{s}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
