// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, errors } = format;

// Formato personalizado de logs
const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

// Crear el logger
const logger = createLogger({
  format: combine(
    timestamp(),
    errors({ stack: true }),  // Incluir el stack trace
    myFormat
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),  // Guardar errores en 'error.log'
    new transports.Console()  // Mostrar también en consola
  ]
});

module.exports = logger;
