const db = require("../database/models/index")

const createOrder = {
    criarPedido: async(req, res) => {
        const { data_pedido, id_cartao, valor_produto, nome_destinatario, user_endereco, user_cidade, user_estado, user_cep, status_pedido } = req.body;
        try {
            const createOrder = await dbOrder.create({ data_pedido, id_cartao, valor_produto, nome_destinatario, user_endereco, user_cidade, user_estado, user_cep, status_pedido })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    },
    buscarPedido: async(req, res) => {
        const pedidos = await db.Order.findAll()
        res.send(pedidos)
    }
};

module.exports = createOrder