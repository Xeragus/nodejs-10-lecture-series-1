var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  console.log('hehe')
  res.render('index', {});
});

module.exports = router;
