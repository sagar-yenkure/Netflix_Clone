/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./assets/Home.jpg')",
        'hindihome':"url('./assets/hindihome.jpg')"
      }
    },
  },
  plugins: [],
}

