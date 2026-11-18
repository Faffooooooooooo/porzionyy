/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F7", sand: "#F5F1EA", accent: "#FF8A3D", "accent-ink": "#B8500D",
        slate: "#5D7FA3", sage: "#8FAE8A", ink: "#1F2937",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,41,55,.05), 0 12px 32px -12px rgba(31,41,55,.12)",
        lift: "0 20px 44px -16px rgba(31,41,55,.22)",
      },
    },
  },
  plugins: [],
};
