'use strict';
const User = require('./user').User
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    static associate(models) {
      console.log()
    }
  }
  Freelancer.init({
    freelancerRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    oneliner: {
      type: DataTypes.TEXT
    },
    websiteUrl: {
      type: DataTypes.STRING
    },
    freelancerDescription: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};
