var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var routes = require('./server/routes/routes.js')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// 模板引擎
app.set('views', './server/views/')
app.set('view engine', 'jade')

// 路由
app.use('/', routes);

// app通用错误处理
app.use(function(err, req, res, next) {
  res.status(400).send("App ERR: file can't be found")
})

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
