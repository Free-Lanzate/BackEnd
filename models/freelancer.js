
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
      const [results, metadata] = await sequelize.query("select * from freelancers join users u on freelancers.UserId = u.id join reviews r on u.id = r.UserId join posts p on freelancers.id = p.FreelancerId where freelancers.id = ?" ,{replacements:[idFreelancer]});
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
