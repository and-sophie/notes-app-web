const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: {
    bundle: `${APP_DIR}/index.jsx`,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './index.html',
        to: './index.html',
      },
    ]),
  ],

};

module.exports = config;
