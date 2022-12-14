/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
        center: true, 
        margin : 'auto'
      },
      fontFamily: {
        'sans': ['Merriweather', 'Sans-serif']
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
