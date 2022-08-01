var express = require('express');
var router = express.Router();
const db = require('../database/models/index')
const produtoController = require('../controller/product')
const usuarioController = require("../controller/users")
const pagamentoController = require("../controller/payment")
const enderecoController = require("../controller/adress")
const pedidosController = require("../controller/order")



router.get('/home', function(req, res, next) {
    res.render("../src/views/home");
});

router.get('/produto', function(req, res, next) {
    res.render('../src/views/produto');
});

router.get('/carrinho', function(req, res, next) {
    res.render('../src/views/carrinho');
});

router.get('/main', function(req, res, next) {
    res.render('../src/views/main');
});

router.get('/finalizarcompra', function(req, res, next) {
    res.render('../src/views/finalizarCompra');
});

router.get('/cadastro', function(req, res, next) {
    res.render('../src/views/cadastro');
});

// const dbProduct = require("../controller/product")
// router.post('/teste', dbProduto.createdProd);
router.get('/usuarios', usuarioController.buscarUsuario)

router.get('/pagamentos', pagamentoController.buscarPagamento)

router.get('/enderecos', enderecoController.buscarEnd)

router.get('/pedidos', pedidosController.buscarPedido)

router.get('/produtos', produtoController.buscarProduto)

module.exports = router;