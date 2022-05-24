
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
      Freelancer.belongsTo(models.User, {
        foreignKey: 'id'
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
    facebookUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    twitterUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    instagramUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    websiteUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    freelancerDescription: {
      type: DataTypes.TEXT
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};
