/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Inter"
      },
      colors: {
        smoke: "hsla(0, 0%, 96%, 1)",
        lavender: "hsla(240, 33%, 86%, 1)",
        "slate-blue": "hsla(263, 100%, 68%, 1)",
        "ultra-violet": "hsla(254, 31%, 36%, 1)",
        "rasin-black": "hsla(240, 7%, 13%, 1)",
      },
      backgroundImage: {
        'main-background': "url('/public/img/Background.svg')"
      }
    },
  },
  plugins: [],
}

