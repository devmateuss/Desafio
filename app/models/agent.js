'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agent', {
    name: DataTypes.STRING
  }, { underscored: false, timestamps: false });
  Agent.associate = function(models) {
    Agent.belongsTo(models.Departament)
  };
  return Agent;
};