import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "#F1F5F9",
        foreground: "#000000",

        card: "#FFFFFF",
        "card-foreground": "#000000",
        "card-description": "#737373",

        popover: "#FFFFFF",
        "popover-foreground": "#000000",

        primary: "#F97316",
        "primary-foreground": "#ffffff",

        secondary: "#FED7AA",
        "secondary-foreground": "#C2410C",

        accent: "#F5F5F5",
        "accent-foreground": "#000000",

        muted: "#E5E5E5",
        "muted-foreground": "#404040",

        danger: "#DC2626",
        "danger-foreground": "#ffffff",

        border: "#D4D4D4",

        "ring-primary": "#F97316",
        "ring-white": "#ffffff",

        warning: "#EAB308",

        success: "#16A34A",
        "success-foreground": "#ffffff",

        placeholder: "#737373",

        disabled: "#E5E5E5",
        "disabled-foreground": "#a3a3a3",

        "kanban-background": "#e2e8f0",
        "kanban-secondary": "#cbd5e1",
        "kanban-indicator": "#6b7280",

        "html-logo": "#e34c26",
        "react-logo": "#0058cc",
        "laravel-logo": "#F05340",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      borderRadius: {
        default: "0.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
