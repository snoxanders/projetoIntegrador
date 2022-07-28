const dbUsers = require("../database/models/users")

const createuser = {
    createUser: async(req, res) => {
        const { name_cliente, rg_cliente, cpf_cliente, email_cliente, dtnasc_cliente, senha_cliente, sexo_cliente } = req.body;
        try {
            const createuser = await dbUsers.create({ name_cliente, rg_cliente, cpf_cliente, email_cliente, dtnasc_cliente, senha_cliente, sexo_cliente })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    }
};

module.exports = createuser