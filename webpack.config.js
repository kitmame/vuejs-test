'use strict';

var bowerWebpackPlugin = require('bower-webpack-plugin');
var webpack = require('gulp-webpack').webpack;

module.exports = {

  entry: './main.js',

  output: {
    //filename: 'app-[chunkhash].js',
    filename: 'app.js',
  },

  devtool: 'source-map',

  plugins: [
    new bowerWebpackPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
    })
  ]
};
