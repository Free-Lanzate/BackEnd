'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Freelancers', [{
      UserId: 1,
      freelancerRating: 10,
      country: "Colombia",
      city: "Zipaquira",
      postalCode: "254000",
      address: "Cra 0#00",
      phoneNumber: '3213249137',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 2,
      freelancerRating: 5,
      country: "Colombia",
      city: "Pacho",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3213249138',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
