// webpack.config.js

let webpack = require('webpack');
let path = require('path');
let libraryName = 'index';
let env = process.env.WEBPACK_ENV;

let plugins = [], outputFile;

if (env === 'build') {
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

let config = {
  entry: path.resolve('./src/index.js'),
  devtool: 'source-map',
  mode: (env === 'build') ? 'production' : 'development',
  optimization: {
    minimize: (env === 'build')
  },
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};

module.exports = config;