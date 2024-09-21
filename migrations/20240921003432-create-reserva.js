'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cantidad_boletos: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha_reserva: {
        type: Sequelize.DATE,
        allowNull: false
      },
      evento_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Eventos', // Nombre de la tabla a la que hace referencia (Eventos)
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};
