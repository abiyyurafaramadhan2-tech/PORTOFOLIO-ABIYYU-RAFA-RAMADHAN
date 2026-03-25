"use client";
import { motion } from "framer-motion";
import { person, education } from "@/lib/data";

const C = { hidden:{}, visible:{ transition:{ staggerChildren:0.13, delayChildren:0.4 } } };
const I = { hidden:{ opacity:0, y:36 }, visible:{ opacity:1, y:0, transition:{ duration:0.85, ease:[0.76,0,0.24,1] } } };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop:"80px" }}>

      {/* Ambient blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none" style={{ background:"radial-gradient(circle, var(--gold), transparent)" }} />
      <div className="absolute bottom-[10%] left-[-8%] w-[350px] h-[350px] rounded-full opacity-[0.04] pointer-events-none" style={{ background:"radial-gradient(circle, var(--gold), transparent)" }} />

      {/* Grid lines deco */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage:"linear-gradient(var(--fg) 1px,transparent 1px),linear-gradient(90deg,var(--fg) 1px,transparent 1px)",
        backgroundSize:"80px 80px",
      }} />

      <div className="max-w-6xl mx-auto px-5 lg:px-10 w-full py-24">
        <motion.div variants={C} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <motion.div variants={I} className="flex items-center gap-3">
              <span className="inline-block w-10 h-px" style={{ background:"var(--gold)" }} />
              <span className="section-tag">Perkenalan</span>
            </motion.div>

            <motion.h1 variants={I} className="font-display leading-[1.02]">
              <span className="block text-5xl md:text-7xl font-bold" style={{ color:"var(--fg)" }}>Halo, saya</span>
              <span className="block text-5xl md:text-7xl font-bold italic gold-text">Abiyyu</span>
              <span className="block text-5xl md:text-7xl font-bold" style={{ color:"var(--fg)" }}>Rafa Ramadhan.</span>
            </motion.h1>

            <motion.p variants={I} className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color:"var(--fg-soft)" }}>
              {person.intro}
            </motion.p>

            <motion.div variants={I} className="flex flex-wrap items-center gap-3">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ border:"1px solid var(--gold)", color:"var(--gold)", background:"transparent" }}
              >
                <span>🎓</span> {education.major}
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ border:"1px solid var(--border)", color:"var(--fg-muted)" }}
              >
                <span>📍</span> {person.location}
              </div>
            </motion.div>

            <motion.div variants={I} className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior:"smooth" })}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}
              >
                Kenali Saya <span>→</span>
              </button>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ border:"1px solid var(--border)", color:"var(--fg)", background:"var(--bg-card)" }}
              >
                ✉️ Email Saya
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Identity card */}
          <motion.div variants={I} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div
                className="w-[300px] rounded-3xl p-8 relative overflow-hidden"
                style={{ background:"var(--bg-card)", border:"1px solid var(--border)", boxShadow:"0 40px 80px var(--shadow)" }}
              >
                {/* Gold top bar */}
                <div className="h-0.5 w-full absolute top-0 left-0 rounded-t-3xl" style={{ background:"linear-gradient(90deg,var(--gold),var(--gold-l),var(--gold))" }} />

                {/* Avatar circle */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-3xl mb-5 mx-auto"
                  style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}>
                  AR
                </div>

                <div className="text-center mb-5">
                  <h3 className="font-display font-bold text-xl" style={{ color:"var(--fg)" }}>{person.name}</h3>
                  <p className="text-xs mt-1 font-mono" style={{ color:"var(--gold)" }}>{education.major}</p>
                  <p className="text-xs mt-0.5" style={{ color:"var(--fg-muted)" }}>{education.school}</p>
                </div>

                <div className="divider mb-4" />

                <div className="flex flex-col gap-2">
                  {[["📍", person.location],["✉️", person.email],["📱", person.phone]].map(([icon,val]) => (
                    <div key={val} className="flex items-center gap-2">
                      <span className="text-sm">{icon}</span>
                      <span className="text-xs truncate" style={{ color:"var(--fg-muted)" }}>{val}</span>
                    </div>
                  ))}
                </div>

                {/* Available badge */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background:"#4ADE80", display:"inline-block" }} />
                  <span className="text-xs" style={{ color:"var(--fg-muted)" }}>Terbuka untuk kesempatan baru</span>
                </div>

                {/* BG deco */}
                <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-[0.06]" style={{ background:"var(--gold)" }} />
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y:[-5,5,-5] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
                className="absolute -right-10 top-10 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl"
                style={{ background:"var(--bg-card)", border:"1px solid var(--border)", color:"var(--fg-soft)" }}>
                🏆 LSP 2026
              </motion.div>
              <motion.div animate={{ y:[5,-5,5] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:1 }}
                className="absolute -left-10 bottom-16 px-3 py-2 rounded-xl text-xs font-semibold shadow-xl"
                style={{ background:"var(--bg-card)", border:"1px solid var(--border)", color:"var(--fg-soft)" }}>
                📜 Google PM
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="section-tag text-[9px]" style={{ color:"var(--fg-muted)" }}>scroll</span>
          <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity }}
            className="w-px h-10" style={{ background:"linear-gradient(to bottom,var(--gold),transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
              }
