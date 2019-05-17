# webpack first study

## get start

### 1. setup

```bash
yarn init -y
yarn add -D webpack webpack-cli
yarn webpack -v
```

+ パッケージ不足でエラーが出るようであれば最新化 `npm -g install npm`
+ ローカルインストールしたnode_moduleを直接利用したい場合はPATHを修正 `export PATH=$PATH:./node_modules/.bin`
  + `yarn` を省略可能

### 2. small run

#### create file

```js
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist/js')
  }
};
```

```js
// src/js/app.js
console.log('hello world')
```

#### run

```bash
yarn webpack
node dist/js/app.js
```
