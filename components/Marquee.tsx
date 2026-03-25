"use client";
import { marqueeWords } from "@/lib/data";

const items = [...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords];

export default function Marquee() {
  return (
    <div className="py-8 overflow-hidden" style={{ borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      {/* Row 1 */}
      <div className="mq-wrap mb-2">
        <div className="mq-track">
          {items.map((w, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="font-display italic text-2xl md:text-3xl font-semibold" style={{ color:"var(--fg)", opacity:0.65 }}>{w}</span>
              <span style={{ color:"var(--gold)", fontSize:"0.7rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
      {/* Row 2 — reverse */}
      <div className="mq-wrap">
        <div className="mq-track rev">
          {[...items].reverse().map((w, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="font-display text-2xl md:text-3xl font-bold gold-text">{w}</span>
              <span style={{ color:"var(--border)", fontSize:"0.7rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
