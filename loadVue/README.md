# wepbpack/tutorial

loaderを追加しtypescriptのロードを行う

[ts\-loader](https://github.com/TypeStrong/ts-loader)

```bash
yarn add -D dotenv

# webpack and important
yarn add -D webpack webpack-cli

# copy file
yarn add -D html-webpack-plugin copy-webpack-plugin

# typescript
yarn add -D typescript ts-loader

# sass
yarn add -D node-sass
yarn add -D sass-loader style-loader css-loader
yarn add -D mini-css-extract-plugin optimize-css-assets-webpack-plugin

# vue (vue-template-compilerは、vue-loaderの依存)
# 
# vue-loader: vueのloader
# vue-style-loader(+css-loader): vue内でstyleを読み込む
# 
yarn add -D vue vue-loader vue-style-loader
yarn add -D vue-template-compiler
```

## with dob.cmd

windowsとの組み合わせでdockerにインストールを任せるのは難しい

