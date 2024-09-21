

# Biblioteca API
Esta es una API RESTful para la gestión de eventos.
This is a RESTful API for managing a events.

## Requisitos previos
Asegúrate de tener instalado lo siguiente:

Node.js (v14 o superior)
NPM (que viene con Node.js)
MySQL o XAMPP (opcional)
Si no tienes instalado MySQL, puedes optar por instalar XAMPP, que proporciona un servidor MySQL junto con Apache.


### Clonar el Repositorio
- **Para clonar el repositorio, utiliza el siguiente comando en tu terminal:**
- **To clone the repository, use the following command in your terminal:**
```bash
git clone https://github.com/JonathanEduardo/Evaluacion_Tecnica3_JEQH.git
```
-**Entrar a carpeta clonada**
-**Enter cloned folder**
```bash
cd /reserva_eventos_api
```

-**Instalar dependencias**
-**Install dependences**
```bash
npm install
```

#### Configuración de MySQL
-**Usar MySQL instalado de manera independiente**
-*Instala MySQL desde el sitio oficial MySQL.*
-*Inicia el servicio de MySQL y crea una base de datos llamada reservas_db:*

```bash 
CREATE DATABASE reservas_db;
```
-*Cambia el nombre de .example.env a .env y completa los campos:  DB_USER, DB_PASSWORD y DB_NAME: reservas_db*
-*Change the document name from .example.env to .env and complete the: DB_USER, DB_PASSWORD y DB_NAME: reservas_db*
```bash 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=12345678
DB_NAME=reservas_db
```

### Configuración del archivo .env y ejecutar migraciones
-**Copia el archivo de ejemplo .env.example y renómbralo a .env:**
-**Copia el archivo de ejemplo .env.example y renómbralo a .env:**
```bash 
npx sequelize-cli db:migrate
```

-**Ejecutar servidor**
```bash 
npm start
```





#### Endpoints Eventos
- **1. GET Listar Todos Eventos**
- **1. GET List All Events**
```bash
curl -X GET http://localhost:3000/eventos
```


- **2. POST Nuevo Eventos**
- **2. POST New Event**
```bash cmd
curl -X POST http://localhost:3000/eventos \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Concierto",
    "fecha": "2024-09-25T19:00:00",
    "ubicacion": "Estadio Nacional"
}'
```


- **3. GET Obtener Autor con id : 1**
- **3. GET Retrieve Event with ID: 1**
```bash
curl -X GET http://localhost:3000/eventos/1
```

- **4. PUT Modificar Evento con id : 1**
- **4. PUT Update Event with ID: 1**
```bash c
curl -X PUT http://localhost:3000/eventos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Concierto Actualizado",
    "fecha": "2024-09-30T20:00:00",
    "ubicacion": "Arena Central"
}'

```

- **5. DELETE Eliminar el primer Evento**
- **5. PUT Delete Event with ID: 1**
```bash cmd
curl -X DELETE http://localhost:3000/eventos/1
```
### Endpoints Reservas

- **1. GET Listar Todos Reservas**
- **1. GET List All Reservations**
```bash cmd
curl -X GET http://localhost:3000/reservas
```

- **2. POST Nuevo Reserva**
- **2. POST New Reservation**
```bash cmd
curl -X POST http://localhost:3000/reservas \
-H "Content-Type: application/json" \
-d '{"nombre_usuario": "Juan Pérez", "cantidad_boletos": 2, "fecha_reserva": "2024-09-30T12:00:00Z", "evento_id": 1}'
```

- **3. GET Obtener Reserva con id : 1**
- **3. GET Retrieve Reservation with ID: 1**
```bash cmd
curl -X GET http://localhost:3000/reservas/1
```

- **4. PUT Modificar Reserva con id : 1**
- **4. PUT Update Reservation with ID: 1**
```bash cmd
curl -X PUT http://localhost:3000/reservas/1 \
-H "Content-Type: application/json" \
-d '{"nombre_usuario": "Juan Pérez", "cantidad_boletos": 3, "fecha_reserva": "2024-10-01T12:00:00Z", "evento_id": 1}'
```


- **5. DELETE Eliminar el primer Evento**
- **5. PUT Delete Reservation with ID: 1**
```bash cmd
curl -X DELETE http://localhost:3000/reservas/1
```

