var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var products = await ProductModel.find({}).populate('brand');
    res.render('product/list', { products });
});

module.exports = router;
