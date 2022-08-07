'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('endereco_cliente', {
      idEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endRua: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endNumero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endBairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endCep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endCidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endEstado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        //CHAVE ESTRANGEIRA, CONECTAR NO BANCO DE DADOS USERS.
      }
       });
     
  },

   down (queryInterface, Sequelize) {
   return queryInterface.dropTable('endereco_cliente');
     
  }
};



