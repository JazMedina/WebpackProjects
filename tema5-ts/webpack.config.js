const path = require('path');
module.exports = {
	entry: './src/index.ts',
	devtool:'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node-modules/'//se excluyen los archivos que se encuentran dentro de esta carpeta
			}
		],
	},
	resolve: {//especificar extensiones que se van a trabajar , externas
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};