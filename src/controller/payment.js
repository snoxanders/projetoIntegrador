const db = require("../database/models/index")

const createPayment = {
    criarPayment: async(req, res) => {
        const { id_cliente, id_cartao, numero_cartao, nome_titular, validade_cartao } = req.body;
        try {
            const createPayment = await dbPayment.create({ id_cliente, id_cartao, numero_cartao, nome_titular, validade_cartao })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    },
    buscarPagamento: async(req, res) => {
        const pagamento = await db.Payment.findAll()
        res.send(pagamento)
    }
};

module.exports = createPayment