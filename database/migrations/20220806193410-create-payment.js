'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable('pagamento_cliente', {
            idCliente: {
                type: Sequelize.INTEGER,
                allowNull: false
                    //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
            },
            idCartao: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            numeroCartao: {
                type: Sequelize.STRING,
                allowNull: false
            },

            nomeTitular: {
                type: Sequelize.STRING,
                allowNull: false
            },
            validadeCartao: {
                type: Sequelize.DATE,
                allowNull: false

            }
        });

    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('pagamento_cliente');

    }
};