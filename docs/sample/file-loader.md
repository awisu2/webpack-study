# file-loader.md

任意の対象をバンドルせずそのまま保存する

## setup

```bash
```

## sample: 画像を変換せずそのままファイルとして出力

webpack.config.js

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        use: [
          "file-loader", {
            loader: "file-loader",
            options: {
              name: './assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
```