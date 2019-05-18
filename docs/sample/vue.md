# vue

```bash
yarn add -D vue vue-loader
yarn add -D vue-property-decorator vue-template-compiler
```

## 一定以上のバージョンの場合プラグインの導入が必用

webpack.config.js

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')

    ...
    {
      name: 'vue',
      mode: isProd ? MODE_PRODUCTION : MODE_DEVELOPMENT,
      entry: {
        vue: joinPath('src', 'js', 'vue.js')
      },
      output: {
        path: joinPath('dist/'),
        filename: 'js/[name]' + (isProd ? '.[hash]' : '') + '.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            loader: "vue-loader"
          }
        ]
      },
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: joinPath('src', 'vue.html'),
          filename: 'vue.html'
        }),
        new VueLoaderPlugin()
      ]
    }
    ...
```

## typescriptで動かす

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "lib": [
      "esnext",
      "dom"
    ],
    // 公文チェック
    "strict": true,
    // デコレータ有効
    "experimentalDecorators": true
  }
}
```

webpack.config.js

```js
    {
      name: 'vueTs',
      mode: isProd ? MODE_PRODUCTION : MODE_DEVELOPMENT,
      entry: {
        vueTs: joinPath('src', 'js', 'vueTs.ts')
      },
      output: {
        path: joinPath('dist/'),
        filename: 'js/[name]' + (isProd ? '.[hash]' : '') + '.js'
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          },
          {
            test: /\.vue$/,
            loader: "vue-loader"
          }
        ]
      },
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: joinPath('src', 'vueTs.html'),
          filename: 'vueTs.html'
        }),
        new VueLoaderPlugin()
      ]
    }
```