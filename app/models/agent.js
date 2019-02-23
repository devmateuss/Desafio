'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agent', {
    name: DataTypes.STRING,
    departament: {
      type: DataTypes.INTEGER,
      references: {
        model:'Departament',
        key: 'id',
        deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {});
  Agent.associate = function(models) {
    Agent.belongsTo(models.Departament)
    Agent.hasMany(models.Moviment)
  };
  return Agent;
};