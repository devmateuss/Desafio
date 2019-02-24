'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Moviments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      value: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Este campo é obrigatorio"
          }
        }
      },
      AgentId: {  
        allowNull: false,  
        type: Sequelize.INTEGER,  
        onDelete: 'CASCADE',  
        references: {  
          model: 'Agents',  
          key: 'id'  
        }  
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Moviments');
  }
};