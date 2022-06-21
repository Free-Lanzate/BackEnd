'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('CartItems', [{
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:14
        },
        {
            quantity: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:15
        },
        {
            quantity: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:10
        },
        {
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 1,
            postId:14
        },
        {
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 2,
            postId:15
        },
        {
            quantity: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 2,
            postId:10
        },
        {
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 2,
            postId:11
        },
        {
            quantity: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 6,
            postId:4
        },
        {
            quantity: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 7,
            postId:7
        },
        {
            quantity: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
            sessionId: 3,
            postId:20
        },
    ]);
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('CartItems', null, {});
    }
};