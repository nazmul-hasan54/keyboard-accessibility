/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        skillBar: {
          '0%': { width: '0%' },
          '100%': { width: '75%' }, // Adjust this value based on the skill level
        },
      },
      animation: {
        'skill-bar': 'skillBar 2s ease-in-out forwards',
      },
      
      backgroundImage: {
        'dotted-line': 'radial-gradient(circle, black 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-size': '4px 4px', // Adjust dot size and spacing
      },

    },
  },
  plugins: [],
}

