// add your custom configurations
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#61DAFB',
        secondary: '#282C34',
        yellowG: '#ECAB03',
        whiteG: 'rgba(255, 255, 255, 0.6)',
        blackG: 'rgba(0, 0, 0, 0.3)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      backgroundImage: theme => ({
        blueBg: "url('../src/assets/blueBg.png')",
        cardBg:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.39) -213.5%, rgba(255, 255, 255, 0) 100%)'
      }),
      boxShadow: {
        cardBox:
          'inset 0px -1px 11px rgba(255, 255, 255, 0.17), inset 0px 2px 0px rgba(255, 255, 255, 0.24)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
