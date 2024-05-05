import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '10px'
      },
      colors: {
        'blue-500': '#007bff', // Replaces the default blue color
        'purple-500': '#AB23FF', // Adds a new purple color
        'gray-900': '#13171D', // Adds a new gray color
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-in-out forwards', // Custom animation
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      screens: {
        'tablet': '980px'
      },
    },
  },
  plugins: [],
};
export default config;
