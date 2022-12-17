const { Diary } = require('../../models');
const { sequelize } = require('../../models');

class DiarysRepository {
  constructor(diaryModel) {
    this.diaryModel = diaryModel;
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
  findDetailDiary = async ({ diaryId }) => {
    const diary = await Diary.findByPk(diaryId);
    return diary;
  };
}

module.exports = DiarysRepository;
