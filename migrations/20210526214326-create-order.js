'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",//Para borrar en todas las tablas o sumar y asi mantener nuestra integridad
        onUpdate: "CASCADE"
      },
      movieId: {
        type: Sequelize.INTEGER
      },
      name:{
        type: Sequelize.STRING
      },
      surname:{
        type: Sequelize.STRING
      },
      movieTitle:{
        type: Sequelize.STRING
      },
      imageMovie:{
        type: Sequelize.STRING
      },
      rentalDate: {
        type: Sequelize.DATE
      },
      returnDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};