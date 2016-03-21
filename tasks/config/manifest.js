import gulp from 'gulp'

export default {
  manifestFile: `${gulp.config('base.dist')}/manifest.json`,
  templates: `${gulp.config('base.root')}`,
  devMode: {
    '/public/main.js': '/public/bundle.js',
    '/public/vendor.js': '/public/vendor.js'
  }
}