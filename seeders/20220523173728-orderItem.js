'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('OrderItems', [{
      OrderDetailId: 1,
      PostId: 1,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 2,
      PostId: 2,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};