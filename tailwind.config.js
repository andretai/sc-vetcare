module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem'
      }
    },
    screens: {
      'sm': { 'max': '639px' },
      'md': { 'min': '640px', 'max': '1023px' },
      'lg': { 'min': '1024px' }
    }
  },
  variants: {},
  plugins: [],
}
