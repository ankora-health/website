import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import unimportant from "./plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1240px",
    },
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        base: ["1rem", { lineHeight: "1.125rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      colors: {
        footer: "#FFEDD6",
        orange: "#F97B5C",
        primary: "#171717",
        grey: {
          900: "#303030",
          800: "#484848",
          700: "#686868",
          500: "#9B9B9B",
          300: "#D5D5D5",
        },
        accent: {
          25: "#FFEDD6",
          23: "#FFD69B",
          21: "#FFBF5F",
        },
      },
      borderRadius: {
        button: "0.4375rem",
      },
    },
  },
  plugins: [unimportant],
};
export default config;
