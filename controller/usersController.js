const { Console } = require("console");
const db = require("../database/models/index");
const validateUser = require("./validations/validator");

const createUser = {
  criarUsuario: async (req, res) => {
    try {
      validateUser(req.body);
      const user = await db.User.create(req.body);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ user });
      console.log("deu ruim aqui", error);
    }
  },

  buscarUsuario: async (req, res) => {

    const { emailCliente, senhaCliente} = req.body
    const user = await db.User.findOne({where: {emailCliente, senhaCliente}});
    console.log(user)

    if(!user){
      console.log('tem ninguem aqui nao')
    }else{
      res.render("perfil", {user:user});
    }
    
    
  },




  editarUsuario: async (req, res) => {
    try {
      console.log('Deus')
      const { id } = req.params;
      console.log(id)
      const { emailCliente, senhaCliente, cpfCliente } = req.body;
      // const user = await User.findOne({ where: { id } });
      // if (!user) {
      //   res.status(200).json({ message: "Nenhum usuario encontrado" });
      // } else {
        const user = await db.User.update(
          { emailCliente, senhaCliente, cpfCliente },
          { where: { idCliente: id } }
        );
        res.status(200).json({ user });
      //}
    } catch (error) {
      res.status(400).json({ error });
    }
  },




  deletarUsuario: async (req, res) => {
    const { id } = req.params;
    await db.User.destroy({ where: { idCLiente: id } });
  },
};


 

module.exports = createUser;
