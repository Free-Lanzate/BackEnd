'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: "demo_freelance1",
      firstName: 'John',
      lastName: 'Doe',
      email: 'freelanzer1@example.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "demo_freelance2",
      firstName: 'John',
      lastName: 'Doe2',
      email: 'freelanzer2@example.com',
      isFreelancer: true,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: "demo_user1",
      firstName: 'Cosme',
      lastName: 'Fulanito',
      email: 'user1@example.com',
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
      isFreelancer: false,
      password: '$2a$10$jCg.1fe7OosJsgRNHx0QKe7c6tS6P/us85IdqzA2ZUlH6ldQ6vnnK',
      password: 'password3',
      email: 'example@example.com',
      isFreelancer: true,
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
