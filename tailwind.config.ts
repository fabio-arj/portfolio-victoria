import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: "#F9E6F0",
        pink: "#FFA4D3",
        orange: "#FFD285",
        purple: "BFB0F2",
        black: "#2D2D2D",
        input: "#F3F3F3",
        lightclientpink: "#F6DCE9",
        clientborder: "#FFA4D3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        abril: ["Abril Fatface", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
