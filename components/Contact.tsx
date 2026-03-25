"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";
import { person } from "@/lib/data";

export default function Contact() {
  const { ref, inView } = useReveal();
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub  = encodeURIComponent(form.subject || `Pesan dari ${form.name}`);
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${person.email}?subject=${sub}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inp = {
    background:"var(--bg-soft)",
    border:"1px solid var(--border)",
    color:"var(--fg)",
    borderRadius:"12px",
    padding:"12px 16px",
    width:"100%",
    fontSize:"14px",
    fontFamily:"var(--font-jakarta)",
    outline:"none",
    transition:"border-color .2s",
  } as React.CSSProperties;

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">

        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1,y:0 } : {}} transition={{ duration:0.8 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
            <span className="section-tag">Kontak</span>
            <span className="inline-block w-8 h-px" style={{ background:"var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-3" style={{ color:"var(--fg)" }}>
            Mari <span className="italic gold-text">Terhubung</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color:"var(--fg-muted)" }}>
            Terbuka untuk diskusi, kolaborasi, maupun kesempatan belajar bersama.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* LEFT info */}
          <motion.div initial={{ opacity:0, x:-40 }} animate={inView ? { opacity:1,x:0 } : {}} transition={{ duration:0.8 }}
            className="lg:col-span-2 flex flex-col gap-4">

            {[
              { icon:"✉️", label:"Email",   val:person.email,   href:`mailto:${person.email}` },
              { icon:"📱", label:"Telepon", val:person.phone,   href:`tel:${person.phone}` },
              { icon:"📍", label:"Lokasi",  val:person.location, href:null },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 p-5 rounded-2xl" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background:"var(--bg-soft)" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="section-tag text-[9px] mb-0.5">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-sm transition-colors hover:text-yellow-500" style={{ color:"var(--fg-soft)" }}>{item.val}</a>
                    : <p className="text-sm" style={{ color:"var(--fg-soft)" }}>{item.val}</p>
                  }
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${person.whatsapp}?text=Halo%20Abiyyu!`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all hover:scale-105 hover:shadow-xl"
              style={{ background:"linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}
            >
              💬 Chat via WhatsApp
            </a>

            {/* Location note */}
            <div className="rounded-2xl p-5 text-center" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
              <div className="text-2xl mb-2">🗺️</div>
              <p className="font-semibold text-sm" style={{ color:"var(--fg)" }}>{person.location}</p>
              <p className="text-xs mt-1" style={{ color:"var(--fg-muted)" }}>Indonesia</p>
            </div>
          </motion.div>

          {/* RIGHT form */}
          <motion.div initial={{ opacity:0, x:40 }} animate={inView ? { opacity:1,x:0 } : {}} transition={{ duration:0.8, delay:0.15 }}
            className="lg:col-span-3">
            <div className="rounded-3xl p-8 md:p-10" style={{ background:"var(--bg-card)", border:"1px solid var(--border)" }}>
              <h3 className="font-display font-semibold text-2xl mb-7" style={{ color:"var(--fg)" }}>Kirim Pesan</h3>
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="section-tag text-[9px]">Nama</label>
                    <input type="text" required placeholder="Nama kamu" style={inp}
                      value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                      onFocus={e => (e.target.style.borderColor="var(--gold)")}
                      onBlur={e  => (e.target.style.borderColor="var(--border)")} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="section-tag text-[9px]">Email</label>
                    <input type="email" required placeholder="email@kamu.com" style={inp}
                      value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                      onFocus={e => (e.target.style.borderColor="var(--gold)")}
                      onBlur={e  => (e.target.style.borderColor="var(--border)")} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="section-tag text-[9px]">Subjek</label>
                  <input type="text" placeholder="Topik pesan" style={inp}
                    value={form.subject} onChange={e => setForm({...form,subject:e.target.value})}
                    onFocus={e => (e.target.style.borderColor="var(--gold)")}
                    onBlur={e  => (e.target.style.borderColor="var(--border)")} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="section-tag text-[9px]">Pesan</label>
                  <textarea required rows={5} placeholder="Tuliskan pesanmu di sini..."
                    style={{ ...inp, resize:"vertical" }}
                    value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                    onFocus={e => (e.target.style.borderColor="var(--gold)")}
                    onBlur={e  => (e.target.style.borderColor="var(--border)")} />
                </div>
                <button type="submit"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-xl mt-1"
                  style={{ background: sent ? "#4ADE80" : "linear-gradient(135deg,var(--gold),var(--gold-l))", color:"#050914" }}>
                  {sent ? "✓ Membuka email..." : "Kirim Pesan →"}
                </button>
                <p className="text-xs text-center" style={{ color:"var(--fg-muted)" }}>
                  Form ini akan membuka email client kamu secara otomatis.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
