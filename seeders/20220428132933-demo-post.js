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
      adPriority: 3,
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
      adPriority: 3,
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
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Posters de cualquier tamaño",
      FreelancerId: 7,
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
      adPriority: 2,
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
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Parranda vallenata",
      FreelancerId: 4,
      postDescription: "Parranda vallenata y otros géneros",
      postPrice: 25000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Clase de salsa",
      FreelancerId: 1,
      postDescription: "Clases de salsa para todas las edades",
      postPrice: 35000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Limpieza de autos",
      FreelancerId: 7,
      postDescription: "Limpieza de todo tipo de autos a domicilio. Calidad Garantizada",
      postPrice: 70000,
      PostCategoryId: 6,
      thumbnailUrl: "/public/someimage",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Traducción al español",
      FreelancerId: 3,
      postDescription: "Traducción profesional de documentos en inglés, francés o alemán al español",
      postPrice: 55000,
      PostCategoryId: 5,
      thumbnailUrl: "/public/someimage",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Producción de comerciales",
      FreelancerId: 7,
      postDescription: "Grabación y edición de comerciales para todos los productos",
      postPrice: 100000,
      PostCategoryId: 3,
      thumbnailUrl: "/public/someimage",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Servicio de contaduría",
      FreelancerId: 3,
      postDescription: "Todos los servicios de contaduría en un solo lugar",
      postPrice: 30000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Confección de camisas y camisetas",
      FreelancerId: 5,
      postDescription: "Confecciones de camisas y camisetas de todos los estilos, tallas y colores",
      postPrice: 45000,
      PostCategoryId: 7,
      thumbnailUrl: "/public/someimage",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Contrucción de muebles de madera",
      FreelancerId: 6,
      postDescription: "Se construyen todo tipo de muebles de madera",
      postPrice: 150000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Preparación de comida para eventos",
      FreelancerId: 8,
      postDescription: "Preparación de comida para toda clase de eventos",
      postPrice: 85000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Arreglo de televisores y computadores",
      FreelancerId: 3,
      postDescription: "Reparación profesional de televisores de pantalla plana y computadores portátiles. Calidad garantizada",
      postPrice: 100000,
      PostCategoryId: 1,
      thumbnailUrl: "/public/someimage",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Publicidad para negocios",
      FreelancerId: 7,
      postDescription: "Publicidad para avisos de negocios",
      postPrice: 90000,
      PostCategoryId: 2,
      thumbnailUrl: "/public/someimage",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Arreglo de celulares",
      FreelancerId: 3,
      postDescription: "Arreglo de celulares de todas las marcas",
      postPrice: 55000,
      PostCategoryId: 1,
      thumbnailUrl: "/public/someimage",
      adPriority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Maestro de obra",
      FreelancerId: 9,
      postDescription: "Mestro de obra en arreglo de casas y apartamentos con experiencia",
      postPrice: 1500000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      postTitle: "Clase de bordado a mano",
      FreelancerId: 1,
      postDescription: "Clases de bordado de sacos para todas las edades",
      postPrice: 70000,
      PostCategoryId: 8,
      thumbnailUrl: "/public/someimage",
      adPriority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
