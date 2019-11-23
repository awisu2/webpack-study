const path = require('path');

// filecopy
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    // ビルド後のスクリプトロードを含むhtmlコピー
    new HtmlWebpackPlugin({ template: 'src/index.ejs', filename: 'index.html' }),
    new CopyPlugin([
      // assetsディレクトリーをコピー
      { context: 'src', from: 'assets/**/*', to: '' },
    ]),
  ]
};
