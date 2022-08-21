const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './view/main/index.tsx'),
    main2: path.resolve(__dirname, './view/main/index2.tsx')
    
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

    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'),
  },
};
