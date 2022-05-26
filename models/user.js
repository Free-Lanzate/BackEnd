
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Freelancer,{
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE'       }
      });
      User.hasMany(models.Review, {
        foreignKey: {
          allowNull: false,
        }
      });
      User.hasMany(models.OrderDetails, {
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE',
        }
      });
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
      unique: true,
      validate: {
        isEmail: true
      }
    },
    location: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    },
    isFreelancer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tokenResetPassword: {
      type: DataTypes.STRING(700),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
