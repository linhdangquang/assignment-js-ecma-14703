/* eslint-disable global-require */
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
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('@tailwindcss/line-clamp'),

  ],
};
