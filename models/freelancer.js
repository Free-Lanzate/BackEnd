
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    static associate(models) {
      Freelancer.hasMany(models.Post, {
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE',
        }
      });
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
