module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['Dank Mono', 'monospace'],
      },
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
        code: {
          red: '#ef5350',
          cyan: '#09d1e9',
          teal: '#247d8f',
          gray: '#596774',
          white: '#cbccc5',
          green: '#ade96e',
          yellow: '#ffd470',
          orange: '#ffa345',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
