'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Freelancers', [{
      id: 1,
      freelancerRating: 10,
      country: "Colombia",
      city: "Zipaquira",
      postalCode: "254000",
      address: "Cra 0#00",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      freelancerRating: 5,
      country: "Colombia",
      city: "Pacho",
      postalCode: "254001",
      address: "Cra 1#11",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
