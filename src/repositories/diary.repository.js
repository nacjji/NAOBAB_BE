const { Diary } = require('../../models');

const {
  NotFoundError,
  ValidationError,
} = require('../../exceptions/index.exception');

class DiarysRepository {
  constructor(DiaryModel) {
    this.diaryModel = DiaryModel;
  }

  createDiary = async (userId, title, image, content, weather) => {
    // TODO: 프론트에서 날씨 정보 받아오면 이렇게 저장할 거야
    // const [temp, loca, weath] = req;
    // weather: { temp, loca, weath },

    // 프론트에서 값을 보낼 때 빈칸으로 전송하면 null이나 빈 값으로 오기 때문에 기본값이 들어가기 위해 아래와 같이 작성
    if (!title) {
      const createDiary = await Diary.create({
        userId,
        image,
        content,
        weather,
      });
      return createDiary;
    } else if (!content) {
      const createDiary = await Diary.create({
        userId,
        title,
        image,
        weather,
      });
      return createDiary;
    } else if (!content && !title) {
      const createDiary = await Diary.create({
        userId,
        image,
        weather,
      });
      return createDiary;
    }

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
    const diaries = await Diary.findAll({
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
