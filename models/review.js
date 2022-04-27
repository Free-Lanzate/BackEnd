'use strict';
const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      console.log()
    }
  }
  Review.init({
      reviewContent: {
          type: DataTypes.TEXT, 
          allowNull: false
      },
      reviewRating: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
