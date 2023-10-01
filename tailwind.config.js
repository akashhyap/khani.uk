/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        eerie: "#1e2121",
        lavender: "#f6e9e9",
        poppy: {
          50: "rgba(219, 67, 67, 0.1)",
          100: "rgba(219, 67, 67, 0.2)",
          200: "rgba(219, 67, 67, 0.3)",
          300: "rgba(219, 67, 67, 0.4)",
          400: "rgba(219, 67, 67, 0.5)",
          500: "rgba(219, 67, 67, 0.6)",
          600: "rgba(219, 67, 67, 0.7)",
          700: "rgba(219, 67, 67, 0.8)",
          800: "rgba(219, 67, 67, 0.9)",
          900: "rgba(219, 67, 67, 1)",
        },
        salmon: {
          50: "rgba(250, 149, 151, 0.1)",
          100: "rgba(250, 149, 151, 0.2)",
          200: "rgba(250, 149, 151, 0.3)",
          300: "rgba(250, 149, 151, 0.4)",
          400: "rgba(250, 149, 151, 0.5)",
          500: "rgba(250, 149, 151, 0.6)",
          600: "rgba(250, 149, 151, 0.7)",
          700: "rgba(250, 149, 151, 0.8)",
          800: "rgba(250, 149, 151, 0.9)",
          900: "rgba(250, 149, 151, 1)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
