'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'userId' });
    }
  }

  Diary.init(
    {
      diaryId: DataTypes.INTEGER,
      userId: { type: DataTypes.STRING, onDelete: 'CASECADE' },
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      content: DataTypes.STRING,
      weather: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Diary',
    },
  );
  return Diary;
};
