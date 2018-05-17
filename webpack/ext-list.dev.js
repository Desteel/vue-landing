const merge = require('webpack-merge');

const commonList = require('./ext-list.common');

const babelExt = require('./babel.ext');
const devserverExt = require('./devserver.ext');

module.exports = merge([
  commonList,
  babelExt,
  devserverExt,
  /*{
      devtool: "source-map"
  }*/
]);
