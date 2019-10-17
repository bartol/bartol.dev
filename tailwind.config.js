module.exports = {
  theme: {
    extend: {
      colors: {
        main: 'hsla(190, 80%, 50%, 1)',
        dark: {
          '900': '#010101', //             black
          '800': '#1F2023', //             bg
          '700': '#27292D', //             element bg
          '600': '#383B40', //             ui elements
          '500': '#FFFFFF99', //  60%      bland
          '400': '#FFFFFFB3', //  70%      placeholder
          '300': '#FFFFFFCC', //  80%      atonic
          '200': '#FFFFFFE6', //  90%      text
          '100': '#FFFFFF', //             bold
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
