'use strict';
const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
        Post.hasOne(models.Attachment,{
            foreignKey: {
              allowNull: false
            }
          });
    }
  }
  Post.init({
      jobTitle: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      jobDescription: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      jobPrice: {
          type: DataTypes.FLOAT,
          allowNull: false,
      },
      thumbnailUrl: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      adPriority: {
          type: DataTypes.FLOAT,
          allowNull: false
      }

  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
