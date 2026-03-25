"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { person } from "@/lib/data";

const LINKS = [
  { label:"Tentang",      href:"#about"        },
  { label:"Keahlian",     href:"#skills"        },
  { label:"Kegiatan",     href:"#activities"    },
  { label:"Sertifikat",   href:"#certificates"  },
  { label:"Kontak",       href:"#contact"       },
];

export default function Navbar({ dark, toggle }: { dark:boolean; toggle:()=>void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y:-70, opacity:0 }}
        animate={{ y:0,   opacity:1 }}
        transition={{ duration:0.7, delay:0.2, ease:[0.76,0,0.24,1] }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled
            ? dark ? "rgba(5,9,20,0.93)"  : "rgba(248,243,236,0.93)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom:   scrolled ? "1px solid var(--border)" : "none",
          transition:     "background .4s,border .4s,backdrop-filter .4s",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm transition-transform group-hover:scale-110"
              style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}
            >
              AR
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-semibold text-sm" style={{ color:"var(--fg)" }}>
                {person.name.split(" ")[0]}{" "}
                <span style={{ color:"var(--gold)" }}>{person.name.split(" ").slice(1).join(" ")}</span>
              </p>
              <p className="section-tag text-[9px]">Portfolio</p>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ color:"var(--fg-soft)" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="var(--gold)")}
                  onMouseLeave={e=>(e.currentTarget.style.color="var(--fg-soft)")}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all hover:scale-110"
              style={{ border:"1px solid var(--border)", background:"var(--bg-card)", color:"var(--fg)" }}
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${person.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}
            >
              💬 WhatsApp
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            >
              {[0,1,2].map(i => (
                <span key={i} className={`block h-px w-5 transition-all duration-300 ${
                  open
                    ? i===0 ? "rotate-45 translate-y-[6px]"
                    : i===1 ? "opacity-0"
                    : "-rotate-45 -translate-y-[6px]"
                    : ""
                }`} style={{ background:"var(--fg)" }} />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-10 }}
            animate={{ opacity:1, y:0 }}
            exit={{   opacity:0, y:-10 }}
            transition={{ duration:0.25 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden"
            style={{ background: dark ? "rgba(5,9,20,0.97)" : "rgba(248,243,236,0.97)", backdropFilter:"blur(16px)", borderBottom:"1px solid var(--border)" }}
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ opacity:0, x:-16 }}
                  animate={{ opacity:1, x:0 }}
                  transition={{ delay:i*0.06 }}
                  onClick={() => go(l.href)}
                  className="text-left py-3 px-2 font-display text-xl font-semibold border-b"
                  style={{ color:"var(--fg)", borderColor:"var(--border)" }}
                >
                  {l.label}
                </motion.button>
              ))}
              <a
                href={`https://wa.me/${person.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="mt-3 py-3 rounded-xl text-center text-sm font-bold transition-all"
                style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}
              >
                💬 Chat WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
