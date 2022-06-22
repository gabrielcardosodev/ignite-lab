module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#81D8F7',
          500: '#3845BD'
        },
        orange: {
          500: '#FBA94C'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },

      fontFamily: {
        brand: 'Roboto, sans-serif'
      }
    }
  },
  plugins: []
}
