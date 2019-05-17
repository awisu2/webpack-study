# webpack init

コンフィグファイルの自動生成が可能。
(パッケージが別なので、別途インストールする必要あり)

```bash
yarn add -D @webpack-cli/init
yarn webpack-cli init
```

## 途中の質問でsassなど勝手にインストールすることがある

### 適当に実行したらインストールされたパッケージ

package.json

```json
"@babel/core": "^7.4.4",
"@babel/preset-env": "^7.4.4",
"@webpack-cli/init": "^0.1.5",
"babel-loader": "^8.0.6",
"babel-plugin-syntax-dynamic-import": "^6.18.0",
"css-loader": "^2.1.1",
"node-sass": "^4.12.0",
"sass-loader": "^7.1.0",
"style-loader": "^0.23.1",
"uglifyjs-webpack-plugin": "^2.1.3",
```

## 生成されたconfigファイル

webpack.config.js

```js
const webpack = require('webpack');
const path = require('path');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				},

				test: /\.js$/
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},

	entry: {
		y: './src/js/app.js'
	},

	output: {
		filename: '[name].[chunkhash].js'
	},

	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
```
