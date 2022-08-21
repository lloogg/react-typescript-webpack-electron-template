const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './index.ts'),
  },
  devtool: 'inline-source-map',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
  },
};
