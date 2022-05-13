
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
      postTitle: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      postDescription: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      postPrice: {
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
