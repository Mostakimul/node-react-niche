module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito, Marcellus, sans-serif',
        display: 'Marcellus',
      },
      backgroundImage: {
        'hero-bg': 'url(./img/banner-4.png)',
        'page-header': 'url(./img/page-header.jpg)',
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
