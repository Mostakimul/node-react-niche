module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito, sans-serif',
      },
    },
    fontWeight: {
      semibold: 600,
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
