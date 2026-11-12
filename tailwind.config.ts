import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dlc: {
          blue: "#0C59D4",
          "blue-hover": "#0947AD",
          "blue-dark": "#072F75",
          "blue-light": "#EFF5FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      keyframes: {
        "marquee-rtl": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee-rtl 25s linear infinite",
        "marquee-rtl": "marquee-rtl 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
