const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CLT_DIR = path.resolve(__dirname, 'client');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: `${CLT_DIR}/app`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: `${SRC_DIR}/index.html`,
      },
    ),
  ],
};
