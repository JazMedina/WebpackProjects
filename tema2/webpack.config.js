const path = require('path');
//modulos instalados
const yaml = require('yamljs');
const json5 = require('json5');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	plugins: [
		//Agregar plugin y crear service Worker
		new WorkboxPlugin.GenerateSW({
			//Es para que worbok funciones de forma oprimizada y rápida
			clientsClaim: true,
			skipWaiting: true
		})
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.csv$/i,
				use: ['csv-loader']
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse
				}
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}
		],
	},
};