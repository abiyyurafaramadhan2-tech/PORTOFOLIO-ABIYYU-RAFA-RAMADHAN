"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [pct,  setPct]  = useState(0);
  const [out,  setOut]  = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setPct(p => {
        if (p >= 100) {
          clearInterval(iv);
          setTimeout(() => { setOut(true); setTimeout(onDone, 750); }, 250);
          return 100;
        }
        return p + Math.floor(Math.random()*7)+3;
      });
    }, 45);
    return () => clearInterval(iv);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!out && (
        <motion.div
          className="preloader"
          exit={{ clipPath:"inset(0 0 100% 0)" }}
          transition={{ duration:0.75, ease:[0.76,0,0.24,1] }}
        >
          {/* Decorative rings */}
          <div className="absolute w-[300px] h-[300px] rounded-full border opacity-5" style={{ borderColor:"var(--gold)" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full border opacity-10" style={{ borderColor:"var(--gold)" }} />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Monogram */}
            <motion.div
              initial={{ opacity:0, scale:0.8 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ duration:0.6 }}
              className="font-display font-bold text-7xl gold-text"
            >
              ARR
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}>
              <p className="section-tag mb-4 text-center">Memuat Portfolio</p>
              <div className="w-48 h-px" style={{ background:"var(--border)" }}>
                <motion.div
                  className="h-full"
                  style={{ background:"var(--gold)", width:`${Math.min(pct,100)}%` }}
                />
              </div>
              <p className="font-mono text-xs mt-2 text-center" style={{ color:"var(--fg-muted)" }}>
                {Math.min(pct,100)}%
              </p>
            </motion.div>
          </div>

          {/* Corner ornaments */}
          <span className="absolute top-8 left-8 font-display text-4xl opacity-10" style={{ color:"var(--gold)" }}>✦</span>
          <span className="absolute bottom-8 right-8 font-display text-4xl opacity-10" style={{ color:"var(--gold)" }}>✦</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
      }
