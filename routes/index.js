var express = require('express');
var router = express.Router();
const db = require('../database/models/index')
const produtoController = require('../controller/productController')
const usuarioController = require("../controller/usersController")
const pagamentoController = require("../controller/paymentController")
const enderecoController = require("../controller/adressController")
const pedidosController = require("../controller/orderController")
const mysql = require('mysql')
const loginAuth = require('../database/models/middlewares/validateUIser')

    // const session = require('express-session')

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetointegrador'
})

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

router.get('/carrinho/:id', async function(req, res, next) {
    const produto = await db.Product.findByPk(req.params.id)
    console.log(produto)
    res.render('../views/carrinho', { produto });
});

router.get('/finalizarcompra/:id', async function(req, res, next) {
    const produto = await db.Product.findByPk(req.params.id)
    console.log(produto)
    res.render('../views/finalizarcompra', { produto });
});


// router.get('/main', function(req, res, next) {
//     res.render('../views/main');
// });

router.get('/main', function(req, res, next) {

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'projetointegrador'
    })

    con.query("SELECT * FROM produto", (err, result) => {
        res.render('../views/main', { result: result })
    });

});


router.get('/carrinho', function(req, res, next) {
    res.render('../views/carrinho');
});


router.get('/finalizarcompra', function(req, res, next) {
    res.render('../views/finalizarCompra');
});
router.get('/cadastro',loginAuth, function(req, res, next) {
    res.render('../views/cadastro');
});

router.get('/perfil', function(req, res, next) {
    res.render('../views/perfil')
});

// const dbProduct = require("../controller/product")
// router.post('/teste', dbProduto.createdProd);

router.post('/usuarios', usuarioController.buscarUsuario),
    router.post('/criarusuarios', usuarioController.criarUsuario),
    router.put('/editarusuarios/:id', usuarioController.editarUsuario),
    router.delete('/deletarusuarios/:id', usuarioController.deletarUsuario)

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