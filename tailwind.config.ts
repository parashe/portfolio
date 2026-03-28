import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        port: {
          bg: "var(--port-bg)",
          bg2: "var(--port-bg2)",
          bg3: "var(--port-bg3)",
          surface: "var(--port-surface)",
          border: "var(--port-border)",
          border2: "var(--port-border2)",
          text: "var(--port-text)",
          text2: "var(--port-text2)",
          text3: "var(--port-text3)",
          accent: "var(--port-accent)",
          accent2: "var(--port-accent2)",
          accent3: "var(--port-accent3)",
          accent4: "var(--port-accent4)",
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
