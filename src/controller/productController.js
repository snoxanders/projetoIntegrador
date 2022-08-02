const db = require("../database/models/index")

const createdProd = {
    criarProduto: async(req, res) => {
        const { name, description, available, price } = req.body;
        try {
            const createdProd = await dbProduct.create({ name, description, available, price })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    },
    buscarProduto: async(req, res) => {
        const produtos = await db.Products.findAll()
        res.send(produtos)
    }
};

module.exports = createdProd