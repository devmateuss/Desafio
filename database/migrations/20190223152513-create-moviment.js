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
      agent: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'Agents',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Moviments');
  }
};