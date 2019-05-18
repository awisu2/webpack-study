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