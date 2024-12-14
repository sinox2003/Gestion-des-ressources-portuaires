
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './spartan/**/*.{html,ts}',
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
