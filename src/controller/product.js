const dbProduct = require("../database/models/product")

const createdProd = {
    criarProduct: async(req, res) => {
        const { name, description, available, price } = req.body;
        try {
            const createdProd = await dbProduct.create({ name, description, available, price })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    }
};

module.exports = createdProd