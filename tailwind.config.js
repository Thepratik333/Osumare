/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.shadow-bottom': {
          'boxShadow': '0px 4px 12px rgba(59, 130, 246, 1)', // Customize shadow properties as needed
        },
      };

      addUtilities(newUtilities, {
        variants: ['responsive'], // Optional: specify variants
      });
    }),
  ],
  
}

