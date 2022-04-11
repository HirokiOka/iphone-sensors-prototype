const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './ts-src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        loader: 'ts-loader'
      }
    ]
  },
  experiments: {
    topLevelAwait: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv()
  ]
};
