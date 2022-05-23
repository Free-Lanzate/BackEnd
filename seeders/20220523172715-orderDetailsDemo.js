'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Uno tiene la palabra programacion el el titulo, otra en la descripcion. Para testear algo de busqueda.
    return queryInterface.bulkInsert('OrderDetails', [{
      UserId: 1,
      orderTotal: 5000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      UserId: 1,
      orderTotal: 3000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};