var express = require('express');
var router = express.Router();
const indexCtrl = require("../controllers/index")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dev Skills' });
});

module.exports = router;

