module.exports = {
  content: ['*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        fira: 'Fira Sans',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // eslint-disable-next-line global-require
    require('daisyui'),
  ],
};
