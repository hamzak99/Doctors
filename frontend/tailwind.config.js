/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#5F6FFF",
        primary: "#5F6FFF",
        Text_primary: "#1F2937",
        Text_secondary: "#4B5563",
      },
    },
  },
  plugins: [],
};
