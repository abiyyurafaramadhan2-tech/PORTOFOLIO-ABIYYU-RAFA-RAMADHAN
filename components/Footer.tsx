"use client";
import { motion } from "framer-motion";
import { person } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)" }}>
      {/* CTA banner */}
      <div className="relative overflow-hidden py-24" style={{ background:"var(--bg-soft)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
          style={{ background:"radial-gradient(circle,var(--gold),transparent)" }} />

        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
            <div className="font-display italic text-6xl font-bold opacity-10 mb-4" style={{ color:"var(--gold)" }}>✦</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color:"var(--fg)" }}>
              Yuk, <span className="italic gold-text">ngobrol!</span>
            </h2>
            <p className="text-base mb-8 max-w-sm mx-auto" style={{ color:"var(--fg-muted)" }}>
              Selalu senang bertemu orang-orang baru dan berbagi cerita.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}>
                ✉️ Kirim Email
              </a>
              <a href={`https://wa.me/${person.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ border:"1px solid var(--border)", color:"var(--fg)", background:"var(--bg-card)" }}>
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-5 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}>AR</div>
          <span className="text-sm font-medium" style={{ color:"var(--fg-muted)" }}>{person.name}</span>
        </div>
        <p className="text-xs text-center" style={{ color:"var(--fg-muted)" }}>
          © {new Date().getFullYear()} · {person.location} · Dibuat dengan 💛
        </p>
        <a href={`mailto:${person.email}`} className="text-xs transition-colors hover:text-yellow-500" style={{ color:"var(--fg-muted)" }}>
          {person.email}
        </a>
      </div>
    </footer>
  );
}
