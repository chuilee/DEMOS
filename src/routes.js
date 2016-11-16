var express = require('express')
var router = express.Router()
var path = require('path')

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// 定义 html 页面的路由
router.get('/:name', function(req, res, next) {
  var options = {
    root: path.join(__dirname, '../'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var filename = req.params.name

  res.sendFile(filename, options, function(err){

    if (err) {
      console.log(err)
      res.status(err.status).end()
    } else {
      console.log('Sent: ', filename)
    }

  })
})

module.exports = router;
