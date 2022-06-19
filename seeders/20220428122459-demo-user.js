'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: "cgarcia",
      firstName: 'Camilo',
      lastName: 'Garcia',
      email: 'cgarcia@hotmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "ymccartney",
      firstName: 'Yazmin',
      lastName: 'Mccartney',
      email: 'ymccartney@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "ngalindo",
      firstName: 'Noemi',
      lastName: 'Galindo',
      email: 'ngalindo@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "dzambranob",
      firstName: 'David',
      lastName: 'Zambrano',
      email: 'davidalexz2015@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "jubustamantem",
      firstName: 'Juan',
      lastName: 'Bustamante',
      email: 'jubustamantem@unal.edu.co',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "jmrodriguez",
      firstName: 'John Milton',
      lastName: 'Rodriguez',
      email: 'jmrodriguez@hotmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "acherandez",
      firstName: 'Andrés Camilo',
      lastName: 'Hernández',
      email: 'achernadez@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "jvalvuena",
      firstName: 'Jesús',
      lastName: 'Valvuena',
      email: 'jvalvuena@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "eamaya",
      firstName: 'Eutimio',
      lastName: 'Amaya',
      email: 'eamaya@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "mcontreras",
      firstName: 'Marcos',
      lastName: 'Contreras',
      email: 'mcontreras@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "adominguez",
      firstName: 'Antonio',
      lastName: 'Dominguez',
      email: 'adominguez@hotmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "tcastro",
      firstName: 'Tatiana',
      lastName: 'Castro',
      email: 'tcastro@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "aorozco",
      firstName: 'Alex',
      lastName: 'Orozco',
      email: 'aorozco@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "jmcanas",
      firstName: 'Juan Manuel',
      lastName: 'Cañas',
      email: 'jmcanas@gmail.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "mjsalgado",
      firstName: 'María José',
      lastName: 'Salgado',
      email: 'mjsalgado@gmail.com',
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
