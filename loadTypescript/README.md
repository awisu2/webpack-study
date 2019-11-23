# wepbpack/tutorial

loaderを追加しtypescriptのロードを行う

[ts\-loader](https://github.com/TypeStrong/ts-loader)

```bash
yarn add -D webpack webpack-cli html-webpack-plugin copy-webpack-plugin [--no-bin-links]
yarn add -D typescript ts-loader [--no-bin-links]
```

## 発生したエラー

### TS1149

```t
ERROR in /mnt/E/develop/study/webpack-study/loadTypescript/node_modules/webpack/lib/node/NodeTargetPlugin.js
[tsl] ERROR in /mnt/E/develop/study/webpack-study/loadTypescript/node_modules/webpack/lib/node/NodeTargetPlugin.js(11,10)
      TS1149: File name '/mnt/E/develop/study/webpack-study/loadTypescript/node_modules/webpack/lib/module.js' differs from already included file name '/mnt/E/develop/study/webpack-study/loadTypescript/node_modules/webpack/lib/Module.js' only in casing.
```

tsconfig.json を修正したら治ったので設定の問題だと思われる

[File differs from already included file only in casing: correct casing but relative path · Issue \#25460 · microsoft/TypeScript](https://github.com/Microsoft/TypeScript/issues/25460)
