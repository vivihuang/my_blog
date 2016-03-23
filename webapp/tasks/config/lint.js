export default {
  src: [
    'config/**/*.js{,x}',
    'src*/**/*.js{,x}',
    //'tasks/**/*.js{,x}',
    'gulpfile.babel.js'
  ],
  options: {
    "rules": {
      'semi': 0,
      'comma-dangle': 0
    },
    "extends": "airbnb"
  }
}
