'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('endereco_cliente', [
    {
      idEndereco: 1,
      endRua: "Rua sete de setembro",
      endNumero: 4336,
      endBairro: "Boa Vista",
      endCep: 57980095,
      endCidade: "Barretos",
      endEstado: "São Paulo",
      id: 1,
  },
  
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('endereco_cliente', null, {});
  }
};
