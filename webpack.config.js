var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  devServer: {
    color: true,
    contentBase: path.join(__dirname, '/dist')
  },
  entry: {
    index: ['webpack-hot-middleware/client','./src/index'],
    async: ['webpack-hot-middleware/client', 'babel-polyfill','./src/page/async/async']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.scss$/,
      include: path.resolve(__dirname, 'src/'),
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '导航',
      inject: 'body',
      hash: true,
      filename: 'index.html',
      chunks: ['index'],
      template: path.join(__dirname, 'src/html/base_tmpl.html')
    }),
    new HtmlWebpackPlugin({
      title: 'async, es6',
      inject: 'body',
      hash: true,
      filename: 'async.html',
      chunks: ['async'],
      template: path.join(__dirname, 'src/html/base_tmpl.html')
    })
  ]
};
