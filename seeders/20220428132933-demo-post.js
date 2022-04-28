'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{
      postTitle: "Titulo post de ejemplo",
      FreelancerId: 1,
      postDescription: "Description de post",
      postPrice: 10000,
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
