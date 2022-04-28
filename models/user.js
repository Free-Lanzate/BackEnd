'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Freelancer,{
        foreignKey: {
          allowNull: false
        }
      });
      User.hasMany(models.Review, {
        foreignKey: {
          allowNull: false,
        }
      })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
