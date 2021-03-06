const path = require('path');

// filecopy
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
