'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Freelancers', [{
      id: 1,
      freelancerRating: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      freelancerRating: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
