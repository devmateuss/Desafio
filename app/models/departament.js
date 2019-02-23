'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departament = sequelize.define('Departament', {
    name: DataTypes.STRING
  }, {});
  Departament.associate = function(models) {
    Departament.hasMany(models.Agent)
  };
  return Departament;
};