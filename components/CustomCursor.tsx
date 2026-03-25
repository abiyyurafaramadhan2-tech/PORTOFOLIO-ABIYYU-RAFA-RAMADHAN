"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx=0,my=0,rx=0,ry=0;
    const move = (e:MouseEvent) => { mx=e.clientX; my=e.clientY; };
    window.addEventListener("mousemove",move);

    const tick = () => {
      rx+=(mx-rx)*0.11; ry+=(my-ry)*0.11;
      if(dot.current)  dot.current.style.transform  = `translate(${mx-3.5}px,${my-3.5}px)`;
      if(ring.current) ring.current.style.transform = `translate(${rx-17}px,${ry-17}px)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const els = document.querySelectorAll("a,button,[data-cursor]");
    const on  = ()=>ring.current?.classList.add("hov");
    const off = ()=>ring.current?.classList.remove("hov");
    els.forEach(e=>{ e.addEventListener("mouseenter",on); e.addEventListener("mouseleave",off); });

    return () => window.removeEventListener("mousemove",move);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot  hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
}
