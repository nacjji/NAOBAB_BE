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
      diaryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        onDelete: 'CASECADE',
      },
      title: {
        type: DataTypes.STRING,
        defaultValue: '나는 오늘 밥을 먹어따',
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '참 맛있었다.',
      },
      weather: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Diary',
    },
  );
  return Diary;
};
