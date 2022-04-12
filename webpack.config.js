const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './out/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  experiments: {
    topLevelAwait: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv(),
  ]
};
