var express = require('express');
var router  = express.Router();
var request = require('request');
var Shopify = require('shopify-api-node');

/* GET users listing. */
router.get('/', function(req, res, next) {

  const shopify = new Shopify({
    shopName: 'hericlis.myshopify.com',
    apiKey: 'a790709ac74696909441280ada980cf8',
    password: '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'
  });

  request('http://localhost:3000/product/list' , function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var products = JSON.parse(body)

      products.data.forEach(obj => {

        shopify.product.create(obj)
        .catch(err=> console.log(err))
        
      });

      res.send("Products Successfully Registered!");
    }
    console.log(error);
  });
});

module.exports = router;
