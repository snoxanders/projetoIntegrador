var express = require('express');
var router = express.Router();
const db = require('../database/models/index')
const produtoController = require('../controller/productController')
const usuarioController = require("../controller/usersController")
const pagamentoController = require("../controller/paymentController")
const enderecoController = require("../controller/adressController")
const pedidosController = require("../controller/orderController")


router.get('/home', function(req, res, next) {
    res.render("../views/home");
});

router.get('/produto', function(req, res, next) {
    res.render('../views/produto');
});

router.get('/produto/:id', async function(req, res, next) {
    const produto = await db.Product.findByPk(req.params.id)
    console.log(produto)
    res.render('../views/produto', { produto });
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

router.get('/perfil', function(req, res, next) {
    res.render('../views/perfil')
});

// const dbProduct = require("../controller/product")
// router.post('/teste', dbProduto.createdProd);

router.get('/usuarios', usuarioController.buscarUsuario),
    router.post('/criarusuarios', usuarioController.criarUsuario),
    router.post('/editarusuarios', usuarioController.editarUsuario),
    router.post('/deletarusuarios', usuarioController.deletarUsuario)

router.get('/pagamentos', pagamentoController.buscarPagamento),
    router.post('/criarpagamentos', pagamentoController.criarPagamento),
    router.post('/editarpagamentos', pagamentoController.editarPagamento),
    router.post('/deletarrpagamentos', pagamentoController.deletarPagamento)

router.get('/enderecos', enderecoController.buscarEnd),
    router.post('/criarenderecos', enderecoController.criarEnd),
    router.post('/editarenderecos', enderecoController.editarEnd),
    router.post('/deletarenderecos', enderecoController.deletarEnd)

router.get('/pedidos', pedidosController.buscarPedido),
    router.post('/criarpedidos', pedidosController.criarPedido),
    router.post('/editarpedidos', pedidosController.editarPedido),
    router.post('/deletarpedidos', pedidosController.deletarPedido)

// router.get('/produtos', produtoController.buscarProduto)

// router.get('/produto/:produtoId', produtoController.buscarProdutoPorId)

// router.post('/criarprodutos', produtoController.criarProduto)
// router.post('/editarprodutos', produtoController.editarProduto)
// router.post('/deletarprodutos', produtoController.deletarProduto)



module.exports = router;