const DiaryRepository = require('../../src/repositories/diary.repository');
const { Diary } = require('../../models');

class DiaryService {
  constructor() {
    this.diaryRepository = new DiaryRepository(Diary);
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
    const dairies = await this.diaryRepository.findAllDiaries();
    return dairies;
  };

  //다이어리 상세 조회
  findDetailDiary = async ({ diaryId }) => {
    const diary = await this.diaryRepository.findDetailDiary({ diaryId });
    return diary;
  };

  //다이어리 업데이트
  updateDiary = async (diaryId, title, image, content, weather) => {
    return await this.diaryRepository.updateDiary(
      diaryId,
      title,
      image,
      content,
      weather,
    );
  };

  //다이어리 삭제
  deleteDiary = async (diaryId) => {
    return await this.diaryRepository.deleteDiary(diaryId);
  };
}

module.exports = DiaryService;
