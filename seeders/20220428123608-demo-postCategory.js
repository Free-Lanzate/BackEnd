'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PostCategories', [{
      categoryName: "Programacion y tecnología",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Diseno Grafico",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Video y animación",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Audio",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Traducción",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Limpieza",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Confección",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: "Otro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
  }
};
