const dbpayment = require("../database/models/payment")

const createpayment = {
    createPayment: async(req, res) => {
        const { numero_cartao, nome_titular, validade_cartao } = req.body;
        try {
            const createpayment = await dbpayment.create({ numero_cartao, nome_titular, validade_cartao })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    }
};

module.exports = createpayment