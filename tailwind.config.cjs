/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      logoImage: {
        src: "./src/assets/logo.svg",
        alt: "Tailwind CSS Logo",
      },
      fontFamily: {
        minecraft: ["Minecraft", "sans-serif"],
      },
    },
  },
  plugins: [],
};
