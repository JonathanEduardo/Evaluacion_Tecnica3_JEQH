const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * @module Evento
 * @description Model representing an event in the database.
 */

/**
 * Evento model definition.
 * 
 * @constant {Model} Evento
 * @property {string} nombre - The name of the event. Must not be null.
 * @property {Date} fecha - The date of the event. Must not be null.
 * @property {string} ubicacion - The location of the event. Must not be null.
 */
const Evento = sequelize.define('Evento', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  fecha: { type: DataTypes.DATE, allowNull: false },
  ubicacion: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Evento;
