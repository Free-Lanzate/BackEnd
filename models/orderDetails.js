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
