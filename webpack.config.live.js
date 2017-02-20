var base = require('./webpack.config')
var webpack = require('webpack')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var _ = require('lodash')

module.exports = _.extend(base, {
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    }),
    new webpack.DefinePlugin({
      API_BASE: JSON.stringify('http://localhost:9999/api')
    })
  ]
}) 
