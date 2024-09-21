'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      // A Evento has many Reservas
      Evento.hasMany(models.Reserva, { foreignKey: 'evento_id' });
    }
  }
  Evento.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    ubicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};
