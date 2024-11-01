import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            hr: {
              borderColor: "hsl(var(--border))",
              marginTop: "3em",
              marginBottom: "3em",
            },
            "h1, h2, h3, h4": {
              color: "hsl(var(--foreground))",
            },
            a: {
              color: "hsl(var(--primary))",
              "&:hover": {
                color: "hsl(var(--primary))",
              },
            },
            strong: {
              color: "hsl(var(--foreground))",
            },
            code: {
              color: "hsl(var(--foreground))",
            },
          },
        },
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
