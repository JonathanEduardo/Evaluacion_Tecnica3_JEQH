const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./Evento');

/**
 * @module Reserva
 * @description Model representing a reservation in the database.
 */

/**
 * Reserva model definition.
 * 
 * @constant {Model} Reserva
 * @property {string} nombre_usuario - The name of the user making the reservation. Must not be null.
 * @property {number} cantidad_boletos - The number of tickets reserved. Must not be null.
 * @property {Date} fecha_reserva - The date of the reservation. Must not be null.
 */
const Reserva = sequelize.define('Reserva', {
  nombre_usuario: { type: DataTypes.STRING, allowNull: false },
  cantidad_boletos: { type: DataTypes.INTEGER, allowNull: false },
  fecha_reserva: { type: DataTypes.DATE, allowNull: false }
});

/**
 * Defines the relationship between Reserva and Evento.
 * A reservation belongs to an event.
 * 
 * @function belongsTo
 * @param {Model} Evento - The event model.
 * @param {Object} options - Options for the association.
 * @param {string} options.foreignKey - Foreign key in the Reserva model (evento_id).
 */
Reserva.belongsTo(Evento, { foreignKey: 'evento_id' }); // Relation with table or model Event

module.exports = Reserva;
