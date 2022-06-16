'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Uno tiene la palabra programacion, luego veo con tilde, en el titulo, otra en la descripcion. Para testear algo de busqueda.
    return queryInterface.bulkInsert('Posts', [{
      postTitle: "Programacion en Java y Python",
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
    {
      postTitle: "Programador de Aplicaciones moviles",
      FreelancerId: 2,
      postDescription: "Una descripcion",
      postPrice: 2000,
      PostCategoryId: 1,
      thumbnailUrl: "/public/someimage",
      adPriority: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Posters de cualquier tamaño",
      FreelancerId: 3,
      postDescription: "De todo tamaño y forma",
      postPrice: 15000,
      PostCategoryId: 2,
      thumbnailUrl: "/public/someimage",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Traducción al inglés",
      FreelancerId: 3,
      postDescription: "Traducción de textos e imágenes",
      postPrice: 50000,
      PostCategoryId: 5,
      thumbnailUrl: "/public/someimage",
      adPriority: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Edición de video profesional",
      FreelancerId: 4,
      postDescription: "Edito video en Movie Maker",
      postPrice: 40000,
      PostCategoryId: 3,
      thumbnailUrl: "/public/someimage",
      adPriority: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Parranda vallenata",
      FreelancerId: 4,
      postDescription: "Parranda vallenata y otros géneros",
      postPrice: 25000,
      PostCategoryId: 4,
      thumbnailUrl: "/public/someimage",
      adPriority: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Clase de salsa",
      FreelancerId: 1,
      postDescription: "Clases de salsa para todas las edades",
      postPrice: 35000,
      PostCategoryId: 4,
      thumbnailUrl: "/public/someimage",
      adPriority: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
