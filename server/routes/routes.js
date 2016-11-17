var express = require('express')
var router = express.Router()
var User = require('../models/user.js')

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time:', Date.now())
  next()
})

router.get('/register', function(req, res, next){
  User.count().exec((err, count) => {
    if(count > 0) {

    } else {
      const user1 = new User({ name: 'Admin1', password: 'Hello MERN', cuid: 'cikqgkv4q01ck7453ualdn3hd' });
      const user2 = new User({ name: 'Admin2', password: 'Lorem Ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf' });

      User.create([user1, user2], (error) => {
        if (!error) {
          // console.log('ready to go....');
        }else{
          console.log('add sucess');
        }
      });
    }
  })
})

// 错误处理
router.use(function(err, req, res, next) {
  res.status(404).send("Router ERR: file can't be found")
})

module.exports = router;
