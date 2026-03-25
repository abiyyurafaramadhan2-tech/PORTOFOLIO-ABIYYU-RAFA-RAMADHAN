"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar       from "@/components/Navbar";
import Preloader    from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dark,    setDark]    = useState(true);
  const [loaded,  setLoaded]  = useState(false);

  useEffect(() => {
    const s = localStorage.getItem("theme");
    setDark(s !== "light");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) { root.classList.add("dark");    localStorage.setItem("theme","dark");  }
    else      { root.classList.remove("dark"); localStorage.setItem("theme","light"); }
  }, [dark]);

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <title>Abiyyu Rafa Ramadhan</title>
        <meta name="description" content="Portfolio Abiyyu Rafa Ramadhan — Teknik Elektronika Industri, SMKN 1 Purwakarta." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" />
      </head>
      <body>
        <LenisProvider>
          <CustomCursor />
          {!loaded && <Preloader onDone={() => setLoaded(true)} />}
          <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
            <Navbar dark={dark} toggle={() => setDark(!dark)} />
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
