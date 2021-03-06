module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur.png)'
      },

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
      },

      animation: {
        slide: '0.3s ease-in-out 0s 1 normal none running slide'
      },

      keyframes: {
        slide: {
          '0%, 100%': {
            transform: 'translateX(100%)'
          },

          '100%': {
            transform: 'translateX(0)'
          }
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
