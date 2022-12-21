const DiaryRepository = require('../../src/repositories/diary.repository');
const { Diary } = require('../../models');

class DiaryService {
  constructor() {
    this.diaryRepository = new DiaryRepository(Diary);
  }
  diaryRepository = new DiaryRepository();
  createDiary = async (userId, title, fileName, content, weather) =>
    await this.diaryRepository.createDiary(
      userId,
      title,
      fileName,
      content,
      weather,
    );

  //다이어리 목록 전체 조회
  findAllDiaries = async (userId) => {
    const diaries = await this.diaryRepository.findAllDiaries(userId);
    return diaries;
  };

  //다이어리 상세 조회
  findDetailDiary = async ({ diaryId, userId }) => {
    const diary = await this.diaryRepository.findDetailDiary({
      diaryId,
      userId,
    });
    return diary;
  };

  //다이어리 업데이트
  updateDiary = async (userId, diaryId, title, image, content, weather) => {
    return await this.diaryRepository.updateDiary(
      userId,
      diaryId,
      title,
      image,
      content,
      weather,
    );
  };

  //다이어리 삭제
  deleteDiary = async (userId, diaryId) => {
    return await this.diaryRepository.deleteDiary(userId, diaryId);
  };
}

module.exports = DiaryService;
