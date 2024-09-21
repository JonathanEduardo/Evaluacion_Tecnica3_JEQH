// middlewares/errorHandler.js

function errorHandler(err, req, res, next) {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        // Solo en desarrollo mostramos el stack trace
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

module.exports = errorHandler;
