// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        p_colors: '#79d0d1',
      }
    }
  },
  variants: {
    extend: {
      // ...
     backgroundColor: ['active'],
    }
  },
  plugins: [],
}
