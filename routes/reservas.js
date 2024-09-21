const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

/**
 * @module ReservasRouter
 * @description Router for handling CRUD operations related to reservations.
 * This module defines the API endpoints for managing reservations.
 */

/**
 * GET /reservas
 * @summary Retrieves a list of all reservations.
 * @tags Reservas
 * @operationId listarReservas
 * @returns {Array<Object>} 200 - A JSON array of reservation objects.
 * @returns {Error} 500 - Internal server error.
 */
router.get('/', reservasController.listarReservas);

/**
 * POST /reservas
 * @summary Creates a new reservation.
 * @tags Reservas
 * @operationId crearReserva
 * @param {Object} req.body - The request body should contain the reservation details.
 * @returns {Object} 201 - The created reservation object.
 * @returns {Error} 400 - Bad request if require fields are missing or invalid.
 * @returns {Error} 500 - Internal server error.
 */
router.post('/', reservasController.crearReserva);

/**
 * GET /reservas/:id
 * @summary Retrieves a single reservation by its ID.
 * @tags Reservas
 * @operationId obtenerReserva
 * @param {string} id.path.require - The reservation ID.
 * @returns {Object} 200 - The reservation object.
 * @returns {Error} 404 - Reservation not found.
 * @returns {Error} 500 - Internal server error.
 */
router.get('/:id', reservasController.obtenerReserva);

/**
 * PUT /reservas/:id
 * @summary Updates an existing reservation by its ID.
 * @tags Reservas
 * @operationId actualizarReserva
 * @param {string} id.path.require - The reservation ID.
 * @param {Object} req.body - The request body should contain the updated reservation details.
 * @returns {Object} 200 - The updated reservation object.
 * @returns {Error} 400 - Bad request if require fields are missing or invalid.
 * @returns {Error} 404 - Reservation not found.
 * @returns {Error} 500 - Internal server error.
 */
router.put('/:id', reservasController.actualizarReserva);

/**
 * DELETE /reservas/:id
 * @summary Deletes a reservation by its ID.
 * @tags Reservas
 * @operationId eliminarReserva
 * @param {string} id.path.require - The reservation ID.
 * @returns {string} 200 - Success message confirming the deletion.
 * @returns {Error} 404 - Reservation not found.
 * @returns {Error} 500 - Internal server error.
 */
router.delete('/:id', reservasController.eliminarReserva);

module.exports = router;
