const path = require('path');
const dotenv = require('dotenv')

// filecopy
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// get env
dotenv.config()
const MODE = process.env.MODE || 'development'

// echo infomation
console.log('env', MODE, process.env)

module.exports = {
  mode: MODE,
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      }
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
    // css
    new MiniCssExtractPlugin({ filename: 'style/[name].css' })
  ],
  optimization: {
    // css minimize
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  }
};
