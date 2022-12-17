const DiaryRepository = require('../../src/repositories/diary.repository');

class DiaryService {
  diaryRepository = new DiaryRepository();
  createDiary = async (userId, title, image, content, weather) =>
    await this.diaryRepository.createDiary(
      userId,
      title,
      image,
      content,
      weather,
    );
}

module.exports = DiaryService;
