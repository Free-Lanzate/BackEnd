'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('ShoppingSessions', [{
            total: 123213,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        },
        {
            total: 134000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 2,
        },
        {
            total: 1350000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 12,
        },
        {
            total: 4500000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 8,
        },
        {
            total: 54654,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 6,
        },
        {
            total: 3503700,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 4,
        },
        {
            total: 5600000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 15,
        },
        {
            total: 34700000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 4,
        },
        {
            total: 23400600,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 13,
        },
        {
            total: 7600057,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 3,
        },
        ]);
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ShoppingSessions', null, {});
    }
};