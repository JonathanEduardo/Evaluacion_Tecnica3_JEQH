const { Sequelize } = require('sequelize');

/**
 * @module Database
 * @description Configuration for connecting to the MySQL database using Sequelize.
 */

/**
 * Creates a new instance of Sequelize for connecting to the MySQL database.
 * 
 * @const {Sequelize} sequelize
 * @global
 * @property {string} database - The name of the database (e.g., 'reservas_db').
 * @property {string} username - The database username (e.g., 'root').
 * @property {string} password - The database password (empty in this case).
 * @property {Object} options - Configuration options for Sequelize.
 * @property {string} options.host - The host of the database (e.g., 'localhost').
 * @property {string} options.dialect - The database dialect (e.g., 'mysql').
 */
const sequelize = new Sequelize('reservas_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
