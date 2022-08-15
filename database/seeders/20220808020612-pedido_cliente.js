'use strict';

module.exports = {
    up: async(queryInterface) => queryInterface.bulkInsert('pedido_cliente', [{
            idPedido: 1,
            idCliente: 1,
            idProduto: 301,
            dataPedido: 110722,
            idCartao: 1,
            valorProduto: 670.00,
            nomeDestinatario: "Alexandre Japa Jeferson Thayane",
            userEndereco: "Rua sete de setembro",
            userCidade: "Barretos",
            userEstado: "São Paulo",
            userCep: 57980095,
            statusPedido: 1,


        },

    ], {}),
    down: async(queryInterface) => {
        await queryInterface.bulkDelete('pedido_cliente', null, {});
    }
};