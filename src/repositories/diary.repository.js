const { Diary } = require('../../models');
const { sequelize } = require('../../models');

class DiarysRepository {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
  }

  createDiary = async (userId, title, image, content, weather) => {
    const createDiary = await Diary.create({
      userId,
      title,
      image,
      content,
      weather,
    });
    return createDiary;
  };

  //다이어리 목록 전체 조회
  findAllDiaries = async () => {
    const diaries = await this.diaryModel.findAll({
      order: [['diaryId', 'DESC']],
      include: [{ model: this.diaryModel, attributes: [] }],
      attributes: ['title', 'createdAt', 'updatedAt'],
      group: 'diaryId',
    });
    return diaries;
  };

  //다이어리 상세 조회
  findDetailDiary = async ({ diaryId }) => {
    const diary = await this.diaryModel.findByPk(diaryId);
    return diary;
  };
}

module.exports = DiarysRepository;
