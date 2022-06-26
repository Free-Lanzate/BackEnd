
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    static async findAllFreelancers() {
      const [results, metadata] = await sequelize.query("select * from freelancers join users u on freelancers.UserId = u.id;");
      return results;
    }
    static async findFreelancerById(idFreelancer) {
      const [results, metadata] = await sequelize.query("select * from freelancers join users u on freelancers.UserId = u.id where u.id = ?",{replacements:[idFreelancer]});
      return results;
    }
    static async profileInfoFreelancerById(idFreelancer) {
      const [results, metadata] = await sequelize.query("select * from freelancers join users u on freelancers.UserId = u.id left join reviews r on u.id = r.UserId left join posts p on freelancers.id = p.FreelancerId where freelancers.id = ?" ,{replacements:[idFreelancer]});
      return results;
    }
    static async getPosts(idFreelancer) {
      const [results, metadata] = await sequelize.query("select * from freelancers join posts p on freelancers.id = p.FreelancerId where freelancers.id = ?" ,{replacements:[idFreelancer]});
      return results;
    }

    static associate(models) {
      Freelancer.hasMany(models.Post, {
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE',
        }
      });
      Freelancer.belongsTo(models.User, {
        allowNull: false,
        onUpdate: 'CASCADE',
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
    },
    phoneNumber: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};
