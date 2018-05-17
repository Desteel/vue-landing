module.exports = ({file, options, env}) => ({
  plugins: {
    'precss': {},
    'postcss-jsmath': {},
    'postcss-assets': {},
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-short': {},
    'cssnano': process.env.NODE_ENV === 'production' ? {} : false
  }
});
