'use strict';
module.exports = (sequelize, DataTypes) => {
  const Moviment = sequelize.define('Moviment', {
    description: DataTypes.STRING,
    value: DataTypes.DECIMAL
  }, { underscored: false, timestamps: false });
  Moviment.associate = function(models) {
    Moviment.belongsTo(models.Agent)
  };
  return Moviment;
};