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
      group: 'postId',
    });
    return diaries;
  };

  //다이어리 상세 조회
  findDetailDiary = async ({ postId }) => {
    const post = await this.postsModel.findByPk(postId);
    return post;
  };
}

module.exports = DiarysRepository;
