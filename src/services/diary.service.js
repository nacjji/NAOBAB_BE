const DiaryRepository = require('../../src/repositories/diary.repository');


class DiaryService {
  constructor() {
      this.diaryRepository = new DiaryRepository();
  }
  diaryRepository = new DiaryRepository();
  createDiary = async (userId, title, image, content, weather) =>
    await this.diaryRepository.createDiary(
      userId,
      title,
      image,
      content,
      weather,
    );

    //다이어리 목록 전체 조회
    findAllDiaries = async () => {
        const dairies = await this.DiaryRepository.findAllDiaries();
        return dairies;
    };

    //다이어리 상세 조회
    findDetailDiary = async ({ diaryId }) => {
        const diary = await this.DiaryRepository.findDetailDiary({ diaryId });
        return diary;
    };

}

module.exports = DiaryService;
