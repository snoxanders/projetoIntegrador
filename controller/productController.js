const { Product } = require("../database/models")



const createdProd = {
    criarProduto: async(req, res) => {
        const { name, description, available, price } = req.body;
        try {
            const createdProd = await Product.create({ name, description, available, price })
            res.json(createdProd)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    },
    buscarProdutoPorId: async(req, res) => {
        try {
            const { produtoId } = req.params;
            const produto = await Product.findByPk(produtoId)
            res.render("produto", { produto: produto.dataValues })
        } catch (error) {
            res.send("ok")
            console.log(error)
        }
    },
    buscarProduto: async(req, res) => {
        const produtos = await Product.findAll()
        res.send(produtos)
    },
    editarProduto: async(req, res) => {
        const editarProdutos = await Product.update(users, { where: { id } })
    },

    deletarProduto: async(req, res) => {
        const deletarProdutos = await Product.destroy({ where: { id } })
    },

};

module.exports = createdProd