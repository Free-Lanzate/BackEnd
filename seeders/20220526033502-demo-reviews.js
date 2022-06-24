'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [{
      id:1,
      reviewContent: "Muy buen programador. Recomendado",
      reviewRating: 5,
      OrderItemId: 1,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:2,
      reviewContent: "Pesimo programador.",
      reviewRating: 0,
      OrderItemId: 1,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};