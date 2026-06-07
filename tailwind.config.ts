import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acm: {
          background: "#050816",
          surface: "rgba(255,255,255,0.03)",
          primary: "#2563eb",
          secondary: "#60a5fa",
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 0 rgba(37, 99, 235, 0)",
            opacity: "0.85",
          },
          "50%": {
            boxShadow: "0 0 34px rgba(37, 99, 235, 0.45)",
            opacity: "1",
          },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
