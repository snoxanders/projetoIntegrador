'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('usuario_cliente', [
    {
      idCliente: 1,
      nameCliente: "Alexandre Japa Jeferson Thayane",
      rgCliente: 911225341,
      cpfCliente: 64612913000,
      emailCliente: "alejajetha@gmail.com",
      dtnascCliente: 101994,
      senhaCliente: "senha-dificil",
      sexoCliente: "Masculino",
      
      
      
  },
  
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuario_cliente', null, {});
  }
};
