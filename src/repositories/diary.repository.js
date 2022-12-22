const { Diary } = require('../../models');

const {
  NotFoundError,
  ValidationError,
} = require('../../exceptions/index.exception');

class DiarysRepository {
  constructor(DiaryModel) {
    this.diaryModel = DiaryModel;
  }

  createDiary = async (userId, title, fileName, content, weather) => {
    if (!title) {
      const createDiary = await Diary.create({
        userId,
        image: fileName,
        content,
        weather,
      });
      return createDiary;
    } else if (!content) {
      const createDiary = await Diary.create({
        userId,
        title,
        image: fileName,
        weather,
      });
      return createDiary;
    } else if (!content && !title) {
      const createDiary = await Diary.create({
        userId,
        image: fileName,
        weather,
      });
      return createDiary;
    }

    const createDiary = await Diary.create({
      userId,
      title,
      image: fileName,
      content,
      weather,
      createdAt: new Date(),
    });
    return createDiary;
  };

  //다이어리 목록 전체 조회 -> where절 추가(userId)
  findAllDiaries = async (userId) => {
    const diaries = await Diary.findAll({
      where: { userId },
      order: [['diaryId', 'DESC']],
    });
    return diaries;
  };

  //다이어리 상세 조회
  findDetailDiary = async ({ diaryId, userId }) => {
    const diary = await Diary.findByPk(diaryId);
    if (!diary) {
      throw new NotFoundError('일기장이 존재하지 않아요');
    }
    if (diary.userId !== userId) {
      throw new ValidationError('해당 글의 작성자가 아닙니다.');
    }

    return diary;
  };

  //다이어리 업데이트

  updateDiary = async (userId, diaryId, title, image, content, weather) => {
    const diaryInfo = await Diary.findOne({ where: { diaryId } });

    if (!diaryInfo) {
      throw new NotFoundError('없는 글입니다.');
    }
    if (userId !== diaryInfo.userId) {
      throw new ValidationError('해당 글의 작성자가 아닙니다.');
    }
    return await this.diaryModel.update(
      { title, image, content, weather },
      { where: { diaryId } },
    );
  };
  //다이어리 삭제

  deleteDiary = async (userId, diaryId) => {
    const diaryInfo = await Diary.findOne({ where: { diaryId } });

    if (userId !== diaryInfo.userId) {
      throw new ValidationError('해당 글의 작성자가 아닙니다.');
    }
    await this.diaryModel.destroy({ where: { diaryId } });
  };
}

module.exports = DiarysRepository;
