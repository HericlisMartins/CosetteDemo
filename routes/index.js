var express = require('express');
var router = express.Router();

var data = require('../product_data.json');

/* GET home page. */
router.get('/product/list', function(req, res, next) {
  res.json(data);
});

module.exports = router;
