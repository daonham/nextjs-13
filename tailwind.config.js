/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require( '@tailwindcss/line-clamp' ),
	require( '@tailwindcss/aspect-ratio' ),
	require( '@tailwindcss/forms' ),
    require('@tailwindcss/typography'),
  ],
};
