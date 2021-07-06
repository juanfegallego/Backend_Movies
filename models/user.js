'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: "userId" });
    }
  };
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    telephone: DataTypes.STRING,
    token: DataTypes.STRING,
    isActive: DataTypes.STRING,
    imgUser: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN  }, 
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};