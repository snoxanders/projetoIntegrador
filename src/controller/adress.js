const dbadress = require("../database/models/adress")

const createadress = {
    createAdress: async(req, res) => {
        const { end_rua, end_numero, end_bairro, end_cep, end_cidade, end_estado } = req.body;
        try {
            const createadress = await dbadress.create({ end_rua, end_numero, end_bairro, end_cep, end_cidade, end_estado })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    }
};

module.exports = createadress