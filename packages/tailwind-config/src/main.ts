/*  Types  */
import type { Config } from "tailwindcss";

/* Symbols */
import defaultTheme from "tailwindcss/defaultTheme";
import { light, dark } from "./themes";

/* Main Configuration */
const preset: Partial<Config> = {
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
      buttons: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif,
      mono: defaultTheme.fontFamily.mono,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    utils: false,
    themes: [
      {
        light,
        dark,
      },
    ],
  },
};

export default preset;
