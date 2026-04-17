import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf6ef",
          100: "#f9e6d0",
          200: "#f0c79a",
          300: "#e3a161",
          400: "#d3803a",
          500: "#b96322",
          600: "#964d1a",
          700: "#713a18",
          800: "#4e2a13",
          900: "#2e1a0d",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
