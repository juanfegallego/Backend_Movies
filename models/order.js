'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Order.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    movieId: DataTypes.INTEGER,
    movieTitle: DataTypes.STRING,
    imageMovie: DataTypes.STRING,
    rentalDate: DataTypes.DATE,
    returnDate: DataTypes.DATE  
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};