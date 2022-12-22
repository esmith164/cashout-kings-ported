/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: ['class', '.dark-mode'],
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      neutral: {
        0: '#FFFFFF',
        50: '#F4F6FA',
        100: '#F8F9FC',
        200: '#F1F3F9',
        300: '#E1E6EF',
        400: '#D8DAE5'
      },
      blue: {
        200: '#B6C6F5',
        300: '#D6E0FF',
        400: '#2952CC',
        500: '#001A6A'
      } ,
      dark: {
        300: '#555555',
        400: '#1D2D40',
        500: '#141C26',
        600: '#0D141D',
        700: '#000000'
      },
      primary: {
        400: '#FFE351',
        500: '#C1AA31',
        600: '#DB9000'
      },
      success: {
        300: '#EDFDF8',
        350: '#DCF2EA',
        400: '#08875D',
        500: '#08875D',
        600: '#066042'
      },
      error: {
        300: '#FEF1F2',
        400: '#E02D3C',
        500: '#BA2532',
        600: '#981B25'
      },
      light: {
        100: '#CDD1DF',
        200: '#EFEFEF',
        300: '#8094AE',
        400: '#1D2433',
      }
    }
  },
}
