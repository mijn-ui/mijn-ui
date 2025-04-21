import { mijnui } from "@mijn-ui/react-theme"
import type { Config } from "tailwindcss"
import animationPlugin from "tailwindcss-animate"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@mijn-ui/**/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },

      fontSize: {
        xxs: "0.625rem",
      },
      borderRadius: {
        default: "0.25rem",
      },
    },
  },
  plugins: [animationPlugin, mijnui({})],
}
export default config
