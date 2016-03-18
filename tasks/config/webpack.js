import gulp from 'gulp'
import webpack from 'webpack'
var node_modules_dir = `${gulp.config('base.root')}/node_modules`

export default {
  files: [
    {
      'src': `${gulp.config('base.src')}/index.js`,
      'dest': `${gulp.config('base.dist')}`
    }
  ],
  options: {
    cache: true,
    output: {
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

        {test: /\.js$/, exclude: [node_modules_dir], loader: "babel-loader"}
      ]
    },
    resolve: {
      alias: { },
      modulesDirectories: ['node_modules']
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.js",
          minChunks: (module, count) => {
            return module.resource && module.resource.indexOf(gulp.config('base.src')) === -1;
          }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};
