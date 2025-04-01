import type { Config } from "tailwindcss";
import { tokens } from "./src/theme/tokens";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../apps/*/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.typography.fontFamily,
      spacing: tokens.spacing,
    },
  },
  plugins: [],
};

export default config;
