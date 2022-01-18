module.exports = {
  content: ['*.html', './src/**/*.{html,js}', './node_modules/@themesberg/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        bevietnam: 'Be Vietnam Pro',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // eslint-disable-next-line global-require
    require('@themesberg/flowbite/plugin'),
  ],
};
