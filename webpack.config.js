const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src') + '/index.jsx'
  ],
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build/js'),
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: '#source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', {'modules': false}],
            'react'
          ],
          plugins: [
            'react-hot-loader/babel'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      appMountId: 'react-app-root',
      title: 'Long Pass',
      filename: resolve(__dirname, 'build/index.html')
    })
  ]
}
