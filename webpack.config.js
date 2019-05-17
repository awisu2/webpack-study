const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  name: 'app',
  mode: 'development',
  entry: {
    app: './src/js/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath
              publicPath: '../',
              hmr: !isProd
            }
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 1
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: [
          "file-loader", {
            loader: "file-loader",
            options: {
              name: './scss/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]' + (isProd ? '.[hash]' : '') + '.css',
      chunkFilename: 'css/[id]' + (isProd ? '.[hash]' : '') + '.css'
    }),
  ]
}

