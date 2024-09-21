
const { Evento } = require('../models');
const logger = require('../logger');  // Importa el logger
// Controladores de Eventos

/**
 * @function listarEventos
 * @description Retrieves a list of all events.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing an array of event objects or an error message.
 */
exports.listarEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    logger.error('Error al listar eventos', error);  // Registrar el error
    res.status(500).json({ error: 'Error al listar eventos' });
  }
};

/**
 * @function crearEvento
 * @description Creates a new event based on the request body.
 * @async
 * @param {Object} req - The request object containing event details in the body.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing the created event object or an error message.
 */
exports.crearEvento = async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    res.status(201).json(evento);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el evento' });
  }
};

/**
 * @function obtenerEvento
 * @description Retrieves a single event by its ID.
 * @async
 * @param {Object} req - The request object containing the event ID in the parameters.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing the event object or an error message.
 */
exports.obtenerEvento = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    if (evento) {
      res.json(evento);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el evento' });
  }
};

/**
 * @function actualizarEvento
 * @description Updates an existing event by its ID.
 * @async
 * @param {Object} req - The request object containing the event ID in the parameters and updated data in the body.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing the updated event object or an error message.
 */
exports.actualizarEvento = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    if (evento) {
      await evento.update(req.body);
      res.json(evento);
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el evento' });
  }
};

/**
 * @function eliminarEvento
 * @description Deletes an event by its ID.
 * @async
 * @param {Object} req - The request object containing the event ID in the parameters.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A response with status 204 on successful deletion or an error message.
 */
exports.eliminarEvento = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    if (evento) {
      await evento.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};
