/* Types */
import type { Config } from "tailwindcss";

/* Symbols */
import path from "node:path";
import { mainPreset } from "@bitshop/tailwind-config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(
      path.dirname(require.resolve("@bitshop/ui")),
      "**/*.{ts,tsx,js,jsx,mdx}",
    ),
  ],
  presets: [mainPreset],
};

export default config;
