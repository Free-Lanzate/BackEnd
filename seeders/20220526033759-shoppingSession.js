'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('ShoppingSessions', [{
            total: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 1,
        },
        {
            total: 1000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 2,
        },
        {
            total: 2000,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: 3,
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
        ]);
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('ShoppingSessions', null, {});
    }
};