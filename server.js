var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.config')

var serverCfg = require('./server/config.js')
var express = require('express')
var routes = require('./server/routes/routes.js')
var favicon = require('serve-favicon')
var logger = require('morgan')
var errorHandler = require('errorhandler')
var mongoose = require('mongoose')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// 模板引擎
app.set('views', path.join(__dirname, '/server/views/'))
app.set('view engine', 'jade')

// favicon
// app.use(favicon())

// logger 日志
app.use(logger('dev'))

// 路由
app.use('/', routes);

// 错误处理中间件应当在路由加载之后才能加载
if ('development' == app.get('env')) {
  app.use(errorHandler())
}

console.log(serverCfg.mongoURL);

// 连接数据库
mongoose.connect(serverCfg.mongoURL)

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
})
