/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gtc-green': '#00a86b',
        'gtc-gray': '#f5f5f5',
        'gtc-dark': '#333',
        'gtc-light': '#fafafa',
      },
      spacing: {
        card: '400px', // Adjust size according to your design
        'card-height': '200px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  darkMode: 'class', // Enable dark mode based on a class
  plugins: [],
};
