'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuario_cliente', {
      idCliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      nameCliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rgCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cpfCliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      emailCliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dtnascCliente: {
        type: Sequelize.DATE,
        allowNull: false
      },
      senhaCliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexoCliente: {
        type: Sequelize.STRING,
        allowNull: false
      }
       });
     
  },

   down (queryInterface, Sequelize) {
   return queryInterface.dropTable('usuario_cliente');
     
  }
};