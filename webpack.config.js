const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE_PRODUCTION = 'production'
const MODE_DEVELOPMENT = 'development'

let joinPath = function(...pathes) {
  return path.join(__dirname, ...pathes)
}

module.exports = (env, options) => {
  // modeによって環境変数がせってされるが、webpack.config内では取得できないのでoptionを参照
  let isProd = options['mode'] === MODE_PRODUCTION
  let sourceMap = isProd

  return {
    name: 'app',
    mode: isProd ? MODE_PRODUCTION : MODE_DEVELOPMENT,
    entry: {
      app: './src/js/app.js'
    },
    output: {
      path: path.join(__dirname, 'dist/'),
      filename: 'js/[name]' + (isProd ? '.[hash]' : '') + '.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                hmr: !isProd,
                sourceMap: sourceMap
              }
            },
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: sourceMap,
                importLoaders: 2
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
            {
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
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
}

