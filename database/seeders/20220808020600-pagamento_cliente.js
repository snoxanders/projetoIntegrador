'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('pagamento_cliente', [
    {
      idCliente: 1,
      idCartao: 1,
      numeroCartao: 5455380804349848,
      nomeTitular: "Alexandre Japa Jeferson Thayane",
      validadeCartao: 10022024,
      
      
  },
  
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pagamento_cliente', null, {});
  }
};