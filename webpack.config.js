var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  devServer: {
    color: true,
    contentBase: path.join(__dirname, 'dist')
  },
  entry: {
    index: ['webpack-hot-middleware/client','./src/index']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '基本模板页',
      filename: 'dist/index.html',
      template: 'src/html/base_tmpl.html'
    })
  ]
};
