import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": {
          "1": {
            "dark": colors.zinc["900"],
            "light": colors.zinc["100"],
          },
          "2": {
            "dark": "#1e1e21",
            // "dark": colors.zinc["800"],
            "light": colors.zinc["200"],
          },
          "3": {
            "dark": colors.zinc["950"],
            "light": colors.zinc["400"],
          },
        },
        "fg": {
          "1": {
            "dark": colors.zinc["50"],
            "light": colors.zinc["950"],
          },
          "2": {
            "dark": colors.zinc["500"],
            "light": colors.zinc["600"],
          },
          "3": {
            "dark": colors.zinc["800"],
            "light": colors.zinc["300"],
          },
          "4": {
            "dark": colors.zinc["300"],
            "light": colors.zinc["800"],
          },
        },
        "accent": {
          "1": {
            "dark": colors.indigo["400"],
            "light": colors.indigo["600"],
          },
          "2": {
            "dark": colors.indigo["300"],
            "light": colors.indigo["500"],
          },
          "3": {
            "dark": colors.yellow["200"],
            "light": colors.yellow["600"],
          },
        },
      },
      dropShadow: {
        "2xl-dark": "0 8px 8px rgba(255, 255, 255, 0.3)",
        "2xl-light": "0 8px 8px rgba(0, 0, 0, 0.3)",
        "xl-dark": "0 4px 8px rgba(255, 255, 255, 0.1)",
        "xl-light": "0 4px 8px rgba(0, 0, 0, 0.1)",
        "md-dark": "0 4px 6px rgba(255, 255, 255, 0.05)",
        "md-light": "0 4px 6px rgba(0, 0, 0, 0.05)",
      },
    },
    container: {
      center: true,
    },
  },
  darkMode: "class",
  plugins: [],
}
export default config
