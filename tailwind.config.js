/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1440px",
    },
    extend: {
      fontFamily: {
        "sans-bold": ["Sans-Bold", "sans-serif"],
        "sans-semibold": ["Sans-Semibold", "sans-serif"],
        "sans-regular": ["Sans-Regular", "sans-serif"],
        "sans-light": ["Sans-Light", "sans-serif"],
        "sans-extrabold": ["Sans-Extrabold", "sans-serif"],
        "sans-medium": ["Sans-Medium", "sans-serif"],
      },
      colors: {
        white:"#fff",
        black:"#273029",
        soft_green:{
          DEFAULT: "#85c7dc",
          secondary:"#f3f9fb"
        },
        grey:{
          DEFAULT: "#888",
          secondary:"#f8f8f8"
        },
        pink:"#f3d1d7",
        body:"#e5e5e5",
        orange:"f2994a",
        outline:"#f1f1f1",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/oil-4.jpeg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}