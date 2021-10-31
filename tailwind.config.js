module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      light:'#dfefff',
      primary:'#035afc',
      dark:'#000a1c',
      white:'#fff',
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
