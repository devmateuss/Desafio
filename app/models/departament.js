'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departament = sequelize.define('Departament', {
    name: DataTypes.STRING,
  }, { underscored: false, timestamps: false });
  Departament.associate = function(models) {
  };
  return Departament;
};