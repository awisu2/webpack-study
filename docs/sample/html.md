# html

entry以外にhtmlもコンパイル後のディレクトリに移動させる

- 同設定内のjavascriptや、cssのincludeタグは自動で追加される

## setup

```bash
yarn add -D html-webpack-plugin
```

## simple

```js
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE_PRODUCTION = 'production'
const MODE_DEVELOPMENT = 'development'

module.exports = (env, options) => {
  // modeによって環境変数がせってされるが、webpack.config内では取得できないのでoptionを参照
  let isProd = options['mode'] === MODE_PRODUCTION

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
    },
    plugins: [
      //
      new HtmlWebpackPlugin([
        { template: "src/index.html" }
      ])
    ]
  }
}
```