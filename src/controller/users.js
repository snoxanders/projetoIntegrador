const db = require("../database/models/index")

const createUser = {
    criarUsuario: async(req, res) => {
        const { name_cliente, rg_cliente, cpf_cliente, email_cliente, dtnasc_cliente, senha_cliente, sexo_cliente } = req.body;
        try {
            const createUser = await dbUsers.create({ name_cliente, rg_cliente, cpf_cliente, email_cliente, dtnasc_cliente, senha_cliente, sexo_cliente })

        } catch (error) {
            console.log("deu ruim aqui")
        }


    },
    buscarUsuario: async(req, res) => {
        const usuario = await db.Users.findAll()
        res.send(usuario)
    }
};

module.exports = createUser