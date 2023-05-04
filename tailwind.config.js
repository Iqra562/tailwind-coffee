/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // coffee: '#9a672e',
        coffee:'#d88b35'
      },
      height: {
        '16px': '1rem',
      }
    
    },
  },
  plugins: [],
};
