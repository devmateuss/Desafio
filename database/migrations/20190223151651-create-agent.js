'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Este campo não pode ser vazio"
          }
        }
      },
      departament: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'Departaments',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Agents');
  }
};