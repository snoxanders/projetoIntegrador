const dborder = require("../database/models/order")

const createorder = {
    createOrder: async(req, res) => {
        const { data_pedido, id_cartao, valor_produto, nome_destinatario, user_endereco, user_cidade, user_estado, user_cep, status_pedido } = req.body;
        try {
            const createorder = await dborder.create({ data_pedido, id_cartao, valor_produto, nome_destinatario, user_endereco, user_cidade, user_estado, user_cep, status_pedido })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    }
};

module.exports = createorder