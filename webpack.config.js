const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  experiments: {
    topLevelAwait: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv()
  ]
};
