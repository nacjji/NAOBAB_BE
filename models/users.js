'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    self_intro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};