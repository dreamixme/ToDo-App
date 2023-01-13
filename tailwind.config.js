module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  purge: {
    enabled: false,
    content: ['./src/**/*.{html,js,tsx}'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      body: ['Shabnam'],
      display: ['Shabnam'],
    },
    extend: {},
  },
  plugins: [],
};
