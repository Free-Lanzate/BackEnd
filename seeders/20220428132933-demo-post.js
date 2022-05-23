'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Uno tiene la palabra programacion el el titulo, otra en la descripcion. Para testear algo de busqueda.
    return queryInterface.bulkInsert('Posts', [{
      postTitle: "Progracion en Java y Python",
      FreelancerId: 1,
      postDescription: "Una descripcion de todos los tutoriales de youtube que he visto",
      postPrice: 1000,
      PostCategoryId: 1,
      thumbnailUrl: "/public/someimage",
      adPriority: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      postTitle: "Programo en Golang y Scala",
      FreelancerId: 2,
      postDescription: "Una descripcion de todos los tutoriales de programacion de youtube que he visto",
      postPrice: 2000,
      PostCategoryId: 1,
      thumbnailUrl: "/public/someimage",
      adPriority: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
