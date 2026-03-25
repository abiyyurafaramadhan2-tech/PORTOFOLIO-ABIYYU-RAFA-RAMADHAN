"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const l = new Lenis({ duration:1.3, easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)), smoothWheel:true });
    const raf = (time:number) => { l.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => l.destroy();
  }, []);
  return <>{children}</>;
}
