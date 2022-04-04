module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        background: "#192730",
        background_light: "#1b2730",
      },
      backgroundImage: {
        hashtag: "url('/images/hashtag.svg')",
      },
    },
  },
  plugins: [],
};
