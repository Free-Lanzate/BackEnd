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
      OrderDetailId: 1,
      PostId: 6,
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
    },
    {
      OrderDetailId: 5,
      PostId: 13,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 15,
      PostId: 6,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 16,
      PostId: 4,
      itemAmount: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 4,
      PostId: 7,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 6,
      PostId: 16,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 9,
      PostId: 3,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 11,
      PostId: 17,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 6,
      PostId: 7,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 13,
      PostId: 10,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 8,
      PostId: 8,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 14,
      PostId: 17,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 3,
      PostId: 15,
      itemAmount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      OrderDetailId: 5,
      PostId: 10,
      itemAmount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};