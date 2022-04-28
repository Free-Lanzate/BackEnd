'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{
      jobTitle: "Titulo post de ejemplo",
      FreelancerId: 1,
      jobDescription: "Description de post",
      jobPrice: 10000,
      PostCategoryId: 1,
      thumbnailUrl: "/public/someimage",
      adPriority: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
