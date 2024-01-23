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
        "primary-bg": {
          "dark": colors.zinc["900"],
          "light": colors.zinc["50"],
        },
        "secondary-bg": {
          "dark": colors.zinc["800"],
          "light": colors.zinc["300"],
        },
        "tertiary-bg": {
          "dark": colors.zinc["950"],
          "light": colors.zinc["300"],
        },
        "primary-fg": {
          "dark": colors.zinc["50"],
          "light": colors.zinc["950"],
        },
        "secondary-fg": {
          "dark": colors.zinc["500"],
          "light": colors.zinc["700"],
        },
        "tertiary-fg": {
          "dark": colors.zinc["800"],
          "light": colors.zinc["300"],
        },
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
