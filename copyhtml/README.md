# wepbpack/tutorial

ファイルをコピーする機能の追加

- プラグインを利用して実装
- copy-webpack-plugin: 単にファイルをこぴーするだけならこちら
  - [がんばらない webpack \- 藻ログ](http://wakame.hatenablog.jp/entry/2019/01/05/134128)
  - [webpack\-contrib/copy\-webpack\-plugin: Copy files and directories with webpack](https://github.com/webpack-contrib/copy-webpack-plugin)
- html-webpack-plugin: ビルド後のscriptロードをセットする
  - [jantimon/html\-webpack\-plugin: Simplifies creation of HTML files to serve your webpack bundles](https://github.com/jantimon/html-webpack-plugin)

```bash
yarn add -D webpack webpack-cli html-webpack-plugin copy-webpack-plugin [--no-bin-links]
```
