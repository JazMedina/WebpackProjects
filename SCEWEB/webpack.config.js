const path = require('path');
//modulos instalados
const yaml = require('yamljs');
const json5 = require('json5');
const htmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
	entry: {
		index: './src/secc_index.js',
		estadisticas: './src/secc_estadisticas.js',
		unicef: './src/secc_unicef.js'
	},
	plugins: [
		//Agregar plugin y crear service Worker
		new WorkboxPlugin.GenerateSW({
			//Es para que worbok funciones de forma oprimizada y rápida
			clientsClaim: true,
			skipWaiting: true
		})
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {

		rules: [
			{//icons bootstrap
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext][query]'
				}
			},
			{//css
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{//imagenes
				test: /\.(png|jpg)$/i,
				type: 'asset/resource'
			},
			{//bootstrap
				test: /\.(scss)$/,
				use: [{
					// inject CSS to page
					loader: 'style-loader'
				}, {
					// translates CSS into CommonJS modules
					loader: 'css-loader'
				}, {
					// Run postcss actions
					loader: 'postcss-loader',
					options: {
						// `postcssOptions` is needed for postcss 8.x;
						// if you use postcss 7.x skip the key
						postcssOptions: {
							// postcss plugins, can be exported to postcss.config.js
							plugins: function()
							{
								return [
									require('autoprefixer')
								];
							}
						}
					}
				}, {
					// compiles Sass to CSS
					loader: 'sass-loader'
				}]

			},
			{//archivos csv
				test: /\.csv$/i,
				use: ['csv-loader']
			},
			{//archivos formato json5
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse
				}
			},
			{//archivo formato yaml
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse
				}
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['index']

		}),
		new htmlWebpackPlugin({
			filename: 'estadisticas.html',
			template: './src/estadisticas.html',
			chunks: ['estadisticas']

		}),
		new htmlWebpackPlugin({
			filename: 'unicef.html',
			template: './src/unicef.html',
			chunks: ['unicef']
		}),
	],
	devtool: "eval-cheap-source-map"

}