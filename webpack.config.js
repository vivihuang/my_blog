var path = require("path");
var webpack = require("webpack");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var src_dir = path.join(__dirname, 'src');

module.exports = {
	cache: true,
	entry: {
		app: path.join(src_dir, 'index.js')
		//scripts: path.join(src_dir, '**', '*.js'),
		//test: path.join(__dirname, 'test', '**', '*.js')
	},
	output: {
		path: path.join(__dirname, "public"),
		publicPath: "/public/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/,    loader: "style-loader!css-loader" },
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },

			{test: /\.js$/, exclude: [node_modules_dir], loader: "babel-loader"},
		]
	},
	resolve: {
		alias: { },
		modulesDirectories: ['node_modules']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.js",
				minChunks: (module, count) => {
					return module.resource && module.resource.indexOf(src_dir) === -1;
				}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
	]
};