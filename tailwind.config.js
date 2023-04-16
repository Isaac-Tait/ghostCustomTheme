module.exports = {
  mode: 'jit',
  purge: ['./*.hbs', './**/*.hbs'],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
