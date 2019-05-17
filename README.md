# webpack first study

- デフォルトではjavascriptのコンパイラ
  - loaderを追加することによってその他の形式にも対応可能
- *webpack.config.js* を起点に動作
- public site: [webpack](https://webpack.js.org/)
- [webpack.config.js](./docs/config/config.md): webpack用の設定ファイル。webpackはこのファイルによって動作
- [samples](./docs/sample/sample.md): 実験とその結果

## get start

### 1. setup

```bash
yarn init -y
yarn add -D webpack webpack-cli
yarn webpack -v
```

- パッケージ不足でエラーが出るようであれば最新化 `npm -g install npm`
- ローカルインストールしたnode_moduleを直接利用したい場合はPATHを修正 `export PATH=$PATH:./node_modules/.bin`
  - `yarn` を省略可能

### 2. small run

#### create file

webpack.config.js

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist/js')
  }
}
```

src/js/app.js

```js
console.log('hello world')
```

#### run

```bash
yarn webpack
node dist/js/app.js
```
