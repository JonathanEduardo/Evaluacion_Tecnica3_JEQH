const { Sequelize } = require('sequelize');
require('dotenv').config();
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
// const sequelize = new Sequelize('reservas_db', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306, // Si tienes el puerto en el archivo .env, puedes agregarlo así
  });
  
module.exports = sequelize;
