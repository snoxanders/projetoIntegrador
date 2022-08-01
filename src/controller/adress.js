const db = require("../database/models/index")

const createAdress = {
    criarEnd: async(req, res) => {
        const { end_rua, end_numero, end_bairro, end_cep, end_cidade, end_estado } = req.body;
        try {
            const createAdress = await dbAdress.create({ end_rua, end_numero, end_bairro, end_cep, end_cidade, end_estado })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    },
    buscarEnd: async(req, res) => {
        const adress = await db.Adress.findAll()
        res.send(adress)
    }
};

module.exports = createAdress