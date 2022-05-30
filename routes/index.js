var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('../views/index');
});

router.get('/produto', function(req, res, next) {
    res.render('../views/produto');
});

router.get('/carrinho', function(req, res, next) {
    res.render('../views/carrinho');
});

router.get('/main', function(req, res, next) {
    res.render('../views/main');
});

router.get('/finalizarcompra', function(req, res, next) {
    res.render('../views/finalizarCompra');
});

module.exports = router;