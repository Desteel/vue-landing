const merge = require('webpack-merge');

const entries = require('./../entries');

const cssExt = require('./css.ext');
const postcssExt = require('./postcss.ext');
const imagesExt = require('./images.ext');
const copyExt = require('./copy.ext');
const vueExt = require('./vue.ext');

module.exports = merge([
  entries,
  vueExt,
  //twigExt,
  cssExt,
  postcssExt,
  imagesExt,
  copyExt
]);
