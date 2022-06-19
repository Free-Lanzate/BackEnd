const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    static associate(models) {
        OrderDetails.hasMany(models.OrderItem, {
            foreignKey: {
              allowNull: false,
              onUpdate: 'CASCADE',
            }
          });
    }
    static async findOrdersByFreelancer(freelancerId) {
      const [results, metadata] = await sequelize.query("select * from orderdetails join orderitems od on od.OrderDetailId = orderdetails.id join posts p on od.PostId = p.id join freelancers f on p.FreelancerId = f.id join users u on f.UserId = u.id where u.id = ?",{replacements:[freelancerId]});
      return results;
    }
  }
  OrderDetails.init({
    orderTotal: {
      type: DataTypes.DECIMAL(19, 0),
      defaultValue: 0,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};
