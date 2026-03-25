"use client";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const { ref, inView } = useReveal();
  return (
    <section id="certificates" className="py-24 md:py-32" style={{ background:"var(--bg-soft)" }}>
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
            <span className="section-tag">Pencapaian</span>
            <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color:"var(--fg)" }}>
            Sertifikat & <span className="italic gold-text">Pengakuan</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certificates.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity:0, y:40 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, delay:i*0.15 }}
              className="relative rounded-3xl p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor="var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor="var(--border)")}
            >
              {/* Top gold line */}
              <div className="h-0.5 w-full absolute top-0 left-0 rounded-t-3xl opacity-60"
                style={{ background:"linear-gradient(90deg,var(--gold),var(--gold-l),transparent)" }} />

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background:"linear-gradient(135deg,rgba(212,168,67,0.15),rgba(232,194,112,0.08))", border:"1px solid rgba(212,168,67,0.25)" }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg leading-snug mb-1.5" style={{ color:"var(--fg)" }}>{c.name}</h3>
                  <p className="text-sm" style={{ color:"var(--gold)" }}>{c.issuer}</p>
                  <p className="font-mono text-xs mt-1" style={{ color:"var(--fg-muted)" }}>{c.year}</p>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color:"var(--fg-muted)" }}>{c.desc}</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity"
                style={{ background:"var(--gold)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
