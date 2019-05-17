# config

webpack用の設定ファイル。webpackはこのファイルによって動作する。

- 基本は js だが, typescript, json, coffie-script, babelなども利用可能
  - [Configuration Languages \| webpack](https://webpack.js.org/configuration/configuration-languages)
- create with support: [./init.md](./init.md)
- links: [Configuration \| webpack](https://webpack.js.org/configuration)

## top level property

- entry
- context
- mode: 動作モード。内容によって環境変数やパラメータが設定される
  - 選択できる値: *development*, *production*, *none*
  - 実行時の上書き: `webpack --mode production`
  - links: [Mode \| webpack](https://webpack.js.org/configuration/mode)
- output: 出力の内容を設定
- module: 異なるタイプのモジュールの扱いを設定する
  - [./module.md](./module.md)
- resolve
- optimization
- plugins
- devServer
- target
- watchOptions
- externals
- performance
- node
- stats
- and other
  - [Other Options \| webpack](https://webpack.js.org/configuration/other-options)
