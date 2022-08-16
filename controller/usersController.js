const db = require("../database/models/index") 

const createUser = {
    criarUsuario: async(req, res) => {
        try {
            console.log('DB MODELS', await db.User.create(req.body))
            

        } catch (error) {
            console.log("deu ruim aqui", error)

            
        }


    },
    buscarUsuario: async(req, res) => {
        const usuario = await db.Users.findAll()
        res.send(usuario);
        res.redirect('/perfil');
    },

    editarUsuario: async(req, res) => {
        const editarUser = await db.Users.update(users, { where: { id } })
    },

    deletarUsuario: async(req, res) => {
        const deletarUser = await db.Users.destroy({ where: { id } })
    },



};

module.exports = createUser