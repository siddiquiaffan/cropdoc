// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#156775',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    })
  },
  variants: {
    extend: {
      // ...
     backgroundColor: ['active'],
    }
  },
  plugins: [],
}
