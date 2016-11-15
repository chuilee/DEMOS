var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var routes = require('./src/routes.js')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', routes);

app.listen(8080, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8080/');
})
