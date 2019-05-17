# module.md

異なるタイプのモジュールの扱いを設定する

- ruleと呼ばれる設定を複数記述することで動作
- testに一致するurlがあるとき、use内の設定が適応される
  - 逆に言うとwebpackはentryに連なるスクリプトに記載されていなければ動作しないという意味になる
- links: [Module \| webpack](https://webpack.js.org/configuration/module)