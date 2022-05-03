module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: "0", transform: "translateY(500px)" },
          "70%": { transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        fademenu: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "page-fade-in": "fadein 600ms ease-out",
        "menu-fade-in": "fademenu 500ms linear"
      },
    },
     
  },
  plugins: [],
};
