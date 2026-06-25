import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f3eb",
        surface: "#fffaf1",
        charcoal: "#171514",
        muted: "#6f6960",
        line: "#ded6c8",
        accent: "#4500fb",
        yellow: "#ffcc33",
        red: "#f1442e"
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque Variable", "Bricolage Grotesque", "system-ui", "sans-serif"]
      },
      boxShadow: {
        keycap: "0 22px 0 #24115d, 0 36px 55px rgba(23, 21, 20, 0.26)",
        soft: "0 24px 70px rgba(23, 21, 20, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
