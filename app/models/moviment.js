'use strict';
module.exports = (sequelize, DataTypes) => {
  const Moviment = sequelize.define('Moviment', {
    description: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    agent: {
      type: DataTypes.INTEGER,
      references: {
        model:'Agent',
        key: 'id',
        deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {});
  Moviment.associate = function(models) {
    this.belongsTo(models.Agent)
  };
  return Moviment;
};