const express = require("express");
const produtoController = require('../controller/productController')

const router = express.Router();

router.get('/:produtoId', produtoController.buscarProdutoPorId)
    // router.post('/criarprodutos', produtoController.criarProduto)
    router.get('/:carrinhoId', produtoController.buscarProdutoPorId)

    router.get('/:finalizarcompraId', produtoController.buscarProdutoPorId)


    
module.exports = router;