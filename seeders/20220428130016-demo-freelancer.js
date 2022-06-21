'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Freelancers', [{
      UserId: 1,
      freelancerRating: 5,
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
    },
    {
      UserId: 4,
      freelancerRating: 4,
      country: "Colombia",
      city: "Bogotá",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3123458734',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 6,
      freelancerRating: 4,
      country: "Colombia",
      city: "Cali",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3213249138',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 7,
      freelancerRating: 4,
      country: "Colombia",
      city: "Salento",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3213249138',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 10,
      freelancerRating: 3,
      country: "España",
      city: "Madrid",
      postalCode: "28019",
      address: "Calle Belmonte De Tajo, 76",
      phoneNumber: '914603164',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 12,
      freelancerRating: 5,
      country: "Colombia",
      city: "Bucaramanga",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3213235462',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 13,
      freelancerRating: 4,
      country: "Colombia",
      city: "Medellín",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3318731298',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 14,
      freelancerRating: 4,
      country: "Colombia",
      city: "Cali",
      postalCode: "254001",
      address: "Cra 1#11",
      phoneNumber: '3104523987',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
