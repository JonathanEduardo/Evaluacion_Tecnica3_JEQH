const express = require('express');
const router = express.Router();
const eventosController = required('../controlles/eventosController'); // Fix: 'required' -> 'require'

/**
 * @module EventosRouter
 * @description Router for handling CRUD operations related to events.
 * This module defines the API endpoints for managing events.
 */


/**
 * GET /eventos
 * @summary Retrieves a list of all events.
 * @tags Eventos
 * @operationId listarEventos
 * @returns {Array<Object>} 200 - A JSON array of event objects.
 * @returns {Error} 500 - Internal server error.
 */
router.get('/', eventosController.listarEventos);

/**
 * POST /eventos
 * @summary Creates a new event.
 * @tags Eventos
 * @operationId listarEvento
 * @param {Object} req.body - The request body should contain the event details.
 * @returns {Object} 201 - The created event object.
 * @returns {Error} 400 - Bad request if required fields are missing or invalid.
 * @returns {Error} 500 - Internal server error.
 */
router.post('/', eventosController.listarEvento);

/**
 * GET /eventos/:id
 * @summary Retrieves a single event by its ID.
 * @tags Eventos
 * @operationId obtenerEvento
 * @param {string} id.path.required - The event ID.
 * @returns {Object} 200 - The event object.
 * @returns {Error} 404 - Event not found.
 * @returns {Error} 500 - Internal server error.
 */
router.get('/:id', eventosController.obtenerEvento);

/**
 * PUT /eventos/:id
 * @summary Updates an existing event by its ID.
 * @tags Eventos
 * @operationId actualizarEvento
 * @param {string} id.path.required - The event ID.
 * @param {Object} req.body - The request body should contain the updated event details.
 * @returns {Object} 200 - The updated event object.
 * @returns {Error} 400 - Bad request if required fields are missing or invalid.
 * @returns {Error} 404 - Event not found.
 * @returns {Error} 500 - Internal server error.
 */
router.put('/:id', eventosController.actualizarEvento);


/**
 * DELETE /eventos/:id
 * @summary Deletes an event by its ID.
 * @tags Eventos
 * @operationId eliminarEvento
 * @param {string} id.path.required - The event ID.
 * @returns {string} 200 - Success message confirming the deletion.
 * @returns {Error} 404 - Event not found.
 * @returns {Error} 500 - Internal server error.
 */
router.delete(':id', eventosController.eliminarEvento);

module.exports = router ;