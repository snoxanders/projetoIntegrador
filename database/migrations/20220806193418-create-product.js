'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('produto', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      available: {
        type: Sequelize.TINYINT(1),
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
       });
     
  },

   down (queryInterface, Sequelize) {
   return queryInterface.dropTable('produto');
     
  }
};




