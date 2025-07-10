module.exports = {
  theme: {
    container: {
      center: true,       // always center
      padding: '1rem',    // optional gutter on small screens
      screens: {
        DEFAULT: '100%',  // full-width on <sm
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',  // at 2xl and above, cap at 1440px
      },
    },content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    extend: {
    },
  },
  plugins: [],
}
