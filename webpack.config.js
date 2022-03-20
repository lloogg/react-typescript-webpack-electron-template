const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: {
      import: './src/index.tsx',
    },
    scope: {
      import: path.resolve(__dirname, './src/view/scope'),
      library: {
        type: 'window',
        name: 'windo',
      },
    },
  },
  devtool: 'source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },

      {
        test: /\.js$/,
        loader: 'ify-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
