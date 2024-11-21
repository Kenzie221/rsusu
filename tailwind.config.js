/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        urbanist:['Urbanist','sans-serif']
      },
      backgroundImage:{
        'hos-bg':"url('/background.png')"
      },
      screens:{
        "galaxy-s-iii":"360px",
        "tablet":"600px",
        "laptop":"1024px"
      },
      colors:{
        "primary-color":"#1FBC68"
      }
    },
  },
  plugins: [],
}

