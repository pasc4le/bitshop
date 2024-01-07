/* Types */
import type { Config } from "tailwindcss";

/* Symbols */
import { tailwindConfig } from "@bitshop/tailwind-config";

const config: Config = {
  ...tailwindConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
