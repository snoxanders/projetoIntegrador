var express = require('express');
var router = express.Router();
const db = require('../database/models/index')

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('../views/home');
});

router.get('/produto', function(req, res, next) {
    //res.render('../views/produto');
    res.send(db.Produto.findAll())
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

router.get('/cadastro', function(req, res, next) {
    res.render('../views/cadastro');
});


module.exports = router;