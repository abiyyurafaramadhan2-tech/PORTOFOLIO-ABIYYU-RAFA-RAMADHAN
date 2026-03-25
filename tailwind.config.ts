import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)","Georgia","serif"],
        body:    ["var(--font-jakarta)","system-ui","sans-serif"],
        mono:    ["var(--font-jetbrains)","monospace"],
      },
      colors: {
        ink:   { DEFAULT:"#050914", soft:"#0d1117", muted:"#1a2236" },
        cream: { DEFAULT:"#F8F3EC", soft:"#EFE9DF", muted:"#D4CAB8" },
        gold:  { DEFAULT:"#D4A843", light:"#E8C270", dark:"#A87C2A" },
        slate2:{ 400:"#94A3B8", 500:"#64748B", 600:"#475569" },
      },
      animation: {
        "marquee":     "marquee 30s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
        "float":       "float 5s ease-in-out infinite",
        "fade-up":     "fadeUp 0.7s ease forwards",
        "glow":        "glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee:    { "0%":{"transform":"translateX(0)"},    "100%":{"transform":"translateX(-50%)"}  },
        "marquee-rev":{ "0%":{"transform":"translateX(-50%)"},"100%":{"transform":"translateX(0)"}   },
        float:      { "0%,100%":{"transform":"translateY(0px)"},"50%":{"transform":"translateY(-12px)"} },
        fadeUp:     { "0%":{"opacity":"0","transform":"translateY(30px)"},"100%":{"opacity":"1","transform":"translateY(0)"} },
        glow:       { "0%,100%":{"opacity":"0.5"},"50%":{"opacity":"1"} },
      },
    },
  },
  plugins:[],
};
export default config;
