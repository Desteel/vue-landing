const merge = require('webpack-merge');
const paths = require('./webpack/paths.ext');
const uglifyjsExt = require('./webpack/uglifyjs.ext');
const extListDev = require('./webpack/ext-list.dev');
const extListProd = require('./webpack/ext-list.prod');

function getConfig(name) {
  let uglify = name.indexOf('min') > -1;

  let common = {
    entry: {},
    node: {
      fs: 'empty',
      process: false
    },
    output: {
      path: paths.build,
      filename: '[name]/app' + name + '.js',
      publicPath: '/dist',
      sourceMapFilename: '[name]/app' + name + '.map'
      /*libraryTarget: 'umd',
      libraryExport: 'default',
      umdNamedDefine: true*/
    },
    plugins: [],
    optimization: {
      minimize: false,
      runtimeChunk: { name: 'common' },
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /\.js?$/,
            chunks: 'all',
            minChunks: 2,
            name: 'common',
            enforce: true,
          },
        },
      },
    },
    devtool: 'source-map'
  };

  if (uglify) {
    common = merge([common, uglifyjsExt]);
  }

  return common;
}

module.exports = function (env) {
  let config = [];
  let list = [''];

  if (process.env.NODE_ENV === 'production') {
    list.push('.min');
  }

  list.forEach(function (key) {
    config.push(merge([
      getConfig(key),
      (process.env.NODE_ENV === 'development') ? extListDev : extListProd
    ]));
  });

  return config;
};
