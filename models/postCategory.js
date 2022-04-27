'use strict';
const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostCategory extends Model {
    static associate(models) {
        PostCategory.hasOne(models.Post,{
            foreignKey: {
              allowNull: false
            }
          });
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
