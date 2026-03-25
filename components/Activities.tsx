"use client";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import { activities } from "@/lib/data";

export default function Activities() {
  const { ref, inView } = useReveal();
  return (
    <section id="activities" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-14">

          {/* LEFT sticky */}
          <motion.div initial={{ opacity:0, x:-40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8 }}
            className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
                <span className="section-tag">Kegiatan</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-5" style={{ color:"var(--fg)" }}>
                Apa yang Saya <span className="italic gold-text">Lakukan</span>
              </h2>
              <p className="text-sm leading-loose" style={{ color:"var(--fg-muted)" }}>
                Meski belum memiliki pengalaman kerja formal, berbagai kegiatan selama masa sekolah telah membentuk
                fondasi yang kuat dalam hal komunikasi, kepemimpinan, dan ketangguhan.
              </p>
            </div>
          </motion.div>

          {/* RIGHT cards */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {activities.map((act, i) => (
              <motion.div
                key={act.title}
                initial={{ opacity:0, y:40 }}
                animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.7, delay:0.1+i*0.14 }}
                className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background:"var(--bg-card)", border:"1px solid var(--border)", boxShadow:"0 0 0 var(--shadow)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow="0 20px 50px var(--shadow)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow="0 0 0 var(--shadow)")}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background:"var(--bg-soft)", border:"1px solid var(--border)" }}>
                    {act.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <h3 className="font-display font-semibold text-lg" style={{ color:"var(--fg)" }}>{act.title}</h3>
                        <p className="text-sm" style={{ color:"var(--gold)" }}>{act.place}</p>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-full shrink-0"
                        style={{ background:"var(--bg-soft)", color:"var(--fg-muted)", border:"1px solid var(--border)" }}>
                        {act.period}
                      </span>
                    </div>
                    <p className="text-sm leading-loose mb-4" style={{ color:"var(--fg-soft)" }}>{act.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {act.tags.map(t => (
                        <span key={t} className="text-[11px] px-2.5 py-1 rounded-full"
                          style={{ background:"var(--bg-soft)", color:"var(--fg-muted)", border:"1px solid var(--border)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Hover gold line */}
                <div className="h-px mt-4 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background:"linear-gradient(90deg,var(--gold),transparent)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
