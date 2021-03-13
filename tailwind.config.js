module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main:
          "url('https://i.pinimg.com/originals/ab/d5/08/abd508e8b0b0ed4b0966ac4681bc0763.jpg')",
      }),
      width: {
        "fit-content": "fit-content",
      },
      height: {
        "fit-content": "fit-content",
      },

      fontFamily: {
        title: ["Bangers"],
        base: ["Open Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
