/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B4133",
        primaryHover: "#7A8868",
        primaryText: " #EDDB80",
      },
    },
  },
  plugins: [],
};
