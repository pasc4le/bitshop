/*  Types  */
import type { Config } from "tailwindcss";

/* Symbols */
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: ["Inter", ...defaultTheme.fontFamily.sans],
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif,
      mono: defaultTheme.fontFamily.mono,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#333E48",
          secondary: "#fff",
          accent: "#f7931a",
          neutral: "#392831",
          "base-100": "#e6ffff",
          "base-content": "#000",
          info: "#00d8fd",
          success: "#4dea00",
          warning: "#ffb300",
          error: "#ff75a0",
        },
        dark: {
          primary: "#222",
          secondary: "#fff",
          accent: "#f7931a",
          neutral: "#392831",
          "base-100": "#111",
          "base-content": "#fff",
          info: "#00d8fd",
          success: "#4dea00",
          warning: "#ffb300",
          error: "#ff75a0",
        },
      },
    ],
  },
};
export default config;
