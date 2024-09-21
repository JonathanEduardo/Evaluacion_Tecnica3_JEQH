'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      // Una Reserva pertenece a un Evento
      Reserva.belongsTo(models.Evento, { foreignKey: 'evento_id' });
    }
  }
  Reserva.init({
    nombre_usuario: DataTypes.STRING,
    cantidad_boletos: DataTypes.INTEGER,
    fecha_reserva: DataTypes.DATE,
    evento_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};
