# sass

## setup

```bash
yarn add -D sass-loader node-sass style-loader css-loader
```

## 1. cssを読み込む

app.js内でcssファイルをimportしていると読み込まれるようになる

※rulesを消すとcssとして扱われないためコンパイルエラーになる

webpack.config.js

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  }
}
```

## 2. sassを読み込む

use内に複数の設定が記述されているが、この場合後半のものから順に実行される

webpack.config.js

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            options: { url: false }
          },
          "sass-loader", {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
}
```

## 3. sassを単体で外部に出力する

```bash
yarn add -D mini-css-extract-plugin
```

```js
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
```
