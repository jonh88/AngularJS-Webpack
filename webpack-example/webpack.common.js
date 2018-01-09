const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );
const precss = require( 'precss' );
const svgFragments = require( 'postcss-svg-fragments' );
const pxtorem = require( 'postcss-pxtorem' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {        
    filename: 'bundle.js',
    sourceMapFilename: 'main.js.map'
  },
  module: {
      rules: [
      
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ]
      }
  }