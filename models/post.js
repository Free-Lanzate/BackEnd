
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
        Post.hasMany(models.OrderItem,{
            foreignKey: {
              allowNull: false
            }
          });
        Post.belongsTo(models.Freelancer);
    }
    static async getPostInfo(postId) {
    const [results, metadata] = await sequelize.query("select * from posts join freelancers f on posts.FreelancerId = f.id join users u on f.UserId = u.id join orderItems o on o.PostId = posts.id join reviews r on o.id = r.OrderItemId where posts.id = ?",{replacements:[postId]});
    return results;
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
        type: DataTypes.DECIMAL(19, 0),
        allowNull: false,
        // getter example used in orderItemController
        get() {
          return this.getDataValue('postPrice');
        }
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
