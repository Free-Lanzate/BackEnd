'use strict';
const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    static associate(models) {
      console.log()
    }
  }
  PostCategory.init({
      categoryName: {
          type: DataTypes.STRING,
      }
  }, {
    sequelize,
    modelName: 'PostCategory',
  });
  return PostCategory;
};
