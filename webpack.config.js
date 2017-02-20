var path = require('path')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: { path: __dirname + '/assets', filename: 'bundle.js' },
  devtool: "#eval-source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.json/,
      loader: 'json'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    new webpack.EnvironmentPlugin(['MARMALADE_AWS_ACCESS', 'MARMALADE_AWS_SECRET']),
    new webpack.DefinePlugin({
      API_BASE: JSON.stringify('/api')
    })
  ]
}
