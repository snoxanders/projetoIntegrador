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
    },

    editarUsuario: async(req, res) => {
        const editarUser = await db.Users.update(users, { where: { id } })
    },

    deletarUsuario: async(req, res) => {
        const deletarUser = await db.Users.destroy({ where: { id } })
    },



};

module.exports = createUser