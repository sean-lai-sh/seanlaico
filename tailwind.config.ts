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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        contentFont: ["DM Serif", "serif"],
        titleFont: ["DM Sans", "sans-serif"],
        tomorrow: ["Tomorrow"],
      },
      keyframes: {
        redBlueWhite: {
          '0%': { color: 'rgb(239, 68, 68)' }, // Red
          '50%': { color: 'rgb(255,255,255)' }, // Blue
          '100%': { color: 'rgb(239, 68, 68)' }, // White
        },
      },
      animation: {
        redBlueWhite: 'redBlueWhite 3s infinite', // Adjust duration (3s) and repeat (infinite)
      },
    },
  },
  plugins: [],
};
export default config;
