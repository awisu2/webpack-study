const path = require('path');
const dotenv = require('dotenv');

// filecopy
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// vue
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// get env
dotenv.config()
const MODE = process.env.MODE || 'development'

// echo infomation
module.exports = {
  mode: MODE,
  entry: './src/index.js', // or index.ts
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
      },
      {
        test: /\.tsx?$/,
        // optionsを使うため、useでなくてloader
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // typescriptにvueを処理させる
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    // 自動補完する拡張子
    extensions: [ '.ts', '.tsx', '.js', '.vue' ],
    // for vue
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: ["node_modules"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    // ビルド後のスクリプトロードを含むhtmlコピー
    new HtmlWebpackPlugin({ template: 'src/templates/index.ejs', filename: 'index.html' }),
    new CopyPlugin([
      // assetsディレクトリーをコピー
      { context: 'src', from: 'assets/**/*', to: '' },
    ]),
    // css
    new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
    // vue
    new VueLoaderPlugin()
  ],
  optimization: {
    // css minimize
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  }
};
