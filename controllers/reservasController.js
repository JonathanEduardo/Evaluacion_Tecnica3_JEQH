const { Reserva } = require('../models');
const Evento = require('../models/Evento'); // Asegúrate de incluir esto

// Controladores de Reservas

/**
 * @function listarReservas
 * @description Retrieves a list of all reservations.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing an array of reservation objects or an error message.
 */
exports.listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: 'Error al listar reservas' });
  }
};

/**
 * @function crearReserva
 * @description Creates a new reservation based on the request body, verifying the event exists.
 * @async
 * @param {Object} req - The request object containing reservation details in the body.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing the created reservation object or an error message.
 */
exports.crearReserva = async (req, res) => {
  try {
    // Verify that the event exists
    const evento = await Evento.findByPk(req.body.evento_id);
    if (!evento) {
      return res.status(400).json({ error: 'El evento no existe' });
    }
    
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear la reserva' });
  }
};

/**
 * @function obtenerReserva
 * @description Retrieves a single reservation by its ID.
 * @async
 * @param {Object} req - The request object containing the reservation ID in the parameters.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing the reservation object or an error message.
 */
exports.obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

/**
 * @function actualizarReserva
 * @description Updates an existing reservation by its ID.
 * @async
 * @param {Object} req - The request object containing the reservation ID in the parameters and updated data in the body.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A JSON response containing the updated reservation object or an error message.
 */
exports.actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.update(req.body);
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar la reserva' });
  }
};

/**
 * @function eliminarReserva
 * @description Deletes a reservation by its ID.
 * @async
 * @param {Object} req - The request object containing the reservation ID in the parameters.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A response with status 204 on successful deletion or an error message.
 */
exports.eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};
