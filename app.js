const express = require('express');
const cors = require('cors');  // Para habilitar CORS
const bodyParser = require('body-parser');
const db = require('./config/database');  // Tu configuración de la base de datos
const eventoRoutes = require('./routes/eventos');  // Las rutas de eventos
const reservaRoutes = require('./routes/reservas');  // Las rutas de reservas

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos
db.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error al conectar a la base de datos: ', err));

// Rutas
app.use('/eventos', eventoRoutes);
app.use('/reservas', reservaRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
