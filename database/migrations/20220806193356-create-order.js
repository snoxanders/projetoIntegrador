'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable('pedido_cliente', {
            idPedido: {
                type: Sequelize.INTEGER,

                allowNull: false
            },
            idCliente: {
                type: Sequelize.STRING,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            dataPedido: {
                type: Sequelize.DATE,
                allowNull: false
            },
            idProduto: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            idCartao: {
                type: Sequelize.INTEGER,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            valorProduto: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            nomeDestinatario: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userEndereco: {
                type: Sequelize.STRING,
                allowNull: false
            },
            userCidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userEstado: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userCep: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            statusPedido: {
                type: Sequelize.TINYINT(1),
                allowNull: false,
            }
        });

    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('pedido_cliente');

    }
};