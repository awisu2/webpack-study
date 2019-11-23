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
    // template: (default: src/index.ejs)
    new HtmlWebpackPlugin({ template: 'src/index.ejs' }),
    new CopyPlugin([
      { context: 'src', from: '**/*.jpg', to: '' },
    ]),
  ]
};
