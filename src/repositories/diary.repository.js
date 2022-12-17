const { Diary } = require('../../models');
const { sequelize } = require("../../models");

class DiarysRepository {
  constructor(diaryModel) {
    this.dairyModel = dairyModel;
  }

    createDiary = async (title, images, content, weather) => {
    const createDiary = await Diary.create({
      title,
      images,
      content,
      weather,
    });
    return createDiary;
  };

  //다이어리 목록 전체 조회
  findAllDairies = async () => {
    const dairies = await this.dairyModel.findAllDairies({
      order: [["dairyId", "DESC"]],
      include: [{ model: this.dairyModel, attributes: [] }],
      attributes: ["title", "createdAt", "updatedAt"],
      group: "diaryId",
    });
    return dairies;
  };

  //다이어리 상세 조회
  findDetailDairy = async ({ diaryId }) => {
    const diary = await this.dairyModel.findByPk(diaryId);
    return diary;
  };

 
}

module.exports = DairysRepository;

